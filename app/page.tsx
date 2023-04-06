import { Alice } from "@next/font/google";
import HomePage from "./home/page";
const customFont = Alice({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <main className={customFont.className}>
      <HomePage />
    </main>
  );
}
