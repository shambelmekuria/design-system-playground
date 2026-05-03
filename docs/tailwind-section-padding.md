# Section Padding

> If ALL sections use the same padding — page feels flat, no visual hierarchy, everything looks equally important.
> **Good UI needs variation with control.**

---

## The 3-Level Section System

### 1. Small Section
**For:** Testimonials, FAQs, small content blocks

```html
<section class="py-12 sm:py-16 lg:py-20">
```

---

### 2. Default Section ✅
**For:** Features, services, general content sections

```html
<section class="py-16 sm:py-20 lg:py-24">
```

---

### 3. Large Section
**For:** Big CTA blocks, hero areas, important highlights

```html
<section class="py-20 sm:py-24 lg:py-32">
```

---

## Quick Reference

| Level | Use Case | Classes |
|---|---|---|
| Small | Testimonials, FAQs, small blocks | `py-12 sm:py-16 lg:py-20` |
| Default ✅ | Features, services, content | `py-16 sm:py-20 lg:py-24` |
| Large | CTA, hero, key highlights | `py-20 sm:py-24 lg:py-32` |

---

## Ground Rule

```
When in doubt → start with Default
Feels too heavy → drop to Small
Needs more impact → bump to Large
```

Never create a 4th level — if something doesn't fit, adjust the content, not the padding.
