// components/MenuTree.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react"; // Import useMemo

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
  isDivider?: boolean;
}

interface MenuTreeProps {
  menuItems: MenuItem[];
  isMobile?: boolean;
  onLinkClick?: () => void;
  level?: number; // Track nesting level
}

export default function MenuTree({
  menuItems,
  isMobile = false,
  onLinkClick,
  level = 0,
}: MenuTreeProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  // Helper function to create menu items with main link as first child
  const processMenuItems = (items: MenuItem[]): MenuItem[] => {
    return items.map((item) => {
      if (item.children && item.children.length > 0 && item.href) {
        // If item has both children and href, add the main link as first child
        const mainLinkItem: MenuItem = {
          id: `${item.id}-main`,
          label: `${item.label} - Main Page`,
          href: item.href,
        };

        return {
          ...item,
          href: undefined, // Remove href from parent since it's now a child
          children: [mainLinkItem, ...item.children],
        };
      }

      // If item has children, process them recursively
      if (item.children && item.children.length > 0) {
        return {
          ...item,
          children: processMenuItems(item.children),
        };
      }

      return item;
    });
  };

  // Use useMemo to ensure processedMenuItems is only computed when menuItems changes
  const processedMenuItems = useMemo(
    () => processMenuItems(menuItems),
    [menuItems],
  );

  return (
    <ul
      className={`
        ${level === 0 ? "w-full" : ""}
        ${isMobile ? "space-y-1" : "space-y-0"}
      `}
    >
      {processedMenuItems.map((item) => (
        <li key={item.id} className="relative">
          {item.isDivider ? (
            <div className="border-t border-gray-300 my-2" />
          ) : item.children && item.children.length > 0 ? (
            // Menu item with children
            <div className="relative">
              <div
                className={`
                  flex items-center justify-between w-full py-2 px-3 rounded-md
                  hover:bg-primary hover:text-white transition-colors duration-200
                  cursor-pointer
                  ${isMobile ? "text-gt-text-light text-lg" : "text-gt-text-dark"}
                  ${level > 0 ? "pl-6" : ""}
                `}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center flex-1">
                  <span className="flex-1 text-left py-1">{item.label}</span>
                </div>

                {/* Dropdown toggle indicator */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-2 transition-transform duration-200 ${openItems.has(item.id) ? "rotate-180" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Submenu */}
              {openItems.has(item.id) && (
                <div
                  className={`
                    mt-1
                    ${isMobile
                      ? "pl-4 border-l-2 border-primary/30"
                      : "bg-base-100 rounded-md shadow-lg border border-gray-200"
                    }
                  `}
                >
                  <MenuTree
                    menuItems={item.children}
                    isMobile={isMobile}
                    onLinkClick={onLinkClick}
                    level={level + 1}
                  />
                </div>
              )}
            </div>
          ) : (
            // Simple menu item
            <Link
              href={item.href || "#"}
              className={`
                block w-full py-2 px-3 rounded-md text-left
                hover:bg-primary hover:text-white transition-colors duration-200
                ${isMobile ? "text-gt-text-light text-lg" : "text-gt-text-dark"}
                ${level > 0 ? "pl-6" : ""}
              `}
              onClick={onLinkClick}
              target={item.href?.startsWith("http") ? "_blank" : "_self"}
              rel={
                item.href?.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

// Your existing menuData
const menuData: MenuItem[] = [
  {
    id: "products-services",
    label: "PRODUCTS & SERVICES",
    href: "https://www.greentube.com/products-and-services/",
    children: [
      {
        id: "slot-games",
        label: "Slot Games",
        href: "https://www.greentube.com/product/slots/",
        children: [
          {
            id: "new-releases",
            label: "New Releases",
            href: "https://www.greentube.com/products-and-services/top-games/",
          },
          {
            id: "diamond-link-series",
            label: "Diamond Link Series",
            href: "https://www.greentube.com/diamond-link-series/",
          },
          {
            id: "win-ways-mechanics",
            label: "Win Ways™ Mechanics",
            href: "https://www.greentube.com/products-and-services/win-ways-mechanics/",
          },
          {
            id: "diamond-mystery-series",
            label: "Diamond Mystery™ Series",
            href: "https://www.greentube.com/diamond-mystery/",
          },
        ],
      },
      {
        id: "table-games",
        label: "Table Games",
        href: "https://www.greentube.com/product/table-games/",
      },
      {
        id: "video-poker-games",
        label: "Video Poker Games",
        href: "https://www.greentube.com/product/poker/",
      },
      {
        id: "video-bingo-games",
        label: "Video Bingo Games",
        href: "https://www.greentube.com/product/bingo/",
      },
      {
        id: "all-games",
        label: "All Games",
        href: "https://www.greentube.com/all-games/",
      },
      { id: "divider-1", label: "", isDivider: true },
      {
        id: "online-social-casino",
        label: "Online & Social Casino",
        href: "https://www.greentube.com/service/social-casino/",
      },
      {
        id: "greentube-plurius",
        label: "Greentube Plurius™ – Server Based Gaming",
        href: "https://www.greentube.com/service/plurius-server-based-gaming/",
      },
      {
        id: "mynt",
        label: "Mynt",
        href: "https://www.greentube.com/service/mynt/",
      },
      {
        id: "novosdk",
        label: "novoSDK",
        href: "https://www.greentube.com/service/novosdk/",
      },
      {
        id: "greentube-pro",
        label: "Greentube Pro",
        href: "https://www.greentube.com/service/greentube-pro/",
      },
    ],
  },
  {
    id: "media",
    label: "MEDIA",
    href: "https://www.greentube.com/media/",
    children: [
      { id: "news", label: "News", href: "https://www.greentube.com/news/" },
      {
        id: "upcoming-events",
        label: "Upcoming Events",
        href: "https://www.greentube.com/events/",
      },
    ],
  },
  {
    id: "careers",
    label: "CAREERS",
    href: "https://www.greentube.com/careers/",
    children: [
      {
        id: "open-positions",
        label: "Open Positions",
        href: "https://www.greentube.com/open-positions/",
      },
      {
        id: "teams",
        label: "Teams",
        href: "https://www.greentube.com/teams/",
        children: [
          {
            id: "development",
            label: "Development",
            href: "https://www.greentube.com/jobs/development/",
          },
          {
            id: "information-technology",
            label: "Information Technology",
            href: "https://www.greentube.com/jobs/information-technology/",
          },
          {
            id: "design",
            label: "Design",
            href: "https://www.greentube.com/jobs/design/",
          },
          {
            id: "communication-marketing-sales",
            label: "Communication, Marketing & Sales",
            href: "https://www.greentube.com/jobs/communication-marketing-sales/",
          },
          {
            id: "product-project-management",
            label: "Product & Project Management",
            href: "https://www.greentube.com/jobs/product-project-management/",
          },
          {
            id: "administration-support",
            label: "Administration & Support",
            href: "https://www.greentube.com/jobs/administration-support/",
          },
        ],
      },
      {
        id: "locations",
        label: "Locations",
        href: "https://www.greentube.com/locations/",
        children: [
          {
            id: "vienna",
            label: "Vienna, Austria",
            href: "https://www.greentube.com/location/vienna/",
          },
          {
            id: "graz",
            label: "Graz, Austria",
            href: "https://www.greentube.com/location/graz/",
          },
          {
            id: "las-vegas",
            label: "Las Vegas, United States",
            href: "https://www.greentube.com/location/us/",
          },
          {
            id: "nottingham",
            label: "Nottingham, UK",
            href: "https://www.greentube.com/location/nottingham/",
          },
          {
            id: "ljubljana",
            label: "Ljubljana, Slovenia",
            href: "https://www.greentube.com/location/slovenia-ljubljana/",
          },
          {
            id: "maribor",
            label: "Maribor, Slovenia",
            href: "https://www.greentube.com/location/maribor-slovenia/",
          },
          {
            id: "bratislava",
            label: "Bratislava, Slovakia",
            href: "https://www.greentube.com/location/bratislava/",
          },
          {
            id: "waalwijk",
            label: "Waalwijk, The Netherlands",
            href: "https://www.greentube.com/location/netherlands/",
          },
          {
            id: "belgrade",
            label: "Belgrade, Serbia",
            href: "https://www.greentube.com/location/serbia-belgrade/",
          },
          {
            id: "birkirkara",
            label: "Birkirkara, Malta",
            href: "https://www.greentube.com/location/birkirkara/",
          },
          {
            id: "vancouver",
            label: "Vancouver, Canada",
            href: "https://www.greentube.com/location/vancouver/",
          },
          {
            id: "athens",
            label: "Athens, Greece",
            href: "https://www.greentube.com/location/athens/",
          },
        ],
      },
      {
        id: "insights-tips",
        label: "Insights & Tips",
        href: "https://www.greentube.com/insights-and-tips/",
      },
    ],
  },
  {
    id: "about-us",
    label: "ABOUT US",
    href: "https://www.greentube.com/about-us/",
    children: [
      {
        id: "management",
        label: "Management",
        href: "https://www.greentube.com/management/",
      },
      {
        id: "subsidiaries",
        label: "Subsidiaries",
        href: "https://www.greentube.com/subsidiaries/",
      },
      {
        id: "references",
        label: "References",
        href: "https://www.greentube.com/references/",
        children: [
          {
            id: "clients",
            label: "Clients",
            href: "https://www.greentube.com/reference-type/clients/",
          },
          {
            id: "jurisdictions",
            label: "Jurisdictions",
            href: "https://www.greentube.com/reference-type/jurisdictions/",
          },
          {
            id: "certifications",
            label: "Certifications",
            href: "https://www.greentube.com/reference-type/certifications/",
          },
        ],
      },
      {
        id: "corporate-responsibility",
        label: "Corporate Responsibility",
        href: "https://www.greentube.com/csr/",
        children: [
          {
            id: "responsible-entertainment",
            label: "Responsible Entertainment",
            href: "https://www.greentube.com/csr/responsible-entertainment/",
          },
          {
            id: "enjoy-working-with-us",
            label: "Enjoy working with us",
            href: "https://www.greentube.com/csr/enjoy-working-us/",
          },
          {
            id: "going-green",
            label: "Going Green",
            href: "https://www.greentube.com/csr/going-green/",
          },
          {
            id: "always-compliant",
            label: "Always Compliant",
            href: "https://www.greentube.com/csr/always-compliant/",
          },
        ],
      },
      {
        id: "contact",
        label: "Contact",
        href: "https://www.greentube.com/contact/",
      },
      {
        id: "privacy-notice",
        label: "Privacy Notice",
        href: "https://www.greentube.com/privacy-policy/",
      },
    ],
  },
  {
    id: "client-space",
    label: "CLIENT SPACE",
    href: "https://www.greentube.com/client-space/",
    children: [
      {
        id: "log-in",
        label: "Log In",
        href: "https://www.greentube.com/login/",
      },
      {
        id: "reset-password",
        label: "Reset Password",
        href: "https://www.greentube.com/wp-login.php?action=lostpassword",
      },
      {
        id: "rolling-roadmap",
        label: "Rolling Roadmap",
        href: "https://www.greentube.com/rolling-roadmap/",
      },
    ],
  },
];

export { menuData };
