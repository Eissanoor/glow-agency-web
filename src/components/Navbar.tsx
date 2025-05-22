
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import NavbarDesktopMenu from "./navbar/NavbarDesktopMenu";
import NavbarMobileMenu from "./navbar/NavbarMobileMenu";
import { services, company } from "./navbar/NavbarData";
import { Link } from "react-router-dom";
import logo from "../assets/tech/logo/logo4.png";
import { ChevronRight } from "lucide-react";

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
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              <img src={logo} alt="Company Logo" className=" dark:bg-white w-full h-20 object-contain cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavbarDesktopMenu services={services} company={company} />

          <div className="flex items-center space-x-4">
            <ThemeToggle />
           <Link to="/contact" className="items-center gap-2 bg-primary hover:bg-primary/90  inline-flex h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors text-white   ">
                Get Started 
              </Link>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <NavbarMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Navbar;
