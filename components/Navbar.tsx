"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

type NavigationItem = {
  title: string;
  href: string;
};

const navigationData: NavigationItem[] = [
  { title: "Data", href: "#countdown" },
  { title: "Locais", href: "#venue" },
  { title: "Programa", href: "#timeline" },
  { title: "FAQ", href: "#faq" },
];

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const { scrollYProgress } = useScroll({ offset: ["start start", "end end"] });
  const animationRange = [0, 0.1];

  // Tailwind's `md` breakpoint is 768px
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const textColor = useTransform(scrollYProgress, animationRange, [
    "#ffffff",
    "#000000",
  ]);
  const desktopWidth = useTransform(scrollYProgress, animationRange, [
    "100%",
    "80%",
  ]);
  const backgroundColor = useTransform(scrollYProgress, animationRange, [
    "rgba(255, 255, 255, 0)",
    "rgba(255, 255, 255, 0.8)",
  ]);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center">
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <motion.div
          className="flex items-center justify-between gap-8 px-10 py-6 w-full"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          style={{
            color: textColor,
            width: isDesktop ? (desktopWidth as MotionValue<string>) : "100%",
            backgroundColor,
            borderRadius: "9999px",
          }}
        >
          <h2 className="text-2xl">T & F</h2>
          <div className="flex items-center gap-8 font-medium md:justify-center lg:gap-16">
            {navigationData.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="max-md:hidden"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.title}
              </a>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                      {item.title}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
