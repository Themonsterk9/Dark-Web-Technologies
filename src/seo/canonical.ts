// src/seo/canonical.ts

/**
 * Returns the canonical URL for the current page.
 * Uses VITE_PROD_URL environment variable when available,
 * otherwise falls back to window.location.
 * Trailing slashes on the origin are normalised.
 */
export function getCanonicalUrl(): string {
  const prodDomain = import.meta.env.VITE_PROD_URL as string | undefined;
  const origin = prodDomain
    ? prodDomain.replace(/\/$/, '')           // strip trailing slash from env var
    : typeof window !== 'undefined'
      ? window.location.origin
      : '';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  return `${origin}${pathname}`;
}
