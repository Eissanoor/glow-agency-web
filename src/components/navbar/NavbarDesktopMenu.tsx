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
import { Link, useLocation } from "react-router-dom"; // Import useLocation

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
  const location = useLocation(); // Get the current route

  const isActive = (path: string) => location.pathname === path; // Check if the route is active

  return (
    <div className="hidden md:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              to="/"
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                isActive("/") ? " text-md underline" : ""
              )}
            >
              Home
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="/services"
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                isActive("/services") ? "  text-md underline" : ""
              )}
            >
              Services
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover: focus: data-[state=open]:">
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[700px] gap-3 p-6 md:grid-cols-2 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
                {company.map((item, index) => (
                  <NavbarListItem
                    key={`company-${index}`}
                    title={item.title}
                    href={item.href}
                    description={item.description}
                    isActive={isActive(item.href)} // Pass isActive status as a prop
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="/portfolio"
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                isActive("/portfolio") ? " text-md underline" : ""
              )}
            >
              Portfolio
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="/testimonials"
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                isActive("/testimonials") ? " text-md underline" : ""
              )}
            >
              Testimonials
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="/contact"
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent",
                isActive("/contact") ? " text-md underline" : ""
              )}
            >
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavbarDesktopMenu;
