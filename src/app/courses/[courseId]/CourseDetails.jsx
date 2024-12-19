import { courseData } from "@/config/courses";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function CourseDetails({ selectedCourseId }) {
  const selectedCourse = courseData.find(
    (course) => course.id === selectedCourseId
  );

  if (!selectedCourse) {
    return <div className='mt-5 text-center'>Course data not found</div>;
  }

  return (
    <Card className="w-full my-7 max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl">{selectedCourse.title}</CardTitle>

        <div className="text-lg font-semibold mb-2">
          Instructor: {selectedCourse.instructor}
          <ul className="list-disc mt-0.5 text-sm text-muted-foreground pl-5">
            {selectedCourse.instructorDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {selectedCourse.modules.map((module) => (
            <AccordionItem key={module.id} value={`module-${module.id}`}>
              <AccordionTrigger>
                <span className="font-semibold">{module.title}</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5">
                  {module.topics.map((topic, index) => (
                    <li key={index} className="mb-1">
                      <Badge variant="outline" className="mr-2">
                        {index + 1}
                      </Badge>
                      {topic}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
