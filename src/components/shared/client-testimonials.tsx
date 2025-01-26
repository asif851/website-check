"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "Farida Yasmin",
    role: "App Owner",
    content: "Wonderfull application",
    avatar: "/images/students/farida-yasmin.jpg",
  },
  {
    name: "Bishal Paul",
    role: "ERP System Owner",
    content: "Wonderfull application",
    avatar: "/images/students/bishal-paul.jpg",
  },
  {
    name: "Vinod Bachhar",
    role: "E-commerce Platform Owner",
    content: "Wonderfull application",
    avatar: "/images/students/vinod-bachhar.png",
  },
];

export default function clientTestimonials() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center mb-4">
                <Image
                  src={client.avatar}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>
              <p className="text-gray-600">{client.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
