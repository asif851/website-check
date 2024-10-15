"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  "Web Development Bootcamp",
  "Data Science Fundamentals",
  "UX/UI Design Masterclass",
  "Digital Marketing Certificate",
  "Machine Learning Specialization",
  "Cybersecurity Essentials",
];

export default function SubmitSuccessStory() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    course: "",
    story: "",
    consentToShare: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCourseChange = (value: any) => {
    setFormState((prev) => ({ ...prev, course: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Share Your Success Story
      </motion.h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Your Journey to Success</CardTitle>
          <CardDescription>
            Tell us how our courses have impacted your career and life
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Course Completed</Label>
                <Select
                  name="course"
                  value={formState.course}
                  onValueChange={handleCourseChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="story">Your Success Story</Label>
                <Textarea
                  id="story"
                  name="story"
                  value={formState.story}
                  onChange={handleInputChange}
                  placeholder="Tell us how the course has impacted your career..."
                  required
                  className="min-h-[150px]"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="consentToShare"
                  name="consentToShare"
                  checked={formState.consentToShare}
                  onChange={handleInputChange}
                  required
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="consentToShare" className="text-sm">
                  I consent to my story being shared on the website and in
                  marketing materials
                </Label>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Your Story"
                )}
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="text-2xl font-semibold">
                Thank You for Sharing Your Story!
              </h2>
              <p>
                Your success inspires others. We&apos;ll review your submission
                and may feature it on our website.
              </p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
