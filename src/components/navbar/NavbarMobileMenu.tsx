
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarMobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavbarMobileMenu = ({ isMenuOpen, setIsMenuOpen }: NavbarMobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-800">
      <nav className="flex flex-col space-y-4">
        <Link
          to="/"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/about"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/portfolio"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          to="/testimonials"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Testimonials
        </Link>
        <Link
          to="/team"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Team
        </Link>
        <Link
          to="/contact"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <Button className="w-full">Get Started</Button>
      </nav>
    </div>
  );
};

export default NavbarMobileMenu;
