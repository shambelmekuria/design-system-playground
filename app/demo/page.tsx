"use client";
import Section from "@/components/ui/section";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Code,
  Code2,
  Heart,
  MoveRight,
  Settings,
  Share,
  Verified,
} from "lucide-react";
import Link from "next/link";
import Skill from "../../components/ui/skill-pro";

export default function Page() {
  return (
    <>
      <Section className="">
        <motion.div className="max-w-2xl mx-auto px-6 py-8">
          <p className="bg-indigo-100 text-indigo-500 leading-loose uppercase text-xs mb-1 w-fit font-medium px-2 py-1">
            Desing System
          </p>
          <motion.h1 className="text-4xl font-semibold  leading-tight text-slate-900 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </motion.h1>
          <p className="text-slate-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            cupiditate! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eligendi, aut.
          </p>
          <div className="border-y border-border  flex items-center justify-between p-4 mb-4 ">
            <div className="flex items-center gap-4 relative ">
              <div className="size-12 relative shrink-0 ">
                <Image
                  src="/profile/1.jpg"
                  alt="profile"
                  className="rounded-full object-cover"
                  fill
                />
              </div>
              <div>
                <h3 className="font-medium mb-1">Shambel Mekuria</h3>
                <p className="text-slate-500 text-sm">
                  May 5, 2026 · 6 min read
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Heart /> 150
              </Button>
              <Button variant="outline">
                <Share /> Share
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
            <Image src="/img/blog/blog-3.jpg" alt="Hero Image" fill />
          </div>
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              quaerat aliquam iure voluptatem ad cum, ipsum sed asperiores
              corporis dolore. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Placeat quas reprehenderit dolorum saepe
              repudiandae. Obcaecati eius ipsum veritatis sequi vel eligendi
              illum exercitationem dolores quia dolorum odio, laudantium,
              nesciunt voluptas saepe ratione quae praesentium porro
              perspiciatis velit pariatur? Laudantium beatae perspiciatis odit
              eius praesentium voluptatibus et libero iusto harum sed corporis,
              culpa minima, aliquam dignissimos nisi suscipit, eaque animi
              tenetur.
            </p>
            <blockquote className="bg-amber-50 p-4 border-l-4 border-amber-600 italic rounded-r-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium voluptates quaerat ex, dolore deserunt minima magni
              aperiam ad placeat in molestiae fuga voluptatum laudantium ipsum
              doloribus optio illo.
            </blockquote>

            <blockquote className="border-l-[3px] border-blue-400 bg-blue-50 px-5 py-4 rounded-r-lg italic leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Nisi, iusto!
            </blockquote>
            <h2 className="text-xl font-semibold leading-snug mt-8 mb-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              quaerat aliquam iure voluptatem ad cum, ipsum sed asperiores
              corporis dolore. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Placeat quas reprehenderit dolorum saepe
              repudiandae.
            </p>
            <h1 className="font-semibold text=2xl">
              Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </h1>
            <p className="text-slate-600 leading-relaxed">
              {" "}
              Obcaecati eius ipsum veritatis sequi vel eligendi illum
              exercitationem dolores quia dolorum odio, laudantium, nesciunt
              voluptas saepe ratione quae praesentium porro perspiciatis velit
              pariatur? Laudantium beatae perspiciatis odit eius praesentium
              voluptatibus et libero iusto harum sed corporis, culpa minima,
              aliquam dignissimos nisi suscipit, eaque animi tenetur.
            </p>
            <h3 className="font-semibold text-lg mb-1">
              Start with line height, not font size
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Modi dicta ab
              mollitia pariatur rerum sed neque perferendis quod totam officia.
            </p>
          </div>
        </motion.div>
      </Section>
      <Section variant="muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-white rounded-lg overflow-hidden p-8 group hover:-translate-y-4 transition-all ease-in-out duration-300">
            <div className="h-1 bg-linear-to-r from-orange-400 to-indigo-600 absolute top-0 left-0 z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
            <div className="size-20 bg-slate-900 text-slate-50 rounded-full flex items-center justify-center mb-8">
              <Code2 size={48} />
            </div>

            <div className="mb-8 space-y-4">
              <h3 className="text-lg font-medium text-slate-900">
                Brand Development
              </h3>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam.
              </p>
            </div>

            <Link
              href="#"
              className="text-slate-900 flex items-center gap-2  font-medium group "
            >
              Read More
              <MoveRight className="group-hover:translate-x-1 transition-all ease-in-out duration-300" />
            </Link>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mt-8 max-w-prose mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-900 font-semibold text-2xl mb-2 leading-tight"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="leading-relaxed text-slate-600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptatem minima ut reiciendis asperiores, a commodi porro
            molestias voluptates ea reprehenderit maxime dolorum, facilis,
            dolores blanditiis dolor saepe molestiae autem.
          </motion.p>
          <blockquote className="bg-orange-50 p-4 border-l-4 border-orange-400 rounded-r-lg mt-4 leading-relaxed italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eum
            voluptatem perspiciatis tenetur? Unde adipisci facere, eum
            doloremque accusamus quidem.
          </blockquote>
          <div className="mt-4">
            <h3 className="mb-1 text-sm font-medium text-slate-900">Python</h3>
            <div className="bg-slate-100 rounded-full h-3 overflow-hidden flex items-center text-sm">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.8 }}
                className=" bg-sky-600 h-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8">
          <div className="flex flex-col justify-center  p-4 md:p-6 lg:p-8">
            <h2 className="text-slate-800 font-semibold text-4xl leading-tight mb-6">
              Our Professional Expertise
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We deliver exceptional results through our comprehensive skill set
              and years of industry experience. Our team's expertise spans
              across multiple disciplines to provide comprehensive solution
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Verified className="text-orange-400 " />
                <span className="font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="text-orange-400 " />
                <span className="font-semibold">ISO Certified</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skill
              title="Data Analysis"
              percent={90}
              subtitle="Business intelligence and insights"
              color="coral"
              size="lg"
            />
            <Skill
              title="Web Development"
              percent={80}
              subtitle="Modern frameworks and technologies"
              color="teal"
            />
            <Skill
              title="Digital Marketing"
              percent={40}
              subtitle="Multi-channel campaign management"
              color="purple"
             
            />
            <Skill
              title="Web Development"
              percent={60}
              subtitle="Modern frameworks and technologies"
              color="blue"
            />
            <Skill
              title="Web Development"
              percent={90}
              subtitle="Modern frameworks and technologies"
            />
    
            <Skill
              title="Quality Assurance"
              percent={92}
              subtitle="Comprehensive testing protocols"
              color="teal"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
