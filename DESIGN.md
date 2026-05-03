---
name: Joaquin Pacia Portfolio
description: Personal portfolio for a multimedia producer; calm editorial frame around design and video work.
colors:
  ink: "#111111"
  paper: "#ffffff"
  graphite: "#171717"
  bone: "#ededed"
  accent-emerald: "#059669"
  accent-emerald-deep: "#047857"
  accent-emerald-bright: "#10b981"
  tag-green-dark: "#22c55e"
  tag-green-light: "#4ade80"
  rail: "#4b5563"
  text-primary-dark: "#f3f4f6"
  text-secondary-dark: "#d1d5db"
  text-muted-dark: "#9ca3af"
  surface-card-dark: "#292524"
  border-subtle-dark: "#374151"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  meta:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent-emerald}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.accent-emerald-deep}"
    textColor: "{colors.paper}"
  button-resume:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "4px 12px"
    typography: "{typography.meta}"
  chip-tag:
    backgroundColor: "{colors.tag-green-dark}"
    textColor: "{colors.tag-green-dark}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
    typography: "{typography.label}"
  chip-category:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.text-secondary-dark}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
    typography: "{typography.label}"
  card-project-image:
    backgroundColor: "{colors.surface-card-dark}"
    rounded: "{rounded.lg}"
  timeline-item:
    backgroundColor: "{colors.rail}"
    width: "2px"
  back-to-top:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text-muted-dark}"
    rounded: "{rounded.full}"
    size: "36px"
---

# Design System: Joaquin Pacia Portfolio

## 1. Overview

**Creative North Star: "The Editorial Desk"**

The portfolio reads as a designed magazine spread, not a marketing page. The site UI is a frame around the work — restrained type, tight grid, generous spacing — and the work itself (logos, posters, video stills, UX prototypes) carries the color and personality. The brand is "designer who codes," so the chrome stays quiet on purpose: precision in hierarchy and rhythm earns trust where decoration would dilute it.

Everything here is in service of a recruiter scanning for fit in under 60 seconds. Sections are stacked top-down (About → Experience → Education → Projects), the left sidebar at desktop fixes Joaquin's identity in view, and project cards are designed to be readable at a glance with one path forward (See Project). The system explicitly rejects the four anti-references called out in PRODUCT.md: generic AI/SaaS landing-page chrome, Awwwards-trendy agency motion, Dribbble maximalism, and bare HTML resumes.

**Key Characteristics:**
- One restrained accent (emerald-600) for the primary action path; everything else is tinted neutral.
- Flat surfaces by default. Shadows and depth only as response to state.
- Inter as the single workhorse typeface; hierarchy via scale + weight, not font swaps.
- Project imagery is the loud element. The frame around it never competes.
- Dark mode is the default canvas; light mode is supported via `prefers-color-scheme`.

## 2. Colors

A tinted-neutral foundation (warm graphite + bone) anchors the surface, with one emerald accent reserved for action and a green tag color for taxonomy. No hero gradients, no second brand color competing for attention.

### Primary
- **Verdant Action** (`#059669`, oklch ~0.62 0.16 152): The single accent. Reserved for the primary call-to-action path — "See Project," "Live Demo," "See All Experiences." Hover state deepens to `#047857` in light, brightens to `#10b981` in dark.

### Secondary
- **Sage Tag** (`#22c55e` dark mode text on a `#22c55e` 30% alpha fill, `#4ade80` 90% alpha pill in light): Used exclusively on tag/skill chips. Acts as a taxonomy color, not a second brand color — never carries action meaning.

### Neutral
- **Ink** (`#111111`): Dark-mode background and the resume-download button fill. Replace eventually with a tinted near-black (oklch ~0.18 0.005 250) per the impeccable color law against pure `#000`.
- **Paper** (`#ffffff`): Light-mode background. Same tinting note applies.
- **Graphite** (`#171717`): Light-mode body text.
- **Bone** (`#ededed`): Dark-mode body text — high contrast against Ink.
- **Surface Card** (`#292524`, Tailwind `stone-800`): Dark-mode card and chip backgrounds. Slight warmth differentiates it from pure neutral grays.
- **Rail Gray** (`#4b5563`, Tailwind `gray-600`): The vertical timeline rail (`before:w-0.5`) running down the left edge of every Experience, Education, and Project entry. The signature structural element.
- **Text Primary Dark** (`#f3f4f6`), **Text Secondary Dark** (`#d1d5db`), **Text Muted Dark** (`#9ca3af`): Three-step text hierarchy in dark mode. Light mode mirrors with gray-900 / gray-700 / gray-500.

### Named Rules

