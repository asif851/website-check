"use client";

import { motion } from "framer-motion";
import { Code, Palette, BarChart, Headphones, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const services = [


    {
    icon: <BarChart className="h-8 w-8 mb-2" />,
    title: "Data Science",
    description:
      "Transform your data into actionable insights with our advanced Data Science solutions. We offer data analytics, machine learning, and AI-driven services to help businesses thrive in the digital age.",
  },

  {
    icon: <Code className="h-8 w-8 mb-2" />,
    title: "Web Development",
    description:
      "Elevate your online presence with our Web Development expertise. From static sites to dynamic web applications, we design and develop responsive, user-friendly websites tailored to your needs.",
  },

  {
    icon: <Smartphone className="h-8 w-8 mb-2" />,
    title: "App Development",
    description:
      "Bring your ideas to life with our custom App Development services. We create cross-platform mobile apps that deliver seamless user experiences and innovative functionalities.",
  },

];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center max-w-2xl mx-auto"
          >
            Empowering your digital journey with cutting-edge solutions and
            expert support.
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="text-primary">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Ready to elevate your digital presence?
          </h2>
          <Button size="lg" className="mr-4">
            Get Started
          </Button>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
