
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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

  const services = [
    {
      title: "IT Management Services",
      href: "#services",
      description: "Professional IT management solutions for your business"
    },
    {
      title: "Data Tracking Security",
      href: "#services",
      description: "Secure data tracking and protection solutions"
    },
    {
      title: "Website Development",
      href: "#services",
      description: "Custom website design and development services"
    },
    {
      title: "CRM Solutions and Design",
      href: "#services",
      description: "Customer relationship management solutions"
    },
    {
      title: "UI/UX Design Services",
      href: "#services",
      description: "User interface and experience design services"
    },
    {
      title: "Technology Solution",
      href: "#services",
      description: "Innovative technology solutions for businesses"
    },
    {
      title: "Software Development",
      href: "#services",
      description: "Custom software development for various industries"
    }
  ];
  
  const company = [
    {
      title: "About Us",
      href: "#about",
      description: "Learn more about our company and mission"
    },
    {
      title: "Our Pricing",
      href: "#pricing",
      description: "Streamlined pricing options for our services"
    },
    {
      title: "Portfolio",
      href: "#portfolio",
      description: "Explore our complete project portfolio"
    },
    {
      title: "Portfolio Details",
      href: "#portfolio",
      description: "Detailed view of our work and case studies"
    },
    {
      title: "Team",
      href: "#team",
      description: "Meet our friendly and professional team"
    },
    {
      title: "Team Details",
      href: "#team",
      description: "Learn more about our team members"
    },
    {
      title: "Services",
      href: "#services",
      description: "Explore all our service offerings"
    },
    {
      title: "Service Details",
      href: "#services",
      description: "Detailed information about our services"
    }
  ];

  const ListItem = ({
    title,
    href,
    description,
  }: {
    title: string;
    href: string;
    description: string;
  }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            href={href}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  };

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
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Home
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service, index) => (
                        <ListItem
                          key={`service-${index}`}
                          title={service.title}
                          href={service.href}
                          description={service.description}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {company.map((item, index) => (
                        <ListItem
                          key={`company-${index}`}
                          title={item.title}
                          href={item.href}
                          description={item.description}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#portfolio" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Portfolio
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#testimonials" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Testimonials
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#contact" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

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
                Company
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
