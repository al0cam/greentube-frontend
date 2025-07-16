// components/Sidebar.tsx
// This component is for desktop (lg and up)
"use client";

import Image from "next/image";
import Link from "next/link"; // Use Next.js Link for navigation

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-neutral text-neutral-content h-screen fixed top-0 left-0 shadow-lg p-4 z-30">
      {/* Logo at the top of the sidebar */}
      <div className="flex items-center justify-center py-4 mb-8">
        <Link href="/" className="normal-case text-xl">
          <Image
            src="https://placehold.co/150x40/0056b3/ffffff?text=Greentube+Logo"
            alt="Greentube Logo"
            width={150}
            height={40}
            priority
            className="rounded-md"
          />
        </Link>
      </div>

      {/* Vertical Navigation Menu */}
      <ul className="menu menu-vertical p-0 font-semibold text-gt-text-light flex-grow">
        <li>
          <Link
            href="/about"
            className="py-3 px-4 rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="py-3 px-4 rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
          >
            PRODUCTS & SERVICES
          </Link>
        </li>
        <li>
          <Link
            href="/media"
            className="py-3 px-4 rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
          >
            MEDIA
          </Link>
        </li>
        <li>
          <Link
            href="/career"
            className="py-3 px-4 rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
          >
            CAREER
          </Link>
        </li>
        <li>
          <Link
            href="/responsible-gaming"
            className="py-3 px-4 rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
          >
            RESPONSIBLE GAMING
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="py-3 px-4 rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
          >
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Optional: Add a search icon or other utilities at the bottom of the sidebar */}
      <div className="py-4 border-t border-gray-700 mt-auto">
        <button className="btn btn-ghost btn-circle w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
