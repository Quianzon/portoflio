import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gladys Quianzon | Web Developer & QA Engineer",
  description: "Professional portfolio of Gladys Quianzon, a skilled Web Developer and QA Engineer specializing in PHP, WordPress, and modern web technologies. View projects, experience, and certifications.",
  keywords: ["Web Developer", "QA Engineer", "PHP Developer", "WordPress Developer", "Portfolio"],
  authors: [{ name: "Gladys Quianzon" }],
  openGraph: {
    title: "Gladys Quianzon | Web Developer & QA Engineer",
    description: "Professional portfolio showcasing web development and QA engineering expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
