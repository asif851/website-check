import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Clock, GraduationCap } from "lucide-react";

const courses = [
  {
    title: "Data Science",
    description:
      "Kryzotech's Data Science Course provides hands-on training in Python, covering data analysis, machine learning, deep learning, NLP and many more topics through real-world projects. It’s ideal for beginners and intermediate learners looking to excel in data science.",
    duration: "4 Months",
    certifications: ["Data Science Certificate"],
    level: "Intermidate",
  },
  {
    title: "Advanced NLP Techniques",
    description:
      "Kryzotech's Advanced NLP Techniques Course offers hands-on training in natural language processing, covering text preprocessing, sentiment analysis, language modeling, transformers, and more through real-world projects.",
    duration: "3 Months",
    certifications: [
      "Advanced NLP Techniques Certificate"],
    level: "Advanced",
  },
  {
    title: "Mysql for Data Analysis",
    description: "Kryzotech's MySQL for Data Analysis Course provides hands-on training in database management, covering SQL queries, data extraction, aggregation, joins, and more through real-world projects.",
    duration: "2 Months",
    certifications: [
      "Mysql for Data Analysis Certificate",
    ],
    level: "Advanced",
  },
  {
    title: "BI Developer: PowerBi",
    description:
      "Kryzotech's Power BI Course offers hands-on training in data visualization, covering report creation, dashboard design, DAX functions, data modeling, and more through real-world projects. It's ideal for beginners and intermediate learners looking to excel in business intelligence and data analytics.",
    duration: "2 Months",
    certifications: [
      "BI Developer: PowerBi Certificate"

    ],
    level: "All Levels",
  },
];

export default function CourseCertifications() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Course Certifications</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Enhance your skills and earn valuable certifications upon completion
          of our comprehensive LLM courses.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{course.title}</CardTitle>
              <CardDescription className="flex items-center mt-2">
                <Clock className="w-4 h-4 mr-2" />
                {course.duration}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{course.description}</p>
              <div className="flex items-center mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="font-semibold">Level:</span>
                <Badge variant="secondary" className="ml-2">
                  {course.level}
                </Badge>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Certifications Earned:
                </h3>
                <ul className="list-disc list-inside">
                  {course.certifications.map((cert, certIndex) => (
                    <li key={certIndex}>{cert}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <GraduationCap className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h2 className="text-2xl font-semibold mb-4">
          Advance Your Career with Kryzotech Certifications
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Our industry-recognized certifications demonstrate your expertise in
          and open doors to exciting career
          opportunities.
        </p>
        <Button size="lg">View Full Course Catalog</Button>
      </div>
    </div>
  );
}
