"use client";

import Link from "next/link";
import Image from "next/image";
import MenuTree, { menuData } from "./menuTree";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 bg-neutral transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex justify-between items-center py-4 border-b border-gray-700 mb-8">
          <Link href="/" className="normal-case text-xl" onClick={onClose}>
            <Image
              src="/logo.svg"
              alt="Greentube Logo"
              width={150}
              height={40}
              priority
              className="rounded-md"
            />
          </Link>
          <button
            className="btn btn-ghost btn-circle"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Close Menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className=" overflow-y-auto">
          <MenuTree
            menuItems={menuData}
            isMobile={true}
            onLinkClick={onClose}
          />
        </nav>

        <div className="py-4 border-t border-gray-700 mt-auto">
          <div className="grid grid-flow-col gap-12 justify-center">
            <a
              href="https://www.facebook.com/Greentube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <title>Facebook</title>
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07.05-3.98-.98-5.352-2.51v-.063c2.296 1.518 5.021 2.413 7.974 2.413 9.574 0 14.792-7.9 14.792-14.792 0-.222-.01-.442-.029-.662z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/GreentubeVienna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <title>YouTube</title>
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.515 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/greentube-gmbh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <title>LinkedIn</title>
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.274 0-4.188 1.542-4.188 4.056v2.944z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/greentubeofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-.058.03-1.265.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919.058-.03 1.265-.07 4.85-.07zm0 2.163c-3.204 0-3.584.012-4.85.07-2.695.123-3.327.97-3.44 3.44-.058 1.265-.07 1.645-.07 4.85s.012 3.584.07 4.85c.113 2.472.745 3.319 3.44 3.44.058.03 1.265.07 4.85.07s3.584-.012 4.85-.07c2.695-.123 3.327-.97 3.44-3.44.058-1.265.07-1.645.07-4.85s-.012-3.584-.07-4.85c-.113-2.472-.745-3.319-3.44-3.44-.058-.03-1.265-.07-4.85-.07zm0 3.627c-2.43 0-4.409 1.979-4.409 4.409s1.979 4.409 4.409 4.409 4.409-1.979 4.409-4.409-1.979-4.409-4.409-4.409zm0 2.163c1.24 0 2.246 1.006 2.246 2.246s-1.006 2.246-2.246 2.246-2.246-1.006-2.246-2.246 1.006-2.246 2.246-2.246zm6.545-6.545c-.607 0-1.1.493-1.1 1.1 0 .607.493 1.1 1.1 1.1s1.1-.493 1.1-1.1-.493-1.1-1.1-1.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
