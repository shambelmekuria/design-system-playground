# Tailwind & shadcn/ui — Design Reference Notes

> Personal learning notes on layout widths, typography, spacing, and theming.

---

## 1. Typography

### Body & Descriptive Text

| Use Case | Recommended Class |
|---|---|
| Section subheading | `text-base` or `text-lg` (16–18px) |
| Hero subheading | `text-lg` or `text-xl` (18–20px) |
| Descriptive paragraph | up to `text-xl` max |

> **Rule:** Never go above `text-xl` for descriptive body text — it starts competing with the heading.

**Line height for paragraphs:** `leading-relaxed` (1.625) — the standard for readable paragraph text.

---

## 2. Max Width & Layout

### Blog / Article Pages

```jsx
// ✅ Best — ch-based, respects font size
<article className="max-w-prose mx-auto">

// ✅ Also great — pixel-based
<article className="max-w-2xl mx-auto">
```

### The Three-Width Trick

Used by Stripe and Vercel — three nested widths create visual depth and pull the reader's eye inward as they scroll.

| Layer | Class | Purpose |
|---|---|---|
| Cover image | `max-w-4xl` | Widest — visual impact |
| Article header | `max-w-3xl` | Middle — title breathing room |
| Body text | `max-w-prose` | Narrowest — reading comfort |

**Full example:**

```jsx
<main className="px-4 md:px-6 py-12 md:py-16">

  {/* Article header — slightly wider */}
  <header className="max-w-3xl mx-auto mb-10 md:mb-14">
    <p className="mb-3 text-sm font-medium tracking-widest uppercase text-primary">
      Engineering
    </p>
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
      How we rebuilt our design system
    </h1>
    <p className="mt-4 text-base text-muted-foreground">
      May 3, 2026 · 8 min read
    </p>
  </header>

  {/* Cover image — even wider, creates depth */}
  <div className="max-w-4xl mx-auto mb-10 md:mb-14">
    <img className="rounded-xl w-full aspect-video object-cover" />
  </div>

  {/* Body content — prose constrained */}
  <article className="max-w-prose mx-auto prose prose-neutral dark:prose-invert">
    ...
  </article>

</main>
```

---

## 3. Grid Cards — Gap & Padding

### Standard Grid Setup

```jsx
// ✅ Standard — most common across industry
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

// ✅ Spacious — for feature/marketing cards
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
```

### Gap by Card Type

| Card Type | Gap |
|---|---|
| Dense data (dashboards, lists) | `gap-3` / `gap-4` |
| Standard feature grids | `gap-4` / `gap-6` |
| Marketing / landing pages | `gap-6` / `gap-8` |
| Bento grid | `gap-3` / `gap-4` |

### The Three Common Patterns

```jsx
{/* Compact — dashboards, data-heavy */}
<div className="grid gap-4">
  <div className="p-4">...</div>
</div>

{/* Standard — most landing/feature sections (Stripe, Linear) */}
<div className="grid gap-6">
  <div className="p-6">...</div>
</div>

{/* Spacious — marketing, big visual cards */}
<div className="grid gap-8">
  <div className="p-8">...</div>
</div>
```

### Mismatching Gap and Padding

Mismatching by **one step** is fine and sometimes intentional:

| Combo | Effect |
|---|---|
| `gap-4 p-6` | Cards feel roomier than the grid (good for content-heavy cards) |
| `gap-6 p-4` | Grid feels airier than cards (good for icon grids) |
| `gap-8 p-6` | Most common mismatch — still works fine |

> Mismatching by **two or more steps** starts to feel off.

**Real-world reference:** Stripe, Tailwind, Vercel, Linear all use `gap-6 p-6`.

---

## 4. Flex — Protecting Fixed-Size Elements

Any time you have a fixed-size element (avatar, icon, badge, image) inside a flex container next to dynamic content — always add `shrink-0` to protect its dimensions.

```jsx
<div className="flex items-center gap-3">
  <img className="w-10 h-10 rounded-full shrink-0" />
  <p className="text-sm">Some dynamic text that might wrap...</p>
</div>
```

---

## 5. shadcn/ui — Color Token Reference

Full list of CSS variables to customize your theme. All values use `oklch()`.

```css
:root {
  /* Primary brand color */
  --primary: oklch();              /* buttons, links, active states */
  --primary-foreground: oklch();   /* text ON primary */

  /* Secondary / support color */
  --secondary: oklch();            /* secondary buttons, badges */
  --secondary-foreground: oklch(); /* text ON secondary */

  /* Accent color */
  --accent: oklch();               /* hover states, highlights */
  --accent-foreground: oklch();    /* text ON accent */

  /* Background & surface */
  --background: oklch();           /* page background */
  --foreground: oklch();           /* main text color */

  /* Cards & popovers */
  --card: oklch();                 /* card background */
  --card-foreground: oklch();      /* text inside cards */
  --popover: oklch();              /* dropdown/popover background */
  --popover-foreground: oklch();   /* text in popovers */

  /* Borders & inputs */
  --border: oklch();               /* all borders */
  --input: oklch();                /* input field border */
  --ring: oklch();                 /* focus ring (usually = primary) */

  /* Danger / error */
  --destructive: oklch();          /* delete buttons, error states */

  /* Muted / subtle */
  --muted: oklch();                /* subtle backgrounds */
  --muted-foreground: oklch();     /* placeholder text, captions */

  /* Sidebar */
  --sidebar: oklch();
  --sidebar-foreground: oklch();
  --sidebar-primary: oklch();
  --sidebar-primary-foreground: oklch();
  --sidebar-accent: oklch();
  --sidebar-accent-foreground: oklch();
  --sidebar-border: oklch();
  --sidebar-ring: oklch();

  /* Border radius */
  --radius: 0.625rem;              /* adjust for sharper or rounder UI */
}
```

---

## Quick Reference Cheat Sheet

| Topic | Rule / Value |
|---|---|
| Body text max size | `text-xl` |
| Paragraph line height | `leading-relaxed` |
| Blog body width | `max-w-prose` |
| Blog header width | `max-w-3xl` |
| Blog image width | `max-w-4xl` |
| Standard grid gap | `gap-6` |
| Standard card padding | `p-6` |
| Fixed-size flex children | always add `shrink-0` |
| shadcn color format | `oklch()` |
