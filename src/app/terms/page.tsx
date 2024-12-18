import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <h1 className="text-4xl text-center font-bold mb-8">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">Last Updated: 12/02/2024</p>

      <h2 className="text-2xl font-semibold mb-4">Welcome to Kryzotech!</h2>
      <p className="text-gray-600 mb-8">
        By using our website, services, or enrolling in our courses, you agree
        to abide by the following terms and conditions. Please read these Terms
        of Service carefully before using our services.
      </p>

      <ol className="list-decimal space-y-8 pl-4">
        <li>
          <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
          <p className="text-gray-600">
            By accessing Kryzotech's website and using our services, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms of Service. If you do not agree with these terms, please
            discontinue using our services.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mb-2">2.   Services Provided</h3>
          <p className="text-gray-600 mb-4">
            Kryzotech offers a range of services, including but not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
            <li>Data Science solutions</li>
            <li>Web development and app development</li>
            <li>Professional courses and training</li>
          </ul>
          <p className="text-gray-600">
            We reserve the right to modify or discontinue any of our services
            without prior notice.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mb-2">3. Account Registration</h3>
          <p className="text-gray-600">
            To access certain services or enroll in our courses, you may be
            required to create an account. You are responsible for maintaining
            the confidentiality of your account credentials. Kryzotech is not
            liable for any loss or damage arising from unauthorized access to
            your account.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold mb-2">
            4. Payment and Refund Policy
          </h3>
          <p className="text-gray-600 mb-4">
            We accept various payment methods, including bank transfers and
            mobile banking platforms like bKash.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Payment Terms:</strong> Payments for services and courses
            must be made upfront, unless otherwise agreed. Payment details and
            invoices will be provided upon confirmation of services.
          </p>
          <p className="text-gray-600">
            <strong>Refund Policy:</strong> For services: Refunds will be
            considered on a case-by-case basis, depending on the scope of work
            completed. For courses: Refunds are generally not available once the
            course has commenced. However, if you face any issues, please
            contact support@kryzo.tech.
          </p>
        </li>
        {/* Continue with the rest of the sections following the same pattern */}
        <li>
          <h3 className="text-xl font-semibold mb-2">5. Contact Us</h3>
          <p className="text-gray-600 mb-2">
            If you have any questions or concerns about these Terms of Service,
            please contact us at:
          </p>
          <p className="text-gray-600">Email: kryzotech@gmail.com</p>
          <p className="text-gray-600">Phone: +8801762640569</p>
        </li>
      </ol>
    </div>
  );
}
