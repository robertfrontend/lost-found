import Image from "next/image";
import Header from "../components/layout/header";
import Feed from "../components/Feed";
import Link from "next/link";
import Hero from "@/components/Hero";


const list = [
  {
    name: "List of lost",
    bgcolor: "#222f3e",
    icon: "🕵️",
    link: "find",
  },
  {
    name: "Lost",
    bgcolor: "#ff6b6b",
    icon: "😔",
    link: "lost",
  },
];

export default function Home() {
  return (
    <main className="">
    <Hero/>

      <div className="grid grid-cols-2 mt-4">
        <h2 className="text-xl">List of lost</h2>
        <div className="text-right">
          <button className="button">Publish</button>
        </div>
      </div>
      <Feed />
    </main>
  );
}
