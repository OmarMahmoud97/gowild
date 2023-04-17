import "./globals.css";
import Nav from "../components/nav/nav";
import Footer from "@/components/footer/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-x-hidden w-screen">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
