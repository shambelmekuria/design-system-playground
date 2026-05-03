"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import { MotionButton, MotionCard, MotionSection } from "@/lib/motion";

export default function Page() {
  return (
    <section className="py-16 md:py-20">
      <button className="inline-flex items-center h-11 bg-orange-600 px-4 md:px-6 text-white rounded font-medium">
        Send Message
      </button>
      <Button className="h-11 px-4 md:px-6 rounded bg-blue-600 hover:bg-blue-600/90 text-base">
        Send Message
      </Button>
      <Button className="h-11 px-4 md:px-6 rounded-full bg-blue-600 hover:bg-blue-600/90 text-base">
        Send Message
      </Button>
      <MotionButton
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        size="lg"
      >
        Test Motion Button
      </MotionButton>
    </section>
  );
}
