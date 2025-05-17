
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { services, company, fields, products } from "./NavbarData";

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
        
        <Accordion type="single" collapsible>
          <AccordionItem value="company">
            <AccordionTrigger className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition py-0">
              Company
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 flex flex-col space-y-2 mt-2">
                {company.map((item, index) => (
                  <Link
                    key={`mobile-company-${index}`}
                    to={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="services">
            <AccordionTrigger className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition py-0">
              Services
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 flex flex-col space-y-2 mt-2">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Services</p>
                {services.map((item, index) => (
                  <Link
                    key={`mobile-service-${index}`}
                    to={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-4">Our Fields</p>
                {fields.map((item, index) => (
                  <Link
                    key={`mobile-field-${index}`}
                    to={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-4">Products</p>
                {products.map((item, index) => (
                  <Link
                    key={`mobile-product-${index}`}
                    to={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
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
          to="/contact"
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        
        <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
          Get Started
        </Button>
      </nav>
    </div>
  );
};

export default NavbarMobileMenu;
