# Width industry standard for section is max-w-2xl is common but some time max-w-xl

Section subheading → text-base / text-lg (16–18px)
Hero subheading → text-lg / text-xl (18–20px)

Never go above text-xl for descriptive body text — it stops
feeling like a subheading and competes with the header.

leading-relaxed (1.625) is the standard for descriptive paragraph text

Max Width for Blog Detail Pages :  
✅ Best — ch-based, respects font size 

<article className="max-w-prose mx-auto">

✅ Also great — pixel based 

<article className="max-w-2xl mx-auto">

he Three-Width Trick
This is exactly what Stripe and Vercel do — three nested widths create depth and focus:
Cover image   →  max-w-4xl   (widest  — visual impact)
Article head  →  max-w-3xl   (middle  — title breathing room)
Body text     →  max-w-prose  (narrowest — reading comfort)
It pulls the reader's eye inward as they scroll from image → title → body, which feels natural and polished without any extra design work.

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
    <img ... className="rounded-xl w-full aspect-video object-cover" />
  </div>

  {/* Body content — prose constrained */}
  <article className="max-w-prose mx-auto prose prose-neutral dark:prose-invert">
    ...
  </article>

</main>
