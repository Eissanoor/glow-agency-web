
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Glow<span className="text-accent">Tech</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Home
            </a>
            <a
              href="#services"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Services
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="hidden md:flex">Get Started</Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#portfolio"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
