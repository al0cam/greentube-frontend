import "./globals.css";
import { Inter } from "next/font/google";
import MobileNav from "./components/mobileNav";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Greentube Clone",
  description:
    "A modern corporate web presence for Greentube, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <div className="lg:block hidden">
          <Sidebar />
        </div>

        <main className="flex-1 lg:ml-64 overflow-y-auto">{children}</main>

        <MobileNav />
      </body>
    </html>
  );
}
