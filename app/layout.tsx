import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";

export const metadata: Metadata = {
  title: "ABUAD CHAPEL",
  description:
    "New generation ABUAD CHAPEL. We are Godly and Purpose driven youths.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/public/logos/chapelLogo.png",
        href: "/public/logos/chapelLogo.png",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/public/logos/chapelLogo.png",
        href: "/public/logos/chapelLogo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
