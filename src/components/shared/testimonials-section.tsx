"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Farida Yasmin",
    role: "Student",
    content:
      "অনলাইন প্লাটফর্মে রিসোর্সের অভাব নাই, কিন্তু শেখার জন্য সুন্দর গাইডলাইন হিসেবে বেস্ট মেন্টর, আসিফ ভাই।",
    avatar: "/images/students/farida-yasmin.jpg",
  },
  {
    name: "Bishal Paul",
    role: "Student",
    content:
      " I completed a data science online course from Kryzotech, organized into lessons that progress from basic to advanced topics. Asif Mredha Vaiya explains core concepts effectively, balancing examples, practice questions, and real-world exercises.",
    avatar: "/images/students/bishal-paul.jpg",
  },
  {
    name: "Vinod Bachhar",
    role: "Student",
    content:
      "I recently completed a Data Science course from Kryzotech. It was really a good experience. I am thankful to my mentor Asif Vai for his special care and any time support. ",
    avatar: "/images/students/vinod-bachhar.enc",
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
