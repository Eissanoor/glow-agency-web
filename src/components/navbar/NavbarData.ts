
// Define menu item data types and constants
export interface MenuItem {
  title: string;
  href: string;
  description: string;
}

export const services: MenuItem[] = [
  {
    title: "Web Development",
    href: "/services#web-development",
    description: "Custom website development with responsive design"
  },
  {
    title: "Mobile App Development",
    href: "/services#mobile-development",
    description: "Native and cross-platform mobile applications"
  },
  {
    title: "UI/UX Design",
    href: "/services#ui-ux-design",
    description: "User-centered design for digital products"
  },
  {
    title: "Networking Solutions",
    href: "/services#networking-solutions",
    description: "Enterprise-grade networking infrastructure setup and maintenance for optimal connectivity."
  },
  {
    title: "IT Consulting",
    href: "/services#it-consulting",
    description: "Expert technology guidance for your business"
  },
  {
    title: "Custom Software Development",
    href: "/services#software-development",
    description: "Tailored software solutions for specific needs"
  }
];

export const company: MenuItem[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about our mission, vision, and values"
  },
  {
    title: "Our Team",
    href: "/team",
    description: "Meet our talented professionals"
  },
  // {
  //   title: "Careers",
  //   href: "/careers",
  //   description: "Join our growing team of experts"
  // },
  // {
  //   title: "Portfolio",
  //   href: "/portfolio",
  //   description: "Explore our completed projects"
  // },
  // {
  //   title: "Testimonials",
  //   href: "/testimonials",
  //   description: "What our clients say about our work"
  // },
  // {
  //   title: "Contact Us",
  //   href: "/contact",
  //   description: "Get in touch with our team"
  // }
];
