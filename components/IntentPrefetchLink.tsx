'use client';

import type { AnchorHTMLAttributes, FocusEvent, MouseEvent, ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

type IntentPrefetchLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    children: ReactNode;
    prefetchOnIntent?: boolean;
  };

const getPrefetchPath = (href: LinkProps['href']) => {
  if (typeof href !== 'string') return null;
  if (!href.startsWith('/')) return null;

  const withoutHash = href.split('#')[0] ?? href;
  const withoutQuery = withoutHash.split('?')[0] ?? withoutHash;

  return withoutQuery || '/';
};

export default function IntentPrefetchLink({
  href,
  prefetchOnIntent = true,
  onMouseEnter,
  onFocus,
  children,
  ...props
}: IntentPrefetchLinkProps) {
  const router = useRouter();

  const prefetchIfNeeded = () => {
    if (!prefetchOnIntent) return;
    const path = getPrefetchPath(href);
    if (!path) return;
    void router.prefetch(path);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseEnter?.(event);
    prefetchIfNeeded();
  };

  const handleFocus = (event: FocusEvent<HTMLAnchorElement>) => {
    onFocus?.(event);
    prefetchIfNeeded();
  };

  return (
    <Link href={href} onMouseEnter={handleMouseEnter} onFocus={handleFocus} {...props}>
      {children}
    </Link>
  );
}
