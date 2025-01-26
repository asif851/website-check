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
    <section className="py-1 sm:py-1 lg:py-2">
      <div className="relative py-12 overflow-hidden sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-auto lg:text-center">
            <motion.h1
              className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {courses.title}
            </motion.h1>
            <motion.p
              className="mt-5 text-lg font-medium text-gray-900 lg:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {courses.description}
            </motion.p>

            <motion.div
              className="inline-grid grid-cols-2 mt-8 gap-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div>
                <p className="text-4xl font-bold text-gray-900">
                  {courses.TotalStudents}
                </p>
                <p className="mt-2 text-base font-medium text-gray-500">
                  Students
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900">
                  {courses.TotalCourses}
                </p>
                <p className="mt-2 text-base font-medium text-gray-500">
                  Courses
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center mt-8 lg:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SlashSeparator count={24} className="" />
            </motion.div>

            <motion.div
              className="m-8 lg:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild>
                <Link href={courses.Link}>{courses.LinkMessage}</Link>
              </Button>
            </motion.div>
          </div>

          {/* <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-1/2 lg:top-1/2">
              <div className="relative w-full overflow-auto ">
                <div className="flex gap-8 flex-nowrap">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                  >
                    <CarouselContent>
                      {courses.popularCourses.map((course, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                            <div className="overflow-hidden bg-white rounded shadow-xl">
                              <div className="aspect-w-4 aspect-h-3">
                                <Image
                                  className="object-cover w-full h-48 rounded-lg"
                                  src={course.image}
                                  alt={course.title}
                                  width={300}
                                  height={200}
                                />
                              </div>
                              <div className="p-8">
                                <p className="text-lg font-bold text-gray-900">
                                  {course.title}
                                </p>
                                <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
                                  Discounted Price
                                </p>
                                <div className="flex items-end mt-1">
                                  <p className="text-lg font-bold text-gray-900">
                                    ৳{course.new_price.toLocaleString("en-IN")}
                                  </p>
                                  <p className="ml-2 text-red-500 line-through">
                                    ৳{course.old_price.toLocaleString("en-IN")}
                                  </p>
                                </div>

                                <div className="grid grid-cols-2 mt-7 gap-x-4">
                                  <a
                                    href="https://docs.google.com/forms/d/1Tgo4rdTTUwvcmQZ7V8uFHpI6X6pPXGcU0LhPaiZfQzo/viewform?edit_requested=true"
                                    title="Book Now"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                    role="button"
                                  >
                                    Book now
                                  </a>

                                  <Link href={`/courses/${course.id}`}>
                                    <button className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
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
            </div> */}
          <div className="relative mt-12 lg:mt-0 lg:w-full">
            <div className="relative w-full overflow-auto ">
              <div className="flex gap-8 flex-nowrap">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {courses.popularCourses.map((course, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                          <div className="overflow-hidden bg-white rounded shadow-xl">
                            <div className="aspect-w-4 aspect-h-3">
                              <Image
                                className="object-cover w-full h-48 rounded-lg"
                                src={course.image}
                                alt={course.title}
                                width={300}
                                height={200}
                              />
                            </div>
                            <div className="p-8">
                              <p className="text-lg font-bold text-gray-900">
                                {course.title}
                              </p>
                              <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
                                Discounted Price
                              </p>
                              <div className="flex items-end mt-1">
                                <p className="text-lg font-bold text-gray-900">
                                  ৳{course.new_price.toLocaleString("en-IN")}
                                </p>
                                <p className="ml-2 text-red-500 line-through">
                                  ৳{course.old_price.toLocaleString("en-IN")}
                                </p>
                              </div>

                              <div className="grid grid-cols-2 mt-7 gap-x-4">
                                <a
                                  href={course.bookNow}
                                  title="Book Now"
                                  target="_blank"
                                  className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                  role="button"
                                >
                                  Book now
                                </a>

                                <Link href={`/courses/${course.id}`}>
                                  <button className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
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
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
