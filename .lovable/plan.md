## Developer Portfolio — Plan

A dark, techy multi-page portfolio built fresh in Lovable. Once this is scaffolded, you'll connect it to a new GitHub repo via **Connectors → GitHub** and we can start porting your old HTML/CSS content piece by piece (paste into chat, and I'll wire it in).

### Pages (each its own route for SEO + shareability)

- **/ (Home)** — Hero with name, tagline, primary CTA (View work / Get in touch). Short intro, featured projects (3), tech stack strip, footer.
- **/about** — Longer bio, background, what you're working on, skills grid, optional timeline.
- **/projects** — Full grid of projects with filter chips (e.g. Web, AI, Open Source). Each card: thumbnail, title, summary, tech tags, links to live site + GitHub.
- **/projects/$slug** — Per-project case study: problem, solution, screenshots, tech, lessons learned, links.
- **/blog** *(optional, included as empty-ready)* — List of posts. Markdown-friendly structure for later.
- **/contact** — Email link, social icons (GitHub, LinkedIn, X), simple contact form (saves to Lovable Cloud, optional email notification).

### Look & feel — "Dark & techy"

- Near-black background (`#0a0a0b`), high-contrast off-white text, single accent color (suggesting electric green `#39ff14` or cyber cyan — we can pick once you see it).
- Monospace accents (JetBrains Mono) for labels, code, project tags. Sans-serif (Inter) for body.
- Subtle terminal-style flourishes: blinking cursor in hero, `>` prompt prefixes on section headings, faint grid background.
- Smooth fade/slide animations on scroll. No heavy 3D or particles by default.
- Fully responsive, mobile-first.

### Functionality

- **Navigation**: sticky top header with route links (Home, Projects, About, Contact). Active route highlighted.
- **Theme**: dark by default. (Light mode can be added later if you want it.)
- **Contact form**: stored in Lovable Cloud database; you'll see submissions in the Cloud dashboard.
- **SEO**: per-route titles, descriptions, and OG tags so each page shares cleanly.
- **Project data**: starts as a typed array in code (easy to edit). Can move to Cloud DB later if you want to manage from a dashboard.

### Content I'll seed (you'll replace as we go)

Placeholder name, tagline, 3 sample projects, and bio text — all clearly marked so you can swap in your real content from your existing site.

### After scaffolding — recommended next steps

1. Tell me your name, tagline, and one real project to swap into the homepage.
2. Connect GitHub: **Connectors → GitHub → Connect project → Create Repository**.
3. Paste content from your old HTML site section by section; I'll port it into the right routes.
4. Add real images (drag into chat).
5. Publish via the **Publish** button (top right).

### Technical notes

- Stack: React 19, TanStack Start, Tailwind v4, shadcn/ui, Lovable Cloud (for contact form storage).
- File-based routes under `src/routes/` (`index.tsx`, `about.tsx`, `projects.tsx`, `projects.$slug.tsx`, `contact.tsx`, optional `blog.tsx`).
- Design tokens defined in `src/styles.css` (semantic HSL variables for bg, fg, accent, muted, border).
- Project data in `src/data/projects.ts` as a typed array.
- Contact submissions table in Lovable Cloud with RLS (insert-only for anon, read for you).
