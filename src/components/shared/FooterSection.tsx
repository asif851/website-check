"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blogs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Course Catalog", href: "/courses" },
      { name: "Learning Paths", href: "/learning-paths" },
      { name: "Certifications", href: "/certifications" },
      { name: "Student Success Stories", href: "/success-stories" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/Kryzotech/",
  },
  {
    name: "X",
    icon: Twitter,
    href: "https://x.com/kryzotech",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/kryzotech/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/89964174/admin/dashboard/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@Kryzotech",
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-2"
          >
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              kryzotech
            </Link>
            <p className="text-gray-400 mb-4">
              Learn the latest technologies and build skills with our courses,
              certifications, and learning paths.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * columnIndex }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} kryzotech. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
