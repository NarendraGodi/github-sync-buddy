## Changes

### 1. `src/data/profile.ts`
- Change the "Projects" highlight metric from `100+` to `20+`.

### 2. `src/routes/__root.tsx`
- Add Font Awesome Pro **thin** stylesheet `<link>` in the root `head()` so `fa-thin fa-medal` renders. Note: `fa-thin` is a Font Awesome **Pro** style — the free CDN doesn't include it. We'll load Pro from a kit if you have one, otherwise fall back to `fa-light` (free alternative via Font Awesome 6 free CDN doesn't include light/thin either). Realistic free option: use **Font Awesome 6 Free** with `fa-solid fa-medal`. I'll wire `fa-thin` as requested but include a note that it requires a Pro Kit URL — you can paste your kit code and I'll swap it in. Default fallback: `fa-solid fa-medal` from the free CDN so the icon shows out of the box.

### 3. `src/routes/index.tsx` — `Certifications` section
- Remove the centered ribbon-rack container.
- Left-align: replace `flex justify-center` + the bordered card with a left-aligned horizontal row directly under the section heading.
- Replace each `<img>` badge with a Font Awesome medal icon: `<i class="fa-thin fa-medal" />` (with solid fallback), sized large (~text-5xl), colored with the primary accent, with a subtle glow.
- Keep the small monospace caption (`shortName`) under each medal.
- Layout: `flex flex-wrap items-start gap-10` aligned to the start of the container — no centered card, no ribbons, no image frames.

### Question for you
Do you have a **Font Awesome Pro Kit** code? `fa-thin` only ships with Pro. Options:
- **A:** You give me your kit URL → I wire `fa-thin fa-medal` exactly as requested.
- **B:** Use free `fa-solid fa-medal` from the free CDN now (works immediately), swap to thin later.

I'll proceed with **B** as the default unless you tell me otherwise — the markup will still be FA medal icons, just the solid weight.

### Files touched
- `src/data/profile.ts` (1 line)
- `src/routes/__root.tsx` (add FA stylesheet link)
- `src/routes/index.tsx` (rewrite `Certifications` component)

No new dependencies; FA loaded via CDN `<link>`.