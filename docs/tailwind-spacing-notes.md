# Tailwind Spacing — Code Notes

Spacing is applied in 3 levels:

1. **Section level** — vertical page rhythm
2. **Block level** — gap between content groups inside a section
3. **Component level** — internal element spacing

---

## 1. Section Level

```html
<section class="py-20 md:py-28">
```

- Only `py-*` on the section tag — never `px-*` or `mt-*`
- Horizontal padding belongs to the inner container div

---

## 2. Block Level

**The two values you'll use 90% of the time:**

```
mb-12  →  standard gap between header and body  ✅ default
mb-16  →  when you need more air
```

**Full scale reference:**

```
mb-8   →  too tight, header merges into body visually
mb-12  →  clear separation, header reads as its own block  ✅
mb-16  →  generous, works on large/spacious sections
mb-20  →  almost never needed, only hero-scale sections
```

**Ground rule — outgoing block gets the margin, incoming block never uses `mt-*`:**

```html
<!-- ✅ Correct -->
<div class="mb-12">Header</div>
<div>Body</div>

<!-- ❌ Wrong -->
<div>Header</div>
<div class="mt-12">Body</div>

<!-- ❌ Never double up -->
<div class="mb-12">Header</div>
<div class="mt-12">Body</div>
```

**`space-y` vs `mb` — when to use which:**

```html
<!-- space-y — blocks are symmetric, same type -->
<div class="space-y-12">
  <div>Block A</div>
  <div>Block B</div>
  <div>Block C</div>
</div>

<!-- mb — blocks are asymmetric, different roles -->
<div class="mb-16">Section Header</div>
<div>Content Grid</div>
```

---

## 3. Component Level

```
space-y-1 / space-y-2    tight   — label + value pairs, form fields
space-y-3 / space-y-4    standard — card content  ✅ default
space-y-6                loose   — content-heavy cards
space-y-8                max     — only for very open layouts
```

**Rule — parent owns the spacing, never add `mt-*` or `mb-*` on individual children:**

```html
<!-- ✅ Correct — parent owns spacing -->
<div class="space-y-3">
  <span>Label</span>
  <h3>Card Title</h3>
  <p>Description</p>
  <button>CTA</button>
</div>

<!-- ❌ Wrong — children own their own spacing -->
<div>
  <span class="mb-1">Label</span>
  <h3 class="mb-2">Card Title</h3>
  <p class="mb-4">Description</p>
</div>
```

---

## Quick Reference

| Level | Utility | Default | Rule |
|---|---|---|---|
| Section | `py-*` | `py-20 md:py-28` | Vertical only |
| Block | `mb-*` or `space-y-*` | `mb-12` | Outgoing block owns margin |
| Component | `space-y-*` or `gap-*` | `space-y-3/4` | Parent owns spacing |
