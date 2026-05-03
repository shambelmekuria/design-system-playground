import { type VariantProps } from "class-variance-authority"
import * as React from "react"
import { Slot } from "radix-ui"
import { sectionVariants } from "./section.variants"
import { cn } from "@/lib/utils"

type SectionProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    asChild?: boolean
    container?: boolean
  }

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({
    className,
    variant = "default",
    size = "md",
    children,
    asChild = false,
    container = true,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot.Root : "section"
    
    return (
      <Comp
        ref={ref}
        className={cn(sectionVariants({ variant, size }), className)}
        {...props}
      >
        {container ? (
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </Comp>
    )
  }
)

Section.displayName = "Section"

export default Section
export { type SectionProps, sectionVariants }