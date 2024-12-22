import { FC } from "react";

interface Introduction {
  heading: string;
  content: string;
}

interface Subsection {
  heading: string;
  content: string;
}

interface ContactInfo {
  email: string;
  phone: string;
}

interface SectionData {
  id: number;
  title: string;
  content?: string;
  list?: string[];
  additionalContent?: string;
  subsections?: Subsection[];
  contact?: ContactInfo;
}

interface TermsData {
  lastUpdated: string;
  title: string;
  introduction: Introduction;
  sections: SectionData[];
}

export const termsData: TermsData = {
  lastUpdated: "12/02/2024",
  title: "Terms of Service",
  introduction: {
    heading: "Welcome to Kryzotech!",
    content: `By using our website, services, or enrolling in our courses, you agree to abide by the following terms and conditions. Please read these Terms of Service carefully before using our services.`,
  },
  sections: [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: `By accessing Kryzotech's website and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please discontinue using our services.`,
    },
    {
      id: 2,
      title: "Services Provided",
      content: `Kryzotech offers a range of services, including but not limited to:`,
      list: [
        "Data Science solutions",
        "Web development and app development",
        "Professional courses and training",
      ],
      additionalContent: `We reserve the right to modify or discontinue any of our services without prior notice.`,
    },
    {
      id: 3,
      title: "Account Registration",
      content: `To access certain services or enroll in our courses, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials. Kryzotech is not liable for any loss or damage arising from unauthorized access to your account.`,
    },
    {
      id: 4,
      title: "Payment and Refund Policy",
      subsections: [
        {
          heading: "Payment Terms",
          content: `Payments for services and courses must be made upfront, unless otherwise agreed. Payment details and invoices will be provided upon confirmation of services.`,
        },
        {
          heading: "Refund Policy",
          content: `For services: Refunds will be considered on a case-by-case basis, depending on the scope of work completed. For courses: Refunds are generally not available once the course has commenced. However, if you face any issues, please contact support@kryzo.tech.`,
        },
      ],
    },
    {
      id: 5,
      title: "Contact Us",
      content: `If you have any questions or concerns about these Terms of Service, please contact us at:`,
      contact: {
        email: "kryzotech@gmail.com",
        phone: "+8801762640569",
      },
    },
  ],
};

const TermsPage: FC = () => {
  const { lastUpdated, title, introduction, sections } = termsData;

  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <h1 className="text-4xl text-center font-bold mb-8">{title}</h1>
      <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

      <h2 className="text-2xl font-semibold mb-4">{introduction.heading}</h2>
      <p className="text-gray-600 mb-8">{introduction.content}</p>

      <ol className="list-decimal space-y-8 pl-4">
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </ol>
    </div>
  );
};

const Section: FC<SectionData> = ({
  title,
  content,
  list,
  additionalContent,
  subsections,
  contact,
}) => {
  return (
    <li className="mb-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {content && <p className="text-gray-600 mb-4">{content}</p>}
      {list && (
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {additionalContent && (
        <p className="text-gray-600">{additionalContent}</p>
      )}
      {subsections?.map((sub, index) => (
        <div key={index} className="mb-4">
          <strong>{sub.heading}</strong>
          <p className="text-gray-600">{sub.content}</p>
        </div>
      ))}
      {contact && (
        <div>
          <p className="text-gray-600 mb-2">{content}</p>
          <p className="text-gray-600">Email: {contact.email}</p>
          <p className="text-gray-600">Phone: {contact.phone}</p>
        </div>
      )}
    </li>
  );
};

export default TermsPage;
