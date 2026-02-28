import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const SITE_URL = (process.env.SITE_URL || "https://huella-mendoza-site.vercel.app").replace(/\/+$/, "");
const OUTPUT_DIR = path.resolve(process.cwd(), "md-export");
const SUMMARY_PATH = path.resolve(process.cwd(), "summary.json");
const MAX_PAGES = 40;

const EDGE_CANDIDATES = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const KEY_ROUTES = ["/", "/base", "/diseno", "/refugios", "/huella", "/proyectos", "/contacto"];
const EXCLUDED_PREFIXES = ["/auth", "/privacy", "/terms", "/cookies", "/account"];
const EXCLUDED_EXACT = new Set(["/privacy", "/terms", "/cookies"]);

const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const SKIP_TAGS = new Set([
  "script",
  "style",
  "noscript",
  "svg",
  "path",
  "defs",
  "lineargradient",
  "stop",
  "canvas",
  "iframe",
  "head",
]);

const STOPWORDS = new Set([
  "de",
  "la",
  "el",
  "los",
  "las",
  "y",
  "o",
  "a",
  "en",
  "con",
  "por",
  "para",
  "del",
  "al",
  "un",
  "una",
  "unos",
  "unas",
  "que",
  "se",
  "su",
  "sus",
  "tu",
  "tus",
  "mi",
  "mis",
  "te",
  "lo",
  "le",
  "les",
  "es",
  "son",
  "ha",
  "han",
  "como",
  "pero",
  "sin",
  "si",
  "no",
  "ya",
  "hay",
  "sobre",
  "entre",
  "desde",
  "hasta",
  "este",
  "esta",
  "estos",
  "estas",
  "ese",
  "esa",
  "esos",
  "esas",
  "their",
  "your",
  "you",
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "are",
  "was",
  "were",
]);

function findEdgePath() {
  for (const candidate of EDGE_CANDIDATES) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error("Microsoft Edge executable not found.");
}

function normalizeRoute(route) {
  if (!route || route === "/") return "/";
  let value = route.trim();
  if (!value.startsWith("/")) value = `/${value}`;
  value = value.replace(/\/{2,}/g, "/");
  if (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1);
  return value || "/";
}

function isExcludedRoute(route) {
  if (EXCLUDED_EXACT.has(route)) return true;
  return EXCLUDED_PREFIXES.some((prefix) => route === prefix || route.startsWith(`${prefix}/`));
}

