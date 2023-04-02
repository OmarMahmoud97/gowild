import { Inter } from "@next/font/google";
import Nav from "./nav/page";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
    </>
  );
}
