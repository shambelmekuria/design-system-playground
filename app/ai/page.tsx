import { Button } from "@/components/ui/button";
import Section from "@/components/ui/claude/section";
import { Map } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <>
      <Section
        variant="muted"
        size="md"
        container={true}
        aria-label="About Section"
      >
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="mb-4 space-y-2">
            <p className="text-xs border border-border w-fit rounded-full mx-auto py-1.5 px-6  bg-neutral-100 text-neutral-600 font-medium shadow">
              Our Services in Our Location
            </p>

            {/* <p className="text-sm font-semibold tracking-widest uppercase text-primary">
              Our Services
            </p> */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800">
              Everything You Need
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide the tools and support to help your business grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg py-12 px-4 md:px-6 border border-border shadow space-y-4">
            <h3 className="text-xl font-medium text-black">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              magni nostrum corporis non consectetur, dolores eos reiciendis
              atque quos. Voluptas!
            </p>
          </div>
          <div className=" group rounded-lg py-12 px-4 md:px-6 border border-border shadow space-y-4 bg-orange-50 hover:bg-orange-600">
            <h3 className="text-xl font-bold text-black group-hover:text-white ">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="group-hover:text-neutral-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              magni nostrum corporis non consectetur, dolores eos reiciendis
              atque quos. Voluptas!
            </p>
          </div>
          <div className="rounded-lg py-12 px-4 md:px-6 border border-border shadow space-y-4">
            <h3 className="text-xl font-medium text-black">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              magni nostrum corporis non consectetur, dolores eos reiciendis
              atque quos. Voluptas!
            </p>
          </div>
        </div>
      </Section>
      <Section variant="ghost" size="md" aria-label="Test">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              About Us
            </h2>
            <p className="text-neutral-500 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative  overflow-hidden border border-border rounded-lg shadow  px-4 md:px-6 lg:px-8 py-12">
             
            <h3 className="font-semibold text-lg mb-2"> Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              non ducimus inventore ipsam molestiae eos nihil beatae ut at
              nostrum.
            </p>
          </div>

          <div className="relative overflow-hidden border border-border/50 rounded-xl p-7 bg-card">
            {/* Top accent bar — brand signal */}
            <div className="absolute top-0 inset-x-0 h-[10px] bg-gradient-to-r from-emerald-500 to-blue-500" />

            {/* Category label with icon */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center">
              <Map/>
              </div>
              <span className="text-[11px] font-medium tracking-widest uppercase text-emerald-600">
                Our Mission
              </span>
            </div>

            {/* Headline — primary attention */}
            <h3 className="text-xl font-medium leading-snug mb-2.5 text-foreground">
              Building tools that put humans first
            </h3>

            {/* Body — secondary, muted */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              We believe technology should serve people, not the other way
              around — so we design every product around real human needs, not
              feature checklists.
            </p>
          </div>
        </div>
      </Section>
<section className="w-full max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
<div className="text-center max-w-4xl mx-auto">
    <p className="text-xs font-medium tracking-widest uppercase text-emerald-600 mb-2">
    Our services          {/* 12px · eyebrow */}
  </p>
  <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground mb-4">
    What we do            {/* 30–36px · section title */}
  </h2>
  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim iste reiciendis iusto quo aut eaque alias? Molestias saepe illum voluptatem.
  </p>
</div>

  {/* ── GRID CARDS ── */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
    <div className="border border-border/50 rounded-xl p-5">
      <span className="text-xs font-medium tracking-wider uppercase text-blue-500">
        Design              {/* 11px · card label */}
      </span>
      <h3 className="text-lg font-medium leading-snug text-foreground mt-2 mb-2">
        Card title here     {/* 18px · card title */}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Body text here…    {/* 14px · card body */}
      </p>
    </div>
  </div>
</section>
    </>
  );
}