function decodeEntities(input) {
  return input
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function cleanText(input) {
  return decodeEntities(input)
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseAttrs(raw) {
  const attrs = {};
  const attrRe = /([^\s=\/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let match;
  while ((match = attrRe.exec(raw))) {
    const key = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? "";
    attrs[key] = decodeEntities(value);
  }
  return attrs;
}

function parseHtml(html) {
  const root = { type: "element", tag: "root", attrs: {}, parent: null, children: [] };
  const stack = [root];
  const tokenRe = /<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<\/?[a-zA-Z0-9:-]+(?:\s+[^<>]*?)?>|[^<]+/g;
  let token;

  while ((token = tokenRe.exec(html))) {
    const value = token[0];

    if (value.startsWith("<!--") || value.startsWith("<!DOCTYPE") || value.startsWith("<!doctype")) {
      continue;
    }

    if (value.startsWith("</")) {
      const tagMatch = value.match(/^<\/\s*([a-zA-Z0-9:-]+)/);
      if (!tagMatch) continue;
      const closingTag = tagMatch[1].toLowerCase();
      while (stack.length > 1) {
        const current = stack.pop();
        if (current.tag === closingTag) break;
      }
      continue;
    }

    if (value.startsWith("<")) {
      const openMatch = value.match(/^<\s*([a-zA-Z0-9:-]+)([\s\S]*?)\/?>$/);
      if (!openMatch) continue;
      const tag = openMatch[1].toLowerCase();
      const attrs = parseAttrs(openMatch[2] || "");
      const node = { type: "element", tag, attrs, parent: stack[stack.length - 1], children: [] };
      stack[stack.length - 1].children.push(node);
      const selfClosing = /\/\s*>$/.test(value) || VOID_TAGS.has(tag);
      if (!selfClosing) stack.push(node);
      continue;
    }

    if (!value.trim()) continue;
    stack[stack.length - 1].children.push({ type: "text", text: value, parent: stack[stack.length - 1] });
  }
  return root;
}

function findAll(node, predicate, result = []) {
  if (node.type === "element" && predicate(node)) result.push(node);
  for (const child of node.children || []) findAll(child, predicate, result);
  return result;
}

function findFirst(node, predicate) {
  if (node.type === "element" && predicate(node)) return node;
  for (const child of node.children || []) {
    const found = findFirst(child, predicate);
    if (found) return found;
  }
  return null;
}

function isHidden(node) {
  if (node.type !== "element") return false;
  if ("hidden" in node.attrs) return true;
  if ((node.attrs["aria-hidden"] || "").toLowerCase() === "true") return true;
  if ((node.attrs.type || "").toLowerCase() === "hidden") return true;
  const cls = (node.attrs.class || "").toLowerCase();
  if (cls.includes("sr-only")) return true;
  const style = (node.attrs.style || "").toLowerCase();
  if (style.includes("display:none") || style.includes("visibility:hidden")) return true;
  return false;
}

function nodeText(node) {
  if (!node) return "";
  if (node.type === "text") return cleanText(node.text || "");
  if (node.type !== "element" || SKIP_TAGS.has(node.tag) || isHidden(node)) return "";
  let out = "";
  for (const child of node.children || []) {
    const text = nodeText(child);
    if (text) out += `${text} `;
  }
  return cleanText(out);
}

function uniquePush(list, value, seen) {
  const cleaned = cleanText(value);
  if (!cleaned) return;
  const key = cleaned.toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  list.push(cleaned);
}

function inferSectionLabel(sectionData, index) {
  const firstHeading = sectionData.lines.find((line) => line.startsWith("#"));
  if (index === 0) return "Hero";
  if (firstHeading) return firstHeading.replace(/^#+\s*/, "").slice(0, 90);
  const joined = [...sectionData.lines, ...sectionData.ctas].join(" ").toLowerCase();
  if (joined.includes("contacto")) return "Contact";
  if (joined.includes("proyecto")) return "Projects";
  if (joined.includes("cookie")) return "Cookies";
  return `Section ${index + 1}`;
}

function extractSection(sectionNode) {
  const lines = [];
  const images = [];
  const ctas = [];
  const seenLines = new Set();
  const seenImages = new Set();
  const seenCtas = new Set();

  function walk(node) {
    if (node.type !== "element") return;
    if (SKIP_TAGS.has(node.tag) || isHidden(node)) return;

    if (node.tag === "img") {
      const alt = cleanText(node.attrs.alt || "");
      if (alt) uniquePush(images, `![${alt}]`, seenImages);
      return;
    }

    if (node.tag === "h1" || node.tag === "h2" || node.tag === "h3") {
      const text = nodeText(node);
      if (text) {
        const level = Number(node.tag[1]);
        uniquePush(lines, `${"#".repeat(level)} ${text}`, seenLines);
      }
      return;
    }

    if (node.tag === "p" || node.tag === "li" || node.tag === "blockquote") {
      const text = nodeText(node);
      if (text) uniquePush(lines, text, seenLines);
      return;
    }

    if (node.tag === "a" || node.tag === "button") {
      const text = nodeText(node);
      if (text && text.length <= 100) uniquePush(ctas, text, seenCtas);
    }

    if (node.tag === "input") {
      const type = (node.attrs.type || "").toLowerCase();
      if (type === "submit" || type === "button") {
        const value = cleanText(node.attrs.value || "");
        if (value) uniquePush(ctas, value, seenCtas);
      }
      return;
    }

    for (const child of node.children || []) walk(child);
  }

  walk(sectionNode);
  return { lines, images, ctas };
}

function extractNavTexts(bodyNode) {
  const navNodes = findAll(bodyNode, (node) => node.tag === "nav" || node.tag === "header");
  const output = [];
  const seen = new Set();
  for (const nav of navNodes) {
    const items = findAll(nav, (n) => ["a", "button", "span", "p", "li", "h1", "h2", "h3"].includes(n.tag));
    for (const item of items) {
      const text = nodeText(item);
      if (text && text.length <= 100) uniquePush(output, text, seen);
    }
  }
  return output;
}

function extractFooterTexts(bodyNode) {
  const footerNodes = findAll(bodyNode, (node) => node.tag === "footer");
  const output = [];
  const seen = new Set();
  for (const footer of footerNodes) {
    const items = findAll(footer, (n) => ["a", "button", "span", "p", "li", "h1", "h2", "h3", "div"].includes(n.tag));
    for (const item of items) {
      const text = nodeText(item);
      if (text && text.length <= 220) uniquePush(output, text, seen);
    }
  }
  return output;
}

function collectSections(bodyNode) {
  const sections = findAll(bodyNode, (node) => node.tag === "section");
  const topLevelSections = sections.filter((section) => !section.parent || section.parent.tag !== "section");
  if (topLevelSections.length > 0) return topLevelSections;
  const mains = findAll(bodyNode, (node) => node.tag === "main");
  if (mains.length > 0) return mains;
  return [bodyNode];
}

function tokenize(text) {
  return (text.toLowerCase().match(/\p{L}[\p{L}\p{N}]*/gu) || []).filter(Boolean);
}

function topTerms(tokens, limit = 10) {
  const freq = new Map();
  for (const token of tokens) {
    if (token.length < 3) continue;
    if (STOPWORDS.has(token)) continue;
    freq.set(token, (freq.get(token) || 0) + 1);
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit);
}

function pathToFilename(route) {
  if (route === "/") return "page-home.md";
  const slug = route
    .replace(/^\//, "")
    .replace(/\//g, "-")
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return `page-${slug || "home"}.md`;
}

function getEdgeDom(edgePath, route) {
  const target = new URL(route, SITE_URL).toString();
  const args = [
    "--headless",
    "--disable-gpu",
    "--disable-extensions",
    "--disable-background-networking",
    "--disable-sync",
    "--metrics-recording-only",
    "--no-first-run",
    "--hide-scrollbars",
    "--virtual-time-budget=5000",
    "--dump-dom",
    target,
  ];
  return execFileSync(edgePath, args, {
    encoding: "utf8",
    maxBuffer: 100 * 1024 * 1024,
    timeout: 150000,
    stdio: ["ignore", "pipe", "ignore"],
  });
}

function extractInternalLinks(html) {
  const links = new Set();
  const hrefRe = /href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi;
  let match;
  while ((match = hrefRe.exec(html))) {
    const href = decodeEntities(match[1] ?? match[2] ?? "").trim();
    if (!href) continue;
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
      continue;
    }
    let url;
    try {
      url = new URL(href, SITE_URL);
    } catch {
      continue;
    }
    if (url.origin !== new URL(SITE_URL).origin) continue;
    const route = normalizeRoute(url.pathname);
    if (isExcludedRoute(route)) continue;
    if (
      route.startsWith("/_next") ||
      route.startsWith("/api") ||
      route.startsWith("/images") ||
      route.startsWith("/media") ||
      route.startsWith("/icons")
    ) {
      continue;
    }
    if (/\.(png|jpe?g|webp|svg|gif|ico|css|js|txt|xml|json|pdf|woff2?|ttf|eot|mp4|webm|map)$/i.test(route)) {
      continue;
    }
    links.add(route);
  }
  return [...links];
}

function detectNotFound(html) {
  const tree = parseHtml(html);
  const body = findFirst(tree, (node) => node.tag === "body") || tree;
  const visible = nodeText(body).toLowerCase();
  if (!visible) return true;
  if (visible.includes("this page could not be found")) return true;
  if (visible.includes("404: this page could not be found")) return true;
  const compact = visible.replace(/\s+/g, " ").trim();
  if (compact === "404 this page could not be found.") return true;
  return false;
}

function markdownFromPage(route, html) {
  const tree = parseHtml(html);
  const body = findFirst(tree, (node) => node.tag === "body") || tree;
  const sections = collectSections(body);
  const nav = extractNavTexts(body);
  const footer = extractFooterTexts(body);

  const sectionBlocks = [];
  const pageTexts = [];
  let ctaCount = 0;

  sections.forEach((sectionNode, index) => {
    const section = extractSection(sectionNode);
    if (section.lines.length === 0 && section.images.length === 0 && section.ctas.length === 0) return;
    const label = inferSectionLabel(section, index);
    const lines = [];
    lines.push(`## SECTION: ${label}`);
    lines.push("");
    section.lines.forEach((line) => lines.push(line));
    section.images.forEach((image) => lines.push(image));
    if (section.ctas.length > 0) {
      lines.push("");
      section.ctas.forEach((cta) => lines.push(`[CTA] ${cta}`));
    }
    sectionBlocks.push(lines.join("\n"));
    pageTexts.push(...section.lines, ...section.ctas, ...section.images);
    ctaCount += section.ctas.length;
  });

  pageTexts.push(...nav, ...footer);
  const tokens = tokenize(pageTexts.join(" "));
  const repeated = topTerms(tokens, 10);

  const md = [];
  md.push(`# PAGE: ${route}`);
  md.push("");
  md.push(`URL: ${new URL(route, SITE_URL).toString()}`);
  md.push("");
  sectionBlocks.forEach((block) => {
    md.push(block);
    md.push("");
  });
  md.push("## NAVIGATION");
  md.push("");
  if (nav.length === 0) md.push("- (No navigation text detected)");
  else nav.forEach((item) => md.push(`- ${item}`));
  md.push("");
  md.push("## FOOTER");
  md.push("");
  if (footer.length === 0) md.push("- (No footer text detected)");
  else footer.forEach((item) => md.push(`- ${item}`));
  md.push("");
  md.push("## SECTION METRICS");
  md.push("");
  md.push(`- Total words: ${tokens.length}`);
  md.push(`- Total CTAs: ${ctaCount}`);
  md.push("- Top repeated terms (10):");
  if (repeated.length === 0) md.push("  1. (No repeated terms detected)");
  else repeated.forEach(([term, count], i) => md.push(`  ${i + 1}. ${term} (${count})`));

  return {
    markdown: `${md.join("\n").trim()}\n`,
    metrics: { wordCount: tokens.length, ctaCount, repeated, tokens },
  };
}

function prepareOutputs() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const entry of fs.readdirSync(OUTPUT_DIR)) {
    if (/^page-.*\.md$/i.test(entry)) fs.unlinkSync(path.join(OUTPUT_DIR, entry));
  }
  if (fs.existsSync(SUMMARY_PATH)) fs.unlinkSync(SUMMARY_PATH);
}

function main() {
  const edgePath = findEdgePath();
  prepareOutputs();

  const queue = [...KEY_ROUTES.map(normalizeRoute)];
  const seen = new Set();
  const pages = [];
  const htmlByRoute = new Map();

  while (queue.length > 0 && pages.length < MAX_PAGES) {
    const route = normalizeRoute(queue.shift());
    if (seen.has(route)) continue;
    seen.add(route);
    if (isExcludedRoute(route)) continue;

    let html;
    try {
      html = getEdgeDom(edgePath, route);
    } catch (error) {
      console.log(`Failed render ${route}: ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }

    htmlByRoute.set(route, html);
    pages.push(route);
    console.log(`Rendered ${route}`);

    const discovered = extractInternalLinks(html);
    for (const nextRoute of discovered) {
      if (!seen.has(nextRoute) && !isExcludedRoute(nextRoute)) queue.push(nextRoute);
    }
  }

  const results = [];
  const globalTokens = [];
  const nonLegalTokens = [];
  const keyRouteChecks = [];

  for (const route of pages) {
    const html = htmlByRoute.get(route);
    if (!html) continue;
    const output = markdownFromPage(route, html);
    const fileName = pathToFilename(route);
    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), output.markdown, "utf8");

    results.push({
      route,
      fileName,
      wordCount: output.metrics.wordCount,
      ctaCount: output.metrics.ctaCount,
      topTerms: output.metrics.repeated,
    });
    globalTokens.push(...output.metrics.tokens);
    if (!isExcludedRoute(route)) nonLegalTokens.push(...output.metrics.tokens);
    console.log(`Exported ${fileName}`);
  }

  for (const route of KEY_ROUTES) {
    const html = htmlByRoute.get(route);
    const notFound = !html || detectNotFound(html);
    keyRouteChecks.push({ route, ok: !notFound, notFound });
  }

  const summary = {
    siteUrl: SITE_URL,
    generatedAt: new Date().toISOString(),
    totalPages: results.length,
    keyRoutes: keyRouteChecks,
    pages: results,
    globalTopTerms: topTerms(globalTokens, 20),
    nonLegalAuthTopTerms: topTerms(nonLegalTokens, 20),
  };
  fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2), "utf8");

  const failedKeys = keyRouteChecks.filter((item) => !item.ok).map((item) => item.route);
  console.log(`DONE total_pages=${results.length}`);
  console.log(
    `TOP_NON_LEGAL=${summary.nonLegalAuthTopTerms
      .slice(0, 10)
      .map(([term, count]) => `${term}:${count}`)
      .join(",")}`
  );
  if (failedKeys.length > 0) {
    console.log(`KEY_ROUTE_404=${failedKeys.join(",")}`);
  } else {
    console.log("KEY_ROUTE_404=none");
  }
}

main();
