
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavbarListItemProps {
  title: string;
  href: string;
  description: string;
  icon?: React.ReactNode;
}

const NavbarListItem = ({
  title,
  href,
  description,
  icon,
}: NavbarListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-primary flex-shrink-0">{icon}</span>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavbarListItem;
