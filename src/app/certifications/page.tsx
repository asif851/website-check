import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function CertificationPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side: Certification Information */}
      <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Shaw Certifications</h1>
        <p className="text-lg mb-8">
          Upon completion of our comprehensive course, students receive an
          official Shaw Certification, recognizing their expertise and
          dedication to excellence.
        </p>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Certification Benefits</CardTitle>
            <CardDescription>Why our certification matters</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Industry-recognized qualification",
                "Enhances professional credibility",
                "Demonstrates up-to-date skills",
                "Potential for career advancement",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Button className="w-full max-w-md mx-auto">
          Learn More About Our Courses
        </Button>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt="Shaw Certification"
          className="max-w-full max-h-full object-cover"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
