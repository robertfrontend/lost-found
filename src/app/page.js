import Image from "next/image";
import Header from "./components/layout/header";
import Feed from "./components/Feed";
import Link from "next/link";

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
      <div className="text-center">
        <p>Easily post and find lost items in Boston.</p>
      </div>

      {/* {list.map((i, index) => (
        <Link
          href={`/${i.link}`}
          className={`w-full min-h-[10vh] bg-[#c8d6e52c] border-[1px] border-[#c8d6e56e] rounded-md flex justify-center items-center my-2`}
          key={index}
        >
          <h3 className="text-xl font-semibold">
            {i.name} {i.icon}{" "}
          </h3>
        </Link>
      ))} */}
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
