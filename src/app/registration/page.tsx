"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 2:
        return formData.education !== "" && formData.experience !== "";
      case 3:
        return formData.reason.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid() && step < 3) setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isStepValid()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/submit-registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit registration");
        }

        // toast({
        //   title: "Registration Successful",
        //   description: "Your information has been submitted successfully.",
        // });
        // Reset form or redirect user
        setFormData({
          name: "",
          email: "",
          education: "",
          experience: "",
          reason: "",
        });
        setStep(1);
      } catch (error) {
        console.error("Error submitting form:", error);
        // toast({
        //   title: "Registration Failed",
        //   description:
        //     "There was an error submitting your registration. Please try again.",
        //   variant: "destructive",
        // });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Data Science Course Registration
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Enroll in our comprehensive data science program
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
                      i <= step
                        ? "bg-primary text-primary-foreground"
                        : "bg-gray-200"
                    }`}
                    animate={{ scale: i === step ? 1.2 : 1 }}
                  >
                    {i < step ? <Check className="w-6 h-6" /> : i}
                  </motion.div>
                  <span className="mt-2 text-sm font-medium">
                    {i === 1
                      ? "Personal Info"
                      : i === 2
                      ? "Education"
                      : "Motivation"}
                  </span>
                </div>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {step === 1 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        className="text-lg p-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormData("email", e.target.value)
                        }
                        className="text-lg p-6"
                      />
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="education" className="text-lg">
                        Highest Education
                      </Label>
                      <Select
                        value={formData.education}
                        onValueChange={(value) =>
                          updateFormData("education", value)
                        }
                      >
                        <SelectTrigger className="text-lg p-6">
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">
                            High School
                          </SelectItem>
                          <SelectItem value="bachelors">
                            Bachelor&apos;s Degree
                          </SelectItem>
                          <SelectItem value="masters">
                            Master&apos;s Degree
                          </SelectItem>
                          <SelectItem value="phd">Ph.D.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-lg">Programming Experience</Label>
                      <RadioGroup
                        value={formData.experience}
                        onValueChange={(value) =>
                          updateFormData("experience", value)
                        }
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="beginner" id="beginner" />
                          <Label htmlFor="beginner" className="text-lg">
                            Beginner
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="intermediate"
                            id="intermediate"
                          />
                          <Label htmlFor="intermediate" className="text-lg">
                            Intermediate
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="advanced" id="advanced" />
                          <Label htmlFor="advanced" className="text-lg">
                            Advanced
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-lg">
                      Why do you want to learn Data Science?
                    </Label>
                    <textarea
                      id="reason"
                      className="w-full h-40 px-3 py-2 text-lg text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Share your motivation..."
                      value={formData.reason}
                      onChange={(e) => updateFormData("reason", e.target.value)}
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1 || isSubmitting}
            className="text-lg px-6 py-3"
          >
            <ChevronLeft className="w-5 h-5 mr-2" /> Previous
          </Button>
          {step < 3 ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid() || isSubmitting}
              className="text-lg px-6 py-3"
            >
              Next <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="text-lg px-6 py-3"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
