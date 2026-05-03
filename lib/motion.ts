import { motion } from "motion/react";
import Section from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Re-export the motion-enhanced components for use in the app.
// motion.create() works only on components that own their DOM node.
// shadcn primitives like Button/Card render a real element → motion can wrap it.
//
// Dialog/Sheet/Popover are different — Radix owns the mount/unmount cycle,
// the DOM node appears and disappears outside React's normal render flow.
// motion.create() wraps the component but never sees the enter/exit,
// so initial/animate fire but exit is completely ignored.
//
// Fix: AnimatePresence + asChild — lets motion.div own the DOM node
// while Radix still controls open state.
export const MotionSection = motion(Section);
export const MotionCard = motion(Card);
export const MotionButton = motion(Button);
