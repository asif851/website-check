import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import FooterSection from "@/components/shared/FooterSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-popping",
});

export const metadata: Metadata = {
  title: "Kryzotech",
  description:
    "At Kryzotech, we are passionate about pushing the boundaries of what's possible in the realms of data science, web development, and app development. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>

          <FooterSection />
        </div>
      </body>
    </html>
  );
}
