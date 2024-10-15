import { Separator } from "@/components/ui/separator";

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Cookie Policy</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to our Cookie Policy. This policy describes what cookies
            are, how we use them, and how you can manage them when you visit our
            website.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies</h2>
          <p className="text-gray-700 mb-4">
            Cookies are small text files that are stored on your device when you
            visit a website. They are used to remember your preferences and
            provide a personalized experience.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
          <p className="text-gray-700 mb-4">We use cookies to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Remember your preferences</li>
            <li>Improve our website performance</li>
            <li>Provide personalized content</li>
            <li>Analyze our website traffic</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. How to Manage Cookies
          </h2>
          <p className="text-gray-700">
            You can manage cookies by changing your browser settings. Please
            note that blocking cookies may affect your experience on our
            website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
