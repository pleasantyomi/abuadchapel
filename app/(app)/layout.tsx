/* eslint-disable @typescript-eslint/no-unused-vars */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Nav />

      <Footer />
    </main>
  );
}
