import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu and control body scroll
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "" : "hidden";
  };

  // Clean up body overflow on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 ease-in-out py-4 px-6",
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Toggle (Moved to Right) */}
          <button
            className="md:hidden ml-auto focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Name (Hidden on Mobile) */}
          <a
            href="#"
            className="hidden md:block text-2xl font-bold tracking-tighter hover:text-primary transition-colors "
          >
            Tahmid Enam Shrestha
          </a>

          {/* Desktop Menu (Right) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-hover text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-white/95 backdrop-blur-md z-[60] flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Menu Items */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-medium link-hover"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "";
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;