**The One Voice Rule.** Verdant Action is the only saturated color in the chrome. It appears on at most 10% of any given screen — the active CTA, nothing else. If a second accent is needed, push it onto the work itself, not the frame.

**The No-Pure-Neutral Rule.** Never use `#000` or `#fff` literally. Tint every neutral toward warm graphite (chroma 0.005 in OKLCH is enough). The current `Ink` and `Paper` values are inherited from earlier code and should migrate to tinted equivalents on the next refactor.

**The Gray Discipline Rule.** Stick to one neutral family per surface. The codebase currently mixes Tailwind `gray-*`, `stone-*`, `slate-*`, and `neutral-*` interchangeably. Going forward: `stone-*` for warm surfaces, `gray-*` for cool text. Do not introduce `slate-*` or `neutral-*` for new work.

## 3. Typography

**Display Font:** Inter (with `system-ui, sans-serif` fallback). Loaded via `next/font/google` in `app/layout.tsx`.
**Body Font:** Inter — same family, varied by weight and size.

**Character:** A single workhorse typeface, used at five clearly distinct scale steps. Hierarchy is carried by size and weight contrast, never by switching faces. Inter is precise enough to read as engineered, neutral enough to never call attention to itself — exactly the "designer who codes" register.

### Hierarchy
- **Display** (Inter 700, 2.25rem / 36px, line-height 1.1): Project page titles (`<h1>`) and the sidebar identity ("Joaquin Paolo Pacia"). One per page.
- **Headline** (Inter 700, 1.875rem / 30px, line-height 1.2): Section headings — About, Experience, Education, Projects. Marks the top of every scrollable section.
- **Title** (Inter 600, 1.5rem / 24px, line-height 1.3): Card headings — job titles, degree names, project names within the list view.
- **Body** (Inter 400, 1rem / 16px, line-height 1.6): Paragraphs in About, project descriptions, rich-text content. Line length should cap at 65–75ch.
- **Meta** (Inter 400, 0.875rem / 14px): Subtitles, dates, secondary labels. Used for "Multimedia Producer," location, date ranges.
- **Label** (Inter 500, 0.75rem / 12px, letter-spacing 0.02em): Tag chips, category chips, micro-text only.

### Named Rules

**The One-Family Rule.** Inter is the only typeface. No script, no serif, no display-only secondary face. Variation comes from weight (400 / 500 / 600 / 700) and scale, never from font swaps.

**The Body-Font Bug Rule.** `app/globals.css` currently declares `font-family: Arial, Helvetica, sans-serif` on `body`, which overrides the Inter `next/font` token. This is a bug. Fix the body declaration to use `var(--font-inter-sans)` (or remove it entirely so the Tailwind `font-sans` token takes precedence).

## 4. Elevation

Flat by default, with shadows reserved as a response to state — never as a resting decoration. At rest, surfaces sit on the background with no shadow. On hover or focus, a soft shadow appears to confirm interactivity. This is a deliberate move away from the current code, which scatters `shadow-md` / `shadow-lg` / `shadow-xl` ad-hoc across cards, buttons, and the featured-image container.

The portfolio also currently uses glassmorphism on the sticky navbar (`bg-white/30 dark:bg-neutral-800/30 backdrop-blur-lg`) and the back-to-top button (`bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm`). Per the impeccable absolute-ban on glassmorphism-as-default, these should be replaced with solid tinted surfaces in the next refresh.

### Shadow Vocabulary
- **State shadow** (`box-shadow: 0 4px 12px oklch(0% 0 0 / 0.15)`): Applied on hover/focus to buttons and project cards. Confirms the surface is interactive.
- **Featured-image frame** (`box-shadow: 0 4px 12px rgba(0,0,0,0.3)`): The single ambient shadow currently used at rest, on the project-page video iframe. Acceptable because the featured image is a deliberate visual anchor; do not propagate this pattern.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, focus). No resting shadow on cards, navigation, or chips.

**The Anti-Glass Rule.** No `backdrop-filter: blur()` on chrome surfaces. The current navbar and back-to-top button are exceptions inherited from earlier code; they should be solid (`bg-stone-900` with full opacity) on the next pass.

## 5. Components

Every component leans on the Verdant Action accent + tinted neutrals + the rounded scale. Variants are intentional, not decorative.

### Buttons

- **Shape:** Gently rounded corners (`rounded-lg` = 8px). The resume-download button is the exception (`rounded-sm` = 4px), retained for its compact density.
- **Primary** (Verdant Action): Emerald-600 fill, white text, `px-6 py-3`. Used for "See Project," "See All Experiences," "Live Demo." The single conversion path. Hover deepens fill (light mode) or brightens it (dark mode), and a state shadow appears.
- **Resume Download:** Ink-on-paper invert. Dark fill (`#111`), white text, white 1px border, `rounded-sm`, `px-3 py-1`. Hover inverts to white fill, dark text. Lives in the sidebar Header only.
- **Ghost / Filter Chip:** No fill at rest in dark mode; gray-400 text. Selected state takes a `stone-700/30` fill with primary text. Used for category filters above the project list.

