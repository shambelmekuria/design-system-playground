# Variants Cheatsheet

> Quick reference for extracting and building cva-based variants in React components.

---

## What is a variant?

A **variant** is a named visual state that changes *one dimension* of appearance — the structure stays the same.

| dimension | question it answers |
|---|---|
| `size` | how big? |
| `color` | what color theme? |
| `intent` | what does it communicate? |
| `shape` | what geometry? |
| `weight` | how visually heavy? |

> If changing a prop changes the **HTML structure** → that's a different component, not a variant.

---

## The 4 questions (always ask these first)

```
1. What classes NEVER change?         → base string
2. What changes, and along what axis? → variant keys
3. Are the axes independent?          → separate variants vs compoundVariants
4. What's the default for each axis?  → defaultVariants
```

---

## Extracting from a messy component

**Step 1** — list every class that changes between states

**Step 2** — group by dimension (size? color? shape?)

**Step 3** — check axes are independent (can you mix any combo freely?)

**Step 4** — extract into `cva`

---

## The pattern

```tsx
const thingVariants = cva(
  "base classes that never change",
  {
    variants: {
      size: {
        sm: "p-3 text-sm",
        md: "p-4 text-base",   // one element, one axis
        lg: "p-5 text-lg",
      },
      intent: {
        primary: "bg-blue-500 text-white",
        danger:  "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      size: "md",
      intent: "primary",
    },
  }
)
```

**One `cva` block per element** — card, track, title, subtitle each get their own.

---

## Color → always use a colorMap, never interpolate

```tsx
// ❌ breaks Tailwind's scanner — class never makes it into the bundle
className={`bg-${color}-500`}

// ✅ static strings — scanner finds them, bundle includes them
const colorMap = {
  blue: { fill: "bg-blue-500", text: "text-blue-500" },
  teal: { fill: "bg-teal-500", text: "text-teal-500" },
} as const

className={colorMap[color].fill}
```

---

## Types — let cva generate them

```tsx
// ✅ auto-syncs with your cva definition, no manual maintenance
type Props = VariantProps<typeof thingVariants> & {
  label: string
}
```

> Add a new size to `cva` → `VariantProps` picks it up instantly.

---

## cn() — the class merger

```tsx
// joins + deduplicates conflicting Tailwind classes
cn(thingVariants({ size }), colorMap[color].fill, className)

// conflict resolution example
cn("p-4", "p-8") // → "p-8"  (p-4 dropped)
```

---

## Common mistakes

| mistake | fix |
|---|---|
| `bg-${color}-500` dynamic class | use `colorMap` with static strings |
| one giant `cva` for whole component | one `cva` per element that varies |
| `type="danger-large"` (two concerns) | split → `intent="danger" size="lg"` |
| color inside `cva` variants | color belongs in `colorMap`, not `cva` |
| variant that changes HTML structure | that's a separate component |

---

## Quick mental test

- Same HTML, different look → **variant** ✓
- Different HTML → **separate component** ✗
- Two things changing together → **one axis** ✓
- Two things changing independently → **two axes** ✓

# Variant Types Reference

> Common variant types you'll encounter across any design system.

---

## Universal — every component has these

| variant | values | controls |
|---|---|---|
| `size` | `xs sm md lg xl` | padding, font size, height |
| `intent` | `primary secondary danger success warning info` | meaning → color |
| `weight` | `solid outline ghost link` | how visually heavy/filled |

> These three cover 90% of all components.

---

## Visual appearance

| variant | values | controls |
|---|---|---|
| `color` | `blue red green amber…` | raw hue (no meaning attached) |
| `shape` | `rounded pill square` | border radius |
| `shadow` | `none sm md lg` | elevation / depth |
| `border` | `none subtle strong` | border visibility |

---

## Behavior / state

| variant | values | controls |
|---|---|---|
| `loading` | `true false` | spinner, disabled look |
| `disabled` | `true false` | muted, no interaction |
| `active` | `true false` | pressed / selected look |
| `orientation` | `horizontal vertical` | layout direction |

---

## Layout / structure

| variant | values | controls |
|---|---|---|
| `align` | `start center end` | text or content alignment |
| `justify` | `start center end between` | flex justification |
| `fullWidth` | `true false` | `w-full` or not |
| `truncate` | `true false` | text overflow handling |

---

## Component-specific examples

| component | common variants |
|---|---|
| `Button` | `size` `intent` `weight` `shape` `fullWidth` |
| `Badge` | `size` `intent` `shape` |
| `Input` | `size` `intent` (error/success state) `disabled` |
| `Card` | `shadow` `border` `size` |
| `Avatar` | `size` `shape` |
| `Skill` | `size` `color` |

---

## What is intent exactly?

Intent = **human-readable label** for what the thing *means* to the user. CSS is just the consequence.

```
human decides:  "this button is dangerous"
        ↓
intent="danger"
        ↓
cva picks:  bg-red-500
        ↓
user sees:  red button
```

| | color | intent |
|---|---|---|
| answers | what hue? | what does this mean? |
| chosen by | design / brand | the action's purpose |
| example | `blue` `red` | `danger` `success` |

> `color` = "I want it blue" (you pick the hue)
> `intent` = "this is dangerous" (cva picks the hue for you)

---

## Naming rule

```
what it looks like  →  size, shape, shadow, color
what it means       →  intent
how heavy it feels  →  weight
how it behaves      →  loading, disabled, active
```

> When in doubt — ask "is this a *feeling* or a *meaning*?"
> Feeling → appearance variant. Meaning → intent.