"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  BarChart,
  Smartphone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const services = [
  {
    icon: <BarChart className="h-8 w-8 mb-2" />,
    title: "Data Science",
    description:
      "Transform your data into actionable insights with our advanced Data Science solutions.",
    details: [
      "Predictive Analytics: Harness the power of machine learning to predict future trends.",
      "Business Intelligence: Visualize and analyze your data for strategic decision-making.",
      "Custom AI Solutions: Build models that automate processes and improve efficiency.",
      "Data Preparation and Cleaning: Ensure your data is accurate and ready for analysis.",
    ],
  },
  {
    icon: <Code className="h-8 w-8 mb-2" />,
    title: "Web Development",
    description:
      "Elevate your online presence with our Web Development expertise.",
    details: [
      "Custom Web Design: Unique designs tailored to your brand.",
      "E-commerce Solutions: Build scalable online stores.",
      "Web Applications: Develop robust and interactive web platforms.",
      "Maintenance and Optimization: Ensure your site performs flawlessly.",
    ],
  },
  {
    icon: <Smartphone className="h-8 w-8 mb-2" />,
    title: "App Development",
    description:
      "Bring your ideas to life with our custom App Development services.",
    details: [
      "Custom Mobile Apps: Tailored for iOS and Android platforms.",
      "Cross-Platform Development: Efficient apps built using modern frameworks like Flutter or React Native.",
      "User-Centric Design: Intuitive and engaging user experiences.",
      "Integration & Support: Seamlessly integrate with other platforms and provide ongoing support.",
    ],
  },
];

export default function ServicePage() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

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
              <Card>
                <CardHeader>
                  <div className="text-primary">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Collapsible
                    open={expandedCards.has(index)}
                    onOpenChange={() => toggleCard(index)}
                  >
                    <AnimatePresence initial={false}>
                      {expandedCards.has(index) && (
                        <CollapsibleContent asChild forceMount>
                          <motion.div
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            variants={{
                              expanded: { opacity: 1, height: "auto" },
                              collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="pb-4">
                              <h4 className="font-semibold mb-2">
                                Our {service.title} services include:
                              </h4>
                              <ul className="space-y-2">
                                {service.details.map((detail, detailIndex) => (
                                  <motion.li
                                    key={detailIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: detailIndex * 0.1 }}
                                    className="flex items-start"
                                  >
                                    <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                                    <span>{detail}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        </CollapsibleContent>
                      )}
                    </AnimatePresence>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full">
                        {expandedCards.has(index) ? (
                          <>
                            Show Less
                            <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Learn More
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </Collapsible>
                </CardContent>
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
