import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
