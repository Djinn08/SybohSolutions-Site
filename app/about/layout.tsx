import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Syboh Solutions | Web & Tech Support in Lincoln, NE",
  description: "Meet the brothers behind Syboh Solutions in Lincoln, NE. Practical web, SaaS, and tech help built for small business operators.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
