# Product

## Register

brand

## Users

Primary audience is technical and creative recruiters/hiring managers evaluating Joaquin Paolo Pacia for UI/UX design, multimedia production, and graphic design roles. They visit briefly (often <60 seconds on first pass), scan for fit signals, and decide whether to forward the profile or schedule a screen. Many arrive from LinkedIn, a resume link, or a cold-application context where the portfolio is the deciding artifact between "interview" and "skip."

Their context: a recruiter has a stack of candidates, limited time, and a checklist (relevant projects, polish, range, attention to detail). They are not the deep-dive audience — that comes later, in interviews. The portfolio's job is to win the screen, not to exhaustively document every project.

Secondary audience: peers and design community evaluating taste; potential freelance contacts. Should not dilute the recruiter focus.

## Product Purpose

A personal portfolio site for Joaquin Paolo Pacia, a recently graduated multimedia producer based in Mississauga, Ontario. The site exists to land design and multimedia roles by showing breadth across three disciplines (UI/UX, multimedia/video, graphic design) without scattering. Each project should be discoverable, browsable in seconds, and explorable in depth via slug pages backed by Wix CMS rich content.

Success looks like: a recruiter lands on the site, gets the candidate's positioning within 10 seconds, finds at least one project relevant to their open role within 30 seconds, and reaches the contact path (resume download, email, LinkedIn) without friction. The portfolio also serves as the canonical reference shared in cold applications, on LinkedIn, and during interview prep.

## Brand Personality

Minimal, technical, precise. The portfolio reads as quiet confidence — restraint is the statement, not the absence of one. Voice in copy is direct and first-person ("I designed", "I built"), avoiding both casual personality riffs and corporate hedging. Precision in typography, spacing, and information hierarchy carries the brand instead of color, motion, or visual decoration.

The work shown is varied and at times bold (saturated event posters, maximalist Halloween graphics, expressive thumbnails) — but the frame around it is calm, structured, and editorial. Designer who codes, not coder who designs: the framing should privilege design taste over technical flex, even though the site is hand-built in Next.js.

## Anti-references

- **Generic AI/SaaS startup landing** — gradient hero, 3-feature card grid, cyan-purple palette, glassmorphism. The default trained-data reflex when asked to "design a portfolio." Avoid.
- **Awwwards-trendy agency portfolio** — scroll-jacking, custom cursors, oversized motion, "wow factor" over content. Reads as an agency case study, not a personal portfolio.
- **Dribbble-style designer maximalism** — loud color, decorative illustrations, bouncy springs, surface over signal. Trades recruiter scannability for taste signaling to peers.
- **Bare-bones HTML resume** — Times New Roman, no design, text-only. Too plain for a designer; fails to demonstrate visual taste even when information-dense.

The current Brittany-Chiang-style sidebar layout is the rough reference but should not become a one-to-one clone. Take the calm, precise structure; do not adopt the navy-and-cyan SWE-portfolio palette wholesale.

## Design Principles

1. **Recruiter-first scannability.** Every screen optimizes for the 30-second skim. Hierarchy, density, and labels are tuned to surface "what this person does" and "is one of their projects relevant to my open role" without scrolling work.
2. **Show the work, not the chrome.** The 30+ projects (logos, videos, IG posts, UX case studies) carry the brand. The site UI is the frame — restrained, consistent, and never competing with project imagery.
3. **Range without dilution.** UX, multimedia, and graphic design coexist as one cohesive practice, not three separate portfolios stitched together. Filtering, tagging, or grouping should reinforce the narrative that this is one person with breadth.
4. **Precision over personality.** Tight grid, considered spacing, restrained type scale, deliberate color use. Where most personal sites lean on warmth or playfulness, this one earns trust through craft.
5. **Designer who codes.** The portfolio is built in code (Next.js, Tailwind, Wix CMS) but reads as design work. Technical implementation should be invisible to recruiters; visible to engineers who care to look.

## Accessibility & Inclusion

WCAG 2.1 AA as the baseline standard. Specifically:

- Color contrast 4.5:1 for body text, 3:1 for large text and UI components.
- Full keyboard navigability across nav, project cards, and contact links.
- Semantic HTML (`<main>`, `<section>`, `<nav>`, `<article>`) and proper heading hierarchy.
- Descriptive alt text on every project image (already partially present via Wix CMS image fields).
- Visible focus indicators that work in both light and dark mode.
- Honor `prefers-reduced-motion` for any future motion work.
- Forms (contact, resume request) labeled and error-announced if added later.

Reduced motion support is a forward-looking concern — minimal motion exists today, but if scroll effects or hover animations get added, they must respect the user preference.
