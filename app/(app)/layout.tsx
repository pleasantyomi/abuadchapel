/* eslint-disable @typescript-eslint/no-unused-vars */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// import Confession from "@/components/confession";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-x-hidden ">
      <Nav />
      {children}
      {/* <Confession /> */}
      <Footer />
    </main>
  );
}
