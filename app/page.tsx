"use client";
import { Alice } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";

import HomePage from "./home/page";
const customFont = Alice({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <main className={customFont.className}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
        >
          <HomePage />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
