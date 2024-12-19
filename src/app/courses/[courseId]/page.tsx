"use client";

import { useParams } from "next/navigation";
import CourseDetails from "./CourseDetails";

const Page = () => {
  const params = useParams();
  const courseId = params.courseId;

  return (
    <div>
      <CourseDetails selectedCourseId={courseId} />
    </div>
  );
};

export default Page;
