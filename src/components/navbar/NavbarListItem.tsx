import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavbarListItemProps {
  title: string;
  href: string;
  description: string;
  isActive: boolean; // Add isActive prop
}

const NavbarListItem = ({ title, href, description, isActive }: NavbarListItemProps) => {
  return (
    <li>
      <Link
        to={href}
        className={cn(
          "block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
          isActive ? " underline" : "text-gray-800 dark:text-gray-200"
        )}
      >
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
      </Link>
    </li>
  );
};

export default NavbarListItem;
