"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { heroSection } from "@/config/heroSection";

export default function HeroSection2() {
  return (
    <section className="relative pt-12 pb-12 sm:pb-16 lg:pt-8 overflow-hidden">
      {/* <motion.div
        className="absolute w-4 h-4 rounded-full bg-primary pointer-events-none z-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3 }}
      /> */}

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <motion.h1
                className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {heroSection.HeroTitle}
              </motion.h1>
              <motion.p
                className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Join our community and start learning today!
              </motion.p>

              <motion.form
                className="mt-8 sm:mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-primary sm:focus-within:border-primary">
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    className="block w-full px-4 py-4 text-gray-900 placeholder-gray-500 bg-transparent outline-none focus:ring-0 sm:border-none"
                    required
                  />
                  <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                    <Button type="submit" className="w-full sm:w-auto">
                      {heroSection.HeroButton}
                    </Button>
                  </div>
                </div>
              </motion.form>
            </div>

            <motion.div
              className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center">
                <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                  {heroSection.TotalStudents}
                </p>
                <p className="ml-3 text-sm text-gray-900 font-pj">
                  Join
                  <br />
                  Our Community
                </p>
              </div>

              <div className="hidden sm:block">
                <svg
                  className="text-gray-400"
                  width="16"
                  height="39"
                  viewBox="0 0 16 39"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.72265"
                    y1="10.584"
                    x2="15.7226"
                    y2="0.583975"
                  ></line>
                  <line
                    x1="0.72265"
                    y1="17.584"
                    x2="15.7226"
                    y2="7.58398"
                  ></line>
                  <line
                    x1="0.72265"
                    y1="24.584"
                    x2="15.7226"
                    y2="14.584"
                  ></line>
                  <line
                    x1="0.72265"
                    y1="31.584"
                    x2="15.7226"
                    y2="21.584"
                  ></line>
                  <line
                    x1="0.72265"
                    y1="38.584"
                    x2="15.7226"
                    y2="28.584"
                  ></line>
                </svg>
              </div>

              <div className="flex items-center">
                <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                  {heroSection.TotalCourses}
                </p>
                <p className="ml-3 text-sm text-gray-900 font-pj">
                  Projects
                  <br />
                  Completed
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image
              src={heroSection.HeroImage}
              alt="Hero section"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
