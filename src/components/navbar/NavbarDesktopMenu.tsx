
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
import {
  Users,
  FileText,
  Briefcase,
  LayoutGrid,
  FileSearch,
  Star,
} from "lucide-react";

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
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:grid-cols-2 lg:grid-cols-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-[600px]">
                <div>
                  <NavbarListItem
                    key="about-us"
                    title="About Us"
                    href="/about"
                    description="Learn more about GlowTech"
                    icon={<FileText size={18} />}
                  />
                  <NavbarListItem
                    key="team"
                    title="Team"
                    href="/team"
                    description="We are friendly. Join our team"
                    icon={<Users size={18} />}
                  />
                </div>
                <div>
                  <NavbarListItem
                    key="pricing"
                    title="Our Pricing"
                    href="/pricing"
                    description="Streamlined Pricing"
                    icon={<FileText size={18} />}
                  />
                  <NavbarListItem
                    key="team-details"
                    title="Team Details"
                    href="/team-details"
                    description="We are friendly. Join our team"
                    icon={<Users size={18} />}
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-6 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-[800px]">
                <div className="flex-1">
                  <h4 className="text-sm font-medium mb-3 text-gray-500">Services</h4>
                  <ul className="space-y-2">
                    <li><Link to="/services#it-management" className="text-sm hover:text-primary">IT Management Services</Link></li>
                    <li><Link to="/services#data-tracking" className="text-sm hover:text-primary">Data Tracking Security</Link></li>
                    <li><Link to="/services#web-development" className="text-sm hover:text-primary">Website Development</Link></li>
                    <li><Link to="/services#crm" className="text-sm hover:text-primary">CRM Solutions and Design</Link></li>
                    <li><Link to="/services#ui-ux" className="text-sm hover:text-primary">UI/UX Design Services</Link></li>
                    <li><Link to="/services#tech-solution" className="text-sm hover:text-primary">Technology Solution</Link></li>
                    <li><Link to="/services#software" className="text-sm hover:text-primary">Software Development</Link></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium mb-3 text-gray-500">Our Fields</h4>
                  <ul className="space-y-2">
                    <li><Link to="/fields/healthcare" className="text-sm hover:text-primary">Healthcare</Link></li>
                    <li><Link to="/fields/banks" className="text-sm hover:text-primary">Banks</Link></li>
                    <li><Link to="/fields/logistics" className="text-sm hover:text-primary">Logistics</Link></li>
                    <li><Link to="/fields/supermarkets" className="text-sm hover:text-primary">Supermarkets</Link></li>
                    <li><Link to="/fields/industries" className="text-sm hover:text-primary">Industries</Link></li>
                    <li><Link to="/fields/hotels" className="text-sm hover:text-primary">Hotels</Link></li>
                    <li><Link to="/fields/fintech" className="text-sm hover:text-primary">Fintech</Link></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium mb-3 text-gray-500">Product</h4>
                  <ul className="space-y-2">
                    <li><Link to="/case-studies" className="text-sm hover:text-primary">Case Studies</Link></li>
                    <li><Link to="/pricing" className="text-sm hover:text-primary">Our Pricing</Link></li>
                    <li><Link to="/features" className="text-sm hover:text-primary">Features</Link></li>
                    <li><Link to="/overview" className="text-sm hover:text-primary">Overview</Link></li>
                    <li><Link to="/releases" className="text-sm hover:text-primary">New Releases</Link></li>
                    <li><Link to="/solutions" className="text-sm hover:text-primary">Solutions</Link></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-primary text-white p-4 rounded-lg h-full flex flex-col">
                    <div className="mb-4">
                      <span className="text-xs font-medium uppercase">Computer Software</span>
                      <h3 className="text-xl font-bold">Astarte Medical</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <img src="/placeholder.svg" alt="Astarte Medical" className="max-w-full h-auto" />
                    </div>
                    <Link to="/case-studies/astarte" className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-white text-primary rounded-md font-medium text-sm">
                      Read Case
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
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
