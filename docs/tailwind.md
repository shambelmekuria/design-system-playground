1. Use Record<Type, Value> for mapping object lists instead of arrays
2. Prefer union types for props (e.g., "primary" | "secondary" | "danger") instead of string
3. Define strict types for variants like color, size, variant
3. Install and use class-variance-authority (cva) for variant-based styling
4. Use tailwind-merge to avoid class conflicts and merge dynamic classes cleanly
5. Create a buttonVariants config using cva() for scalable styles
6. Build reusable Button component with typed props (variant, size, etc.)
7. Extend native HTML props using ButtonHTMLAttributes<HTMLButtonElement>
8. Use twMerge() when combining cva output with custom className
9. Create reusable Section component for consistent layout spacing
10. Standardize spacing (e.g., px-4 sm:px-6 lg:px-8, py-12 sm:py-16 lg:py-20)
11. Avoid hardcoding Tailwind classes repeatedly—use a system