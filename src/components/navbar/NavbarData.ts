
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
    title: "E-commerce Solutions",
    href: "/services#ecommerce",
    description: "Online store development and optimization"
  },
  {
    title: "Digital Marketing",
    href: "/services#digital-marketing",
    description: "SEO, PPC, social media, and content marketing"
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
  {
    title: "Careers",
    href: "/careers",
    description: "Join our growing team of experts"
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    description: "Explore our completed projects"
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "What our clients say about our work"
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with our team"
  }
];

// Fields data
export const fields: MenuItem[] = [
  {
    title: "Healthcare",
    href: "/fields/healthcare",
    description: "Digital solutions for healthcare providers"
  },
  {
    title: "Banks",
    href: "/fields/banks",
    description: "Secure banking and financial technologies"
  },
  {
    title: "Logistics",
    href: "/fields/logistics",
    description: "Supply chain and logistics management systems"
  },
  {
    title: "Supermarkets",
    href: "/fields/supermarkets",
    description: "Retail management and inventory solutions"
  },
  {
    title: "Industries",
    href: "/fields/industries",
    description: "Industrial automation and management systems"
  },
  {
    title: "Hotels",
    href: "/fields/hotels",
    description: "Hospitality management solutions"
  },
  {
    title: "Fintech",
    href: "/fields/fintech",
    description: "Financial technology innovations"
  }
];

// Products data
export const products: MenuItem[] = [
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Success stories from our clients"
  },
  {
    title: "Our Pricing",
    href: "/pricing",
    description: "Transparent and competitive pricing models"
  },
  {
    title: "Features",
    href: "/features",
    description: "Explore our product capabilities"
  },
  {
    title: "Overview",
    href: "/overview",
    description: "General overview of our solutions"
  },
  {
    title: "New Releases",
    href: "/releases",
    description: "Latest updates and new features"
  },
  {
    title: "Solutions",
    href: "/solutions",
    description: "Business solutions for various industries"
  }
];

// Featured Case Study
export const featuredCase = {
  title: "Astarte Medical",
  category: "Computer Software",
  href: "/case-studies/astarte",
  image: "/placeholder.svg",
  ctaText: "Read Case"
};
