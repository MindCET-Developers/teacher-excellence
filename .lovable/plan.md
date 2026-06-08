## Problem

In the hero section, the floating purple decorative block on the right and the orange block on the left are positioned where the headline sits, so on medium widths (e.g. ~950px) the purple block visibly covers the word "Coding" in "Vibe Coding" and the orange block bleeds into "חוסן, מצוינות".

## Fix

In `src/App.tsx`, adjust the two decorative `<div>`s inside the HERO `<section>` (currently the orange block at `left-[6%] top-12` and the purple block at `right-[8%] top-40`):

1. Move them out from behind the headline:
   - Orange block: push higher and further to the edge (e.g. `-left-10 -top-6`) and shrink slightly.
   - Purple block: move to the lower-right area near the image edge (e.g. `right-[2%] bottom-10`) instead of overlapping the H1.
2. Raise the headline/text column above the decorations with `relative z-10` on the text column wrapper, so even if a decoration overlaps at unusual breakpoints the text stays readable.
3. Keep them hidden below `md` (already the case) and only show on `lg:` and up where there's enough horizontal room, to guarantee they never collide with the headline on tablet widths.

No other sections or content change. Pure visual/layout adjustment in the hero.
