import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lost and Found Hub",
  description: "Lost and Found Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto px-4 min-h-[40vh]">{children}</div>
        <div className="text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Lost and Found Hub
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </body>
    </html>
  );
}
