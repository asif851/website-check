"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Briefcase,
  BookOpen,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const jobListings = [
  {
    title: "Junior Web Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Data Science Intern",
    company: "DataWiz",
    location: "New York, NY",
    type: "Internship",
  },
  {
    title: "UX Designer",
    company: "DesignHub",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Marketing Assistant",
    company: "GrowthGenius",
    location: "Chicago, IL",
    type: "Part-time",
  },
];

const careerResources = [
  {
    title: "Resume Writing Workshop",
    date: "June 15, 2024",
    time: "2:00 PM - 4:00 PM",
  },
  {
    title: "Interview Skills Webinar",
    date: "June 22, 2024",
    time: "1:00 PM - 3:00 PM",
  },
  {
    title: "Networking for Beginners",
    date: "June 29, 2024",
    time: "11:00 AM - 12:30 PM",
  },
  {
    title: "Personal Branding Seminar",
    date: "July 6, 2024",
    time: "10:00 AM - 12:00 PM",
  },
];

export default function StudentCareers() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Launch Your Career
      </motion.h1>

      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="jobs">Job Listings</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="resources">Career Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Find Your Dream Job</CardTitle>
                <CardDescription>
                  Explore exciting career opportunities tailored for students
                  and recent graduates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <Search className="text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow"
                  />
                </div>
                <div className="space-y-4">
                  {filteredJobs.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription>
                            {job.company} - {job.location}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button variant="outline" className="mr-2">
                            {job.type}
                          </Button>
                          <Button>Apply Now</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="internships">
            <Card>
              <CardHeader>
                <CardTitle>Internship Opportunities</CardTitle>
                <CardDescription>
                  Gain valuable experience with our partner companies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Summer Tech Internship</CardTitle>
                      <CardDescription>TechCorp - 3 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Gain hands-on experience in software development and
                        project management.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button>Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Marketing Intern</CardTitle>
                      <CardDescription>GrowthGenius - 6 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Assist in developing and implementing marketing
                        strategies for various clients.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button>Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Career Development Resources</CardTitle>
                <CardDescription>
                  Enhance your skills and prepare for your future career.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {careerResources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {resource.title}
                          </CardTitle>
                          <CardDescription>
                            {resource.date} | {resource.time}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button variant="outline">Register</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Need Career Guidance?</h2>
          <Button size="lg" className="mr-4">
            <BookOpen className="mr-2 h-4 w-4" />
            Career Resources
          </Button>
          <Button size="lg" variant="outline">
            <GraduationCap className="mr-2 h-4 w-4" />
            Schedule Counseling
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
