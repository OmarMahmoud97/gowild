import { Alice } from "@next/font/google";
import Nav from "../components/nav/page";
import Landing from "./landing/page";

const customFont = Alice({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <main className={customFont.className}>
      {/* <Nav /> */}
      <Landing />
    </main>
  );
}
