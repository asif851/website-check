"use client";

import { heroSection } from "@/config/heroSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className=" pt-12 pb-6 sm:pb-10 lg:pt-8  overflow-hidden">
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
                action="https://docs.google.com/forms/d/e/1FAIpQLScQQOVY0NRjAwA3ZMTwnWxn9o5j92Qdm75J6ULcEYU_Uh0RBg/viewform"
                method="GET"
                className="flex justify-start mt-8 sm:mt-10"
              >
                <button
                  type="submit"
                  className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                >
                  {heroSection.HeroButton}
                </button>
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
        className="flex justify-center pt-10 left-1/2 transform -translate-x-1/2"
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
};

export default HeroSection;
