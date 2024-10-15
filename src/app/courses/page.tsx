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
    title: "LLM Fundamentals",
    description:
      "Master the basics of Language Learning Models and their applications.",
    duration: "4 weeks",
    certifications: ["LLM Basics Certificate", "NLP Foundations Badge"],
    level: "Beginner",
  },
  {
    title: "Advanced NLP Techniques",
    description:
      "Dive deep into Natural Language Processing techniques used in modern LLMs.",
    duration: "6 weeks",
    certifications: [
      "Advanced NLP Practitioner Certificate",
      "LLM Optimization Specialist Badge",
    ],
    level: "Intermediate",
  },
  {
    title: "LLM Implementation and Deployment",
    description: "Learn to implement and deploy LLMs in real-world scenarios.",
    duration: "8 weeks",
    certifications: [
      "LLM Implementation Expert Certificate",
      "AI Deployment Specialist Badge",
    ],
    level: "Advanced",
  },
  {
    title: "AI Ethics and LLM Governance",
    description:
      "Explore ethical considerations and governance in LLM development and deployment.",
    duration: "4 weeks",
    certifications: [
      "AI Ethics Professional Certificate",
      "LLM Governance Specialist Badge",
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
          Advance Your Career with LLM Certifications
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Our industry-recognized certifications demonstrate your expertise in
          Language Learning Models and open doors to exciting career
          opportunities.
        </p>
        <Button size="lg">View Full Course Catalog</Button>
      </div>
    </div>
  );
}
