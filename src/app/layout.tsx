import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "HyberTec | Websites and Software for Growing Businesses",
    template: "%s | HyberTec",
  },
  description:
    "We help businesses handle freelance requests with a reliable partner for websites, software builds, and ongoing product support.",
  keywords: ["web development", "software agency", "business websites", "custom web apps", "freelance partner"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
