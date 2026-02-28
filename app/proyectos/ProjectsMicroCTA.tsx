import Link from 'next/link';

export default function ProjectsMicroCTA() {
  return (
    <div className="container-custom mt-8 md:mt-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-[#d8cab4] bg-[#f6efe4]/85 px-5 py-5 text-sm md:flex-nowrap md:gap-3 md:px-6 md:py-6">
        <Link
          href="/diseno/modelos"
          aria-label="Ir a ver modelos en detalle"
          className="u-ease inline-flex items-center rounded-full border border-[#ccbba1] bg-transparent px-4 py-2 text-sm font-medium text-[#6f5b45] hover:border-[#bca183] hover:bg-[#f2e6d4]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f6844]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6efe4]"
        >
          Ver modelos en detalle
        </Link>
      </div>
    </div>
  );
}
