"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content:
      "The courses on this platform have been instrumental in advancing my career. The quality of instruction is top-notch!",
    avatar:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    content:
      "I've taken several data science courses here, and they've all been excellent. The hands-on projects really helped solidify my learning.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    content:
      "The UX design track was exactly what I needed to transition into my dream career. Highly recommended!",
    avatar:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Students Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
