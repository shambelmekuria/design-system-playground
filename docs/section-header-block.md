# Section Header Block — Component Documentation

## Overview

The **Section Header Block** is a structured content component used to introduce page sections. It establishes hierarchy, provides context, and sets the visual tone before the user engages with the content below.

---

## Structure

A fully composed Section Header Block consists of three stacked elements:

1. **Section Eyebrow** — contextual label (optional)
2. **Section Title** — primary heading
3. **Section Description** — supporting copy

---

## Element Specifications

### 1. Section Eyebrow

> Optional label rendered above the title. Establishes context before the user reads the primary heading.

| Property | Value |
|----------|-------|
| Visibility | Optional |
| Role | Contextual framing / category signal |
| Tailwind classes | `text-xs tracking-widest uppercase` |

**Usage notes:**
- Use when the section topic benefits from a short label (e.g. `"Features"`, `"Why us"`, `"Pricing"`).
- Keep to 1–3 words maximum.
- Never duplicate the title content — it must add new context.

---

### 2. Section Title

> The primary heading of the section. The largest text unit on the page at this scope.

| Property | Value |
|----------|-------|
| Visibility | Required |
| Role | Sets the section topic |
| Tailwind classes | `text-3xl md:text-4xl font-semibold` |

**Usage notes:**
- Aim for a single line where possible. Two lines maximum.
- Should be scannable — avoid dependent clauses that require the description to resolve.
- Do not punctuate with a period.

---

### 3. Section Description

> Expands on the title with additional context or value framing.

| Property | Value |
|----------|-------|
| Visibility | Optional |
| Role | Supporting copy |
| Tailwind classes | `text-base md:text-lg text-muted-foreground` |

**Usage notes:**
- Limit to 2–3 lines maximum.
- Must feel visually lighter than the title — the `text-muted-foreground` token enforces this contrast.
- Avoid restating the title. Add new information or qualify the claim.

---

## Grid Card Typography

Each card inside a grid layout follows its own internal typographic hierarchy. The same principles of weight and muted contrast apply at the card scope.

---

### Card Label / Category

> Optional micro-label scoped to the individual card. Mirrors the section eyebrow at a smaller scale.

| Property | Value |
|----------|-------|
| Visibility | Optional |
| Role | Card-level categorisation |
| Tailwind classes | `text-[11px] uppercase tracking-wider` |

**Usage notes:**
- Use only when cards belong to distinct categories and the label adds value.
- Avoid using it purely as decoration — it must carry semantic meaning.

---

### Card Title

> The primary message or claim of the card.

| Property | Value |
|----------|-------|
| Visibility | Required |
| Role | Core card message |
| Tailwind classes | `text-lg font-medium` |

**Usage notes:**
- 1–2 lines maximum. Truncate or rewrite if it runs longer.
- Should be self-contained — readable without the body text below it.

---

### Card Body Text

> Supporting copy that elaborates on the card title.

| Property | Value |
|----------|-------|
| Visibility | Optional |
| Role | Elaboration / supporting detail |
| Tailwind classes | `text-sm text-muted-foreground` |

**Usage notes:**
- 2–4 lines maximum.
- Always rendered in `text-muted-foreground` — never full-black. This preserves the visual hierarchy and prevents the body from competing with the title.
- If the card title is already self-explanatory, body text can be omitted.

---

## Hierarchy Summary

```
Section Eyebrow       → text-xs tracking-widest uppercase
Section Title         → text-3xl md:text-4xl font-semibold
Section Description   → text-base md:text-lg text-muted-foreground

  └── Card Label      → text-[11px] uppercase tracking-wider
  └── Card Title      → text-lg font-medium
  └── Card Body       → text-sm text-muted-foreground
```

---

## Design Principles

- **Contrast through weight, not size alone.** Muted foreground tokens create visual separation between informational layers without relying solely on font size.
- **Restraint at each level.** Every element should do one job. If an eyebrow, title, and description are all present, each must carry unique information.
- **Optional means intentional.** Eyebrows, descriptions, and card labels are opt-in. Include them only when they improve comprehension, not to fill space.
