"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Extensive Course Library",
    description:
      "Access a wide range of courses covering various topics and skill levels.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of experience in their fields.",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Earn recognized certifications upon completion of course tracks.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description:
      "Gain skills that will help you progress in your career or start a new one.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our Platform
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
