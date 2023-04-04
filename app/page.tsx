import { Alice } from "@next/font/google";
import Nav from "../components/nav/page";
import Footer from "@/components/footer/page";
import HomePage from "./home/page";
import MobileNav from "@/components/mobileNav/page";
const customFont = Alice({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <main className={customFont.className}>
      <div className="mainnav">
        <Nav />
      </div>
      <div className="mobilenav">
        <MobileNav />
      </div>
      <HomePage />
      <Footer />
    </main>
  );
}
