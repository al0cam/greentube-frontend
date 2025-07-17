// components/Footer.tsx
// This can be a Server Component.
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 pb-20 bg-neutral text-neutral-content flex flex-col items-center text-center">
      {/* Footer Navigation Links - Reverted to simpler set with updated links */}
      <div className="w-full max-w-7xl grid grid-flow-col gap-4 justify-center mb-8">
        {" "}
        {/* Adjusted grid for simpler links */}
        <Link
          href="https://www.greentube.com/about-us/"
          className="link link-hover"
        >
          About us
        </Link>
        <Link
          href="https://www.greentube.com/contact/"
          className="link link-hover"
        >
          Contact
        </Link>
        <Link
          href="https://www.greentube.com/careers/"
          className="link link-hover"
        >
          Jobs
        </Link>
        {/* Replaced "Press kit" with "Games" and added the appropriate link */}
        <Link
          href="https://www.greentube.com/all-games/"
          className="link link-hover"
        >
          Games
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="py-4 border-t border-gray-700 w-full max-w-7xl mt-auto">
        <div className="grid grid-flow-col gap-8 justify-center mb-4">
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

      {/* Copyright and Regulatory Info */}
      <div className="w-full max-w-7xl text-center mt-4 text-sm">
        <p className="font-bold mb-2">
          © {currentYear} Copyright Greentube GmbH
        </p>
        <p className="mb-2">Wiedner Hauptstrasse 94 | A-1050 Vienna</p>
        <div className="text-xs max-w-md mx-auto">
          {" "}
          {/* Added mx-auto for centering */}
          <p className="mb-2">
            Greentube GmbH holds a Remote Gambling Software licence and is
            regulated in Great Britain by the Gambling Commission under account
            number{" "}
            <a
              href="https://www.gamblingcommission.gov.uk/public-register/business/detail/41020"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="link link-hover"
            >
              41020
            </a>
            .
          </p>
          <p className="mb-2">
            {" "}
            {/* Added mb-2 for spacing */}
            Greentube GmbH is regulated by the Malta Gaming Authority and
            licensed to offer Type 1 Gaming Services as a corporate entity under
            authorization number{" "}
            <a
              href="https://authorisation.mga.org.mt/verification.aspx?lang=EN&amp;company=7c4bf96f-c677-416e-9237-c95b469c7150&amp;details=1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="link link-hover"
            >
              MGA/CRP/120/2006
            </a>{" "}
            dated 1st March 2023.
          </p>
          {/* Clarification about design and content */}
          <p className="mt-4 text-gray-400">
            Please note: This website is a design recreation. The design is my (
            <a
              href="https://www.linkedin.com/in/benjamin-filip-sikac/"
              className="link link-hover text-blue-500 hover:text-blue-700"
            >
              Benjamin Filip Sikac
            </a>
            ) original work, while the content (text, images, links) is sourced
            from the official Greentube website for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
