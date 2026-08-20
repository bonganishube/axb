/* Nav entries that are not public yet. Their links are hidden everywhere,
   including local development, so nobody can click through to them. Set
   NEXT_PUBLIC_SHOW_DRAFT_PAGES=true to bring them back while working on them
   (`NEXT_PUBLIC_SHOW_DRAFT_PAGES=true npm run dev`). */

/* Hidden nav links — includes on-page anchors, e.g. "/#packages" points at the
   Pricing section, which is currently commented out of the home page. */
export const DRAFT_LINKS = ["/offerings", "/#packages"];

/* Hidden links that are real routes, so they also need to be unreachable by
   direct URL. Kept in sync with the same list in next.config.ts. */
export const DRAFT_ROUTES = ["/offerings"];

export const SHOW_DRAFT_PAGES =
  process.env.NEXT_PUBLIC_SHOW_DRAFT_PAGES === "true";

export function isDraftLink(href: string) {
  return (
    DRAFT_LINKS.includes(href) ||
    DRAFT_ROUTES.some((route) => href.startsWith(`${route}/`))
  );
}
