import React from "react";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to our Privacy Policy. This policy describes how we collect,
            use, and handle your personal information when you use our services,
            website, and products.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We collect information to provide better services to all our users.
            The types of information we collect include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Information you provide to us (such as name, email address, etc.)
            </li>
            <li>Information we get from your use of our services</li>
            <li>Information from third-party sources</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Information
          </h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Develop new products and features</li>
            <li>Protect our users and the public</li>
            <li>Perform analytics and conduct research</li>
            <li>Communicate with you about our services</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Information Sharing
          </h2>
          <p className="text-gray-700">
            We do not share personal information with companies, organizations,
            or individuals outside of our company except in the following cases:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>With your consent</li>
            <li>For external processing</li>
            <li>For legal reasons</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Information Security
          </h2>
          <p className="text-gray-700">
            We work hard to protect our users from unauthorized access to or
            unauthorized alteration, disclosure, or destruction of information
            we hold. We use encryption, secure servers, and regular security
            audits to ensure your data is safe.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            Our Privacy Policy may change from time to time. We will post any
            privacy policy changes on this page and, if the changes are
            significant, we will provide a more prominent notice.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-gray-700 mt-4">
            Email: kryzotech@gmail.com
            <br />
            Address: Dhaka,Bangladesh
          </p>
        </section>
      </div>
    </div>
  );
}
