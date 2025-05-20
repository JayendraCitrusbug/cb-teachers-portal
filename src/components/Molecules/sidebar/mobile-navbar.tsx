import { useState } from "react";
import { Menu, X, Home, BookOpen, Users, User, Settings } from "lucide-react";

import IMAGES from "@/assets/images";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ResponsiveSidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      icon: <Home />,
      href: "/",
      is_active:
        pathname.includes("/") &&
        !pathname.includes("/lessons") &&
        !pathname.includes("/students") &&
        !pathname.includes("/family") &&
        !pathname.includes("/settings"),
    },
    {
      label: "Lessons",
      icon: <BookOpen />,
      href: "/lessons",
      is_active: pathname.includes("/lessons"),
    },
    {
      label: "Students",
      icon: <Users />,
      href: "/students",
      is_active: pathname.includes("/students"),
    },
    {
      label: "Family",
      icon: <User />,
      href: "/family/chat/",
      is_active: pathname.includes("/family"),
    },
    {
      label: "Settings",
      icon: <Settings />,
      href: "/settings",
      is_active: pathname.includes("/settings"),
    },
  ];

  return (
    <div className="flex top-0">
      <header className="flex md:hidden justify-between items-center p-4 w-full shadow relative z-50 bg-white">
        <img src={IMAGES.LOGO} alt="Logo" className="h-8" />
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            className={`absolute top-16 left-0 w-full bg-white shadow-lg z-40 p-4 space-y-4 transform transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            } origin-top`}
          >
            {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className={`flex items-center gap-3 ${
                  item.is_active
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
