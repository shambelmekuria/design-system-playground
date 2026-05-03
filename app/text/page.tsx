"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import {
  SectionHeader,
  SectionDescription,
} from "@/components/ui/section.header";
import { BadgeCheck, Plus } from "lucide-react";
import React from "react";

export default function TextPage() {
  const txt =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus est delectus officia omnis qui architecto blanditiis. Tenetur et iusto eum fuga harum molestiae sed unde, adipisci animi obcaecati, id ad.";
  const txt2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return (
    <div>
      <h1 className="font-bold text-lg md:text-xl text-slate-800">
        Lorem ipsum dolor sit.
      </h1>
      <DisplayText text={txt} />
    </div>
  );
}

const DisplayText = ({ text }: { text: string }) => {
  const [isExpand, setIsExpand] = React.useState<boolean>(false);
  const display_txt = isExpand ? text.slice(0, 80) : text;
  return (
    <>
      <p className="text-neutral-80 dark:text-neutral-50">
        {display_txt}
        {isExpand ? "..." : ""}
      </p>
      {text.length > 100 && (
        <button
          className="cursor-pointer text-blue-700 hover:text-blue-600  transition-colors ease-in duration-300 "
          onClick={() => setIsExpand(!isExpand)}
        >
          {isExpand ? "Read More" : "Read Less..."}
        </button>
      )}

      <div className="relative border border-border px-4 md:px-6 lg:px-8 py-8 mt-8 w-full max-w-md mx-auto bg-[#283618] rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          Lorem ipsum dolor sit.
        </h2>
        <p className="text-base text-[#fefae0]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          labore quaerat veniam reprehenderit architecto repellat reiciendis
          unde saepe nemo quis!
        </p>
        <div className=" absolute bottom-[50%] right-[50%] w-12 h-12 bg-green-600 hover:bg-green-600/90 text-white rounded-full flex items-center justify-center font-semibold transition-colors ease-in duration-300 mt-4">
          <Plus />
        </div>
      </div>
      <div className="relative border border-border px-4 md:px-6 lg:px-8 py-8 mt-8 w-full max-w-md mx-auto bg-[#bc6c25] rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          Lorem ipsum dolor sit.
        </h2>
        <p className="text-base text-[#fefae0]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          labore quaerat veniam reprehenderit architecto repellat reiciendis
          unde saepe nemo quis!
        </p>
        <div className=" absolute bottom-[50%] right-[50%] w-12 h-12 bg-green-600 hover:bg-green-600/90 text-white rounded-full flex items-center justify-center font-semibold transition-colors ease-in duration-300 mt-4">
          <Plus />
        </div>
      </div>
      <Button className="bg-secondary text-secondary-foreground">
        Test Secondary
      </Button>
      <Section
        variant="default"
        size="md"
        aria-label="Test"
        className="bg-[#283618]"
      >
        <div className="w-full max-w-xl mx-auto text-center text-white">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Lorem ipsum dolor sit.
          </h2>
          <p className="mb-6 text-[#fefae0]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            incidunt dolor obcaecati eum?
          </p>
          <Button className="h-11 bg-[#bc6c25] px-6 rounded-full">
            Test Button
          </Button>
        </div>
      </Section>
      <Section variant="secondary" size="md" aria-label="Test">
        <div className="max-w-md mx-auto text-center space-y-3">
          <SectionHeader size="default">How it works</SectionHeader>
          <SectionDescription size="default">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet.
          </SectionDescription>
        </div>
      </Section>
      <Section variant="default" size="lg">

      </Section>
    </>
  );
};
