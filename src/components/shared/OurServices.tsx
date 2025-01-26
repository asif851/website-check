"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/config/services";
import Link from "next/link";
import { Button } from "../ui/button";

const OurServices = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="relative overflow-hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {services.title}
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {services.description}
            </motion.p>
          </div>

          <div className="mt-12">
            <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.serviceData.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* <div className="mb-4 flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    {service.icon}
                  </div> */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild>
              <Link href={services.Link}>{services.LinkMessage}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
