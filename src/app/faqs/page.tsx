import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does your IT firm offer?",
    answer:
      "We provide services in data science, web development, app development, and IT consulting.",
  },
  {
    question: "Do you offer training programs?",
    answer:
      "Yes, we offer training programs in Data Science, Data Analysis, SQL for data analytics, PowerBI and so on.",
  },
  {
    question: "Are your courses online or offline?",
    answer:
      "Our courses are primarily online, making them accessible worldwide.",
  },
  {
    question: "Do you offer internships with your courses?",
    answer:
      "Yes, selected courses include internship opportunities for hands-on experience.",
  },
  {
    question: "Do you provide certification?",
    answer:
      "Yes, all of our courses include a certificate upon successful completion.",
  },
  {
    question: "Are your training programs beginner-friendly?",
    answer:
      "Yes, we design our courses to cater to all levels, including beginners.",
  },

  {
    question: "Where is your firm located?",
    answer:
      "We are based in Dhaka, Bangladesh, but our services are available worldwide.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
