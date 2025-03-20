"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { courses } from "@/config/courses";
import Link from "next/link";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";
import { SlashSeparator } from "../ui/separator";

const OurCourses = () => {
  return (
    <section className="py-8">
      <div className="relative overflow-hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-md mx-auto text-center xl:max-w-lg">
            <motion.h1
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {courses.title}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {courses.description}
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild>
              <Link href={courses.Link}>{courses.LinkMessage}</Link>
            </Button>
          </motion.div>

          <div className="relative mt-10">
            <Carousel
              opts={{ align: "start" }}
              plugins={[
                Autoplay({
                  delay: 2500,
                }),
              ]}
            >
              <CarouselContent>
                {courses.popularCourses.map((course, index) => (
                  <CarouselItem key={index} className="basis-1/3 sm:basis-1/4">
                    <div className="p-2">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-full h-70 flex items-center justify-center">
                          <Image
                            className="object-cover rounded-md mb-5"
                            src={course.image}
                            alt={course.title}
                            width={350}
                            height={350}
                          />
                        </div>
                        <div className="p-4 text-center">
                          <p className="text-sm font-bold text-gray-900">
                            {course.title}
                          </p>
                          <div className="flex items-center justify-center mt-2 space-x-2 text-sm">
                            <p className="text-gray-900 font-bold">
                              ৳{course.new_price.toLocaleString("en-IN")}
                            </p>
                            <p className="text-red-500 line-through">
                              ৳{course.old_price.toLocaleString("en-IN")}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            <a
                              href={course.bookNow}
                              target="_blank"
                              className="px-3 py-2 text-xs font-semibold text-white bg-gray-900 rounded hover:bg-gray-700"
                            >
                              Book now
                            </a>
                            <Link href={`/courses/${course.id}`}>
                              <button className="px-3 py-2 text-xs font-semibold text-gray-900 border border-gray-300 rounded hover:bg-gray-100">
                                View details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
