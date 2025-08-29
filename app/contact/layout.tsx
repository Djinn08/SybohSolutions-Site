import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Syboh Solutions | Get Started with Your Project",
  description: "Ready to start your project? Contact Syboh Solutions in Lincoln, NE. We'll get back to you within one business day.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
