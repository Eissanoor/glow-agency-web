
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import NavbarListItem from "./NavbarListItem";
import { Link } from "react-router-dom";

interface MenuItemData {
  title: string;
  href: string;
  description: string;
}

interface NavbarDesktopMenuProps {
  services: MenuItemData[];
  company: MenuItemData[];
}

const NavbarDesktopMenu = ({ services, company }: NavbarDesktopMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
              Home
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
                {services.map((service, index) => (
                  <NavbarListItem
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
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
                {company.map((item, index) => (
                  <NavbarListItem
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
            <Link to="/portfolio" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
              Portfolio
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/testimonials" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
              Testimonials
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavbarDesktopMenu;