### Chips
- **Tag chip** (`chip-tag`): Pill (`rounded-full`), `px-3 py-1.5`, `text-xs font-medium`. Light mode uses a green-400 90% alpha fill with white text; dark mode uses a green-500 30% alpha fill with green-500 text. Indicates skills or technologies — never used as a CTA.
- **Category chip** (`chip-category`): Pill (`rounded-full`), `px-3 py-1`, `text-sm font-medium`. Single-tone neutral chip used to label a project's category in the list view.

### Cards / Containers
- **Project image card:** A neutral surface (`bg-gray-100` light / `stone-800/50` dark) with `rounded-lg` corners and a subtle border (`border-gray-200` / `border-gray-700`). Holds the project image with `object-contain` so artwork is never cropped. Currently has `shadow-md` at rest; should migrate to flat-at-rest per the elevation rule.
- **Featured image container** (project slug page): Wide aspect-ratio frame, `max-w-[1200px]`, soft border. Holds the hero image of a project's slug page. Keeps the single `0 4px 12px rgba(0,0,0,0.3)` ambient shadow as a deliberate anchor.

### Inputs / Fields
None currently. If added (contact form, search), follow the rules: `rounded-lg`, tinted neutral background, focus ring uses Verdant Action at 50% opacity (`oklch(62% 0.16 152 / 0.5)`).

### Navigation
- **Top nav** (`Navbar.tsx`): Sticky, centered pill (`rounded-md`), four links (About, Experience, Education, Projects). Currently glassmorphic — replace with solid `bg-stone-900` on next pass per the Anti-Glass Rule. Hover transitions text from default to `text-gray-500`.
- **Sidebar identity** (`Header.tsx`, desktop only): Fixed left column at `lg:` breakpoints. Holds the headshot, name, role, location, tagline, resume download, and three social icons (GitHub, email, LinkedIn). Mobile collapses this above the main content stream.

### Signature Component: The Timeline Rail
Every Experience, Education, and Project list-item uses `relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600` to render a 2px vertical rail running the full height of the item, with content offset by 32px. This is the structural through-line that ties the three list sections together — an editorial column-rule, not decoration. Do not add additional vertical rules elsewhere; this one is what makes the three sections feel like a continuous spread rather than three separate cards.

## 6. Do's and Don'ts

### Do:
- **Do** use Inter at five distinct scale steps (Display 36 / Headline 30 / Title 24 / Body 16 / Label 12) and rely on weight + scale for hierarchy.
- **Do** keep the Verdant Action accent (`#059669`) on ≤10% of any screen. CTAs only.
- **Do** preserve the timeline rail (`before:w-0.5 before:bg-gray-600`) as the single vertical structural element across Experience, Education, and Projects.
- **Do** treat project imagery as the loud element. The frame around it stays calm.
- **Do** honor `prefers-reduced-motion` on every transition or skeleton (`motion-reduce:animate-none` is already in use; keep the pattern).
- **Do** maintain WCAG 2.1 AA contrast: 4.5:1 for body text, 3:1 for large text.

### Don't:
- **Don't** use pure `#000` or `#fff`. Tint every neutral toward warm graphite (PRODUCT.md anti-reference: bare HTML resume).
- **Don't** add glassmorphism (`backdrop-filter: blur`) to new chrome. The existing navbar and back-to-top are exceptions to phase out, not patterns to extend (PRODUCT.md anti-reference: generic AI/SaaS landing).
- **Don't** introduce `slate-*` or `neutral-*` Tailwind families for new work. Pick `stone-*` (warm) or `gray-*` (cool) and stay there.
- **Don't** use scroll-jacking, custom cursors, or oversized motion. Restraint is the statement (PRODUCT.md anti-reference: Awwwards-trendy agency portfolio).
- **Don't** introduce a second brand accent. If it isn't action, it isn't Verdant. Project imagery carries the rest of the color (PRODUCT.md anti-reference: Dribbble-style designer maximalism).
- **Don't** add resting shadows to cards or surfaces. Flat at rest, shadow on state only.
- **Don't** use `border-left` greater than 1px as a colored accent stripe (impeccable absolute ban). The 0.5px (`w-0.5` = 2px) timeline rail is the ONE permitted vertical accent and it stays gray.
- **Don't** use gradient text (`background-clip: text`). Solid colors only; emphasis via weight or size.
- **Don't** reach for a modal as the first thought. Inline / progressive disclosure first.
