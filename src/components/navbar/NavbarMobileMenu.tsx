
import { Button } from "@/components/ui/button";

interface NavbarMobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavbarMobileMenu = ({ isMenuOpen, setIsMenuOpen }: NavbarMobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-800">
      <nav className="flex flex-col space-y-4">
        <a
          href="/"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="/services"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </a>
        <a
          href="/about"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </a>
        <a
          href="/portfolio"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </a>
        <a
          href="/team"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Team
        </a>
        <a
          href="/contact"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
        <Button className="w-full">Get Started</Button>
      </nav>
    </div>
  );
};

export default NavbarMobileMenu;
