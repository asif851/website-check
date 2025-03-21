"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Code, PenTool, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const learningPaths = [
  {
    title: "Web Development",
    description: "Master the art of creating responsive and dynamic websites",
    icon: <Code className="h-6 w-6" />,
    courses: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Database Management",
    ],
  },
  {
    title: "Data Science",
    description: "Master the art of extracting insights and building predictive models with data science techniques.",
    icon: <PenTool className="h-6 w-6" />,
    courses: [
      "Python",
      "Data Analysis & Visualization",
      "Statistics",
      "Tableau",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Mysql",
      "Flask",
      "Streamlit",
      "Git & Github"
    ],
  },
  {
    title: "Mysql for Data Analysis",
    description: "Master the art of data manipulation and retrieval using MySQL for effective data analysis.",
    icon: <Briefcase className="h-6 w-6" />,
    courses: ["Foundations of MySQL and Relational Databases",
        "Core Data Manipulation Techniques in MySQL",
        "Aggregate Functions and Data Summarization",
        "Data Exploration and Aggregation in MySQL",
        "Combining Data with Joins and Set Operations in MySQL",
        "Advanced Querying with Subqueries and Nested Logic in MySQL",
        "Mastering Date and String Manipulations in MySQL",
        "Advanced MySQL Techniques for Scalable Analytics",
        "Capstone Project and Industry Best Practices"],
  },

  {
    title: "PowerBI",
    description: "master the art of creating responsive and dynamic dashboards in Power BI",
    icon: <Code className="h-6 w-6" />,
    courses: [
      "PowerBI Basics",
      "Data Loading & Transformation",
      "Data Modeling, Basic DAX and Starting Portflio Project 01",
      "DAX Functions & Visualization Essentitals",
      "Advanced DAX & Project Visualization",
      "Interactive & Map Visualizations",
      "Advanced Report Customization",
      "Finalizing & Deploying Project 01",
      "Starting Portfolio Project 02 - Cohort & RFM Analysis",
      "Advanced DAX for Cohort & RFM Analysis",
      "Course Completion & Final Projects"
    ],
  },
];

export default function LearningPaths() {
  const [selectedPath, setSelectedPath] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Your Learning Journey Starts Here
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        {learningPaths.map((path, index) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="mb-8 overflow-hidden">
              <CardHeader
                className="flex flex-row items-center gap-4 cursor-pointer"
                onClick={() =>
                  setSelectedPath(selectedPath === index ? null : index)
                }
              >
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  {path.icon}
                </div>
                <div>
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </div>
                <ChevronRight
                  className={`ml-auto transition-transform duration-200 ${
                    selectedPath === index ? "rotate-90" : ""
                  }`}
                />
              </CardHeader>
              <motion.div
                initial={false}
                animate={{ height: selectedPath === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {path.courses.map((course, courseIndex) => (
                      <motion.li
                        key={course}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: courseIndex * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center mt-12"
      >
        <Button size="lg">Start Your Journey</Button>
      </motion.div>
    </div>
  );
}
