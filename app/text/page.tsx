"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import {
  SectionHeader,
  SectionDescription,
} from "@/components/ui/section.header";
import { BadgeCheck, Book, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { HiDesktopComputer } from "react-icons/hi";

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
            Lorem ipsum dolor sit, amet consectetur
          </SectionDescription>
        </div>
      </Section>
      <Section variant="default" size="lg">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <SectionHeader size="sm">How it works</SectionHeader>
          <SectionDescription size="default">
            Lorem ipsum dolor sit, amet consectetur
          </SectionDescription>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative border border-border rounded-md shadow  overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/img/blog/blog-1.jpg" alt="image" fill />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-neutral-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <Button
                className="mt-4 bg-primary text-primary-foreground"
                size="lg"
              >
                Read More
              </Button>
            </div>
          </div>
          <div className="relative border border-border rounded-md shadow  overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/img/blog/blog-2.jpg" alt="image" fill />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-neutral-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <Button
                className="mt-4 bg-primary text-primary-foreground"
                size="lg"
              >
                Read More
              </Button>
            </div>
          </div>
          <div className="relative border border-border rounded-md shadow  overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/img/blog/blog-3.jpg" alt="image" fill />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-neutral-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="mt-auto pt-4">
                <Button variant="link" className="px-0">
                  Read more →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section variant="secondary">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <SectionHeader size="sm">About Us</SectionHeader>
          <SectionDescription size="default">
            Lorem ipsum dolor sit, amet consectetur
          </SectionDescription>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-6 md:p-8 bg-card rounded-xl shadow flex flex-col">
            <div className="flex-1">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Who We Are
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Ab, omnis?
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="mt-auto pt-6">
              <Button size="lg">Get Started</Button>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative aspect-video md:aspect-auto md:min-h-[300px] rounded-xl shadow overflow-hidden">
            <Image
              src="/img/blog/blog-3.jpg"
              alt="Our team working together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      <Section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-6">
            <div className="relative min-h-[400px] rounded-md shadow overflow-hidden">
              <Image src="/img/services.jpg" alt="image" fill />
            </div>
          </div>
          <div className="p-6">
            <div>
              <h3 className="text-4xl font-bold mb-4">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className="text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita dolorem labore ipsum? Aperiam unde nihil eaque?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="flex items-center gap-2">
                <div className="size-12  flex justify-center items-center bg-blue-100 rounded-full text-blue-700">
                  <HiDesktopComputer size={24} />
                </div>
                <p className="font-semibold">Online Toutor</p>
              </div>
              <div className="flex items-center gap-x-4 gap-y-8">
                <div className="size-12  flex justify-center items-center bg-orange-100 rounded-full text-orange-700">
                  <Book size={24} />
                </div>
                <p className="font-semibold">Online Toutor</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-12  flex justify-center items-center bg-purple-100 rounded-full text-purple-700">
                  <Book size={24} />
                </div>
                <p className="font-semibold">Online Toutor</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-12  flex justify-center items-center bg-green-100 rounded-full text-green-700">
                  <Book size={24} />
                </div>
                <p className="font-semibold">Online Toutor</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section variant="muted"></Section>
      <Section>
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <p className="text-green-600  text-xl mb-2 font-medium">Our Teacher</p>
          <SectionHeader size="sm">Meet With Our Expert</SectionHeader>
          <SectionDescription size="default" className="text-base md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            eaque atque ducimus qui eveniet distinctio veniam
          </SectionDescription>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative h-full md:min-h-[400px] rounded-md shadow overflow-hidden">
                <Image src="/profile/1.jpg" alt="image" fill />
              </div>
              <div className="relative min-h-[400px] rounded-md shadow overflow-hidden">
                <Image src="/profile/2.jpg" alt="image" fill />
              </div>
              <div className="relative min-h-[400px] rounded-md shadow overflow-hidden">
                <Image src="/profile/3.jpg" alt="image" fill />
              </div>
              <div className="relative min-h-[400px] rounded-md shadow overflow-hidden">
                <Image src="/profile/4.jpg" alt="image" fill />
              </div>
            
          </div>
        </div>
      </Section>
    </>
  );
};
