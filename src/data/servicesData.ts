
import { Brain, PenTool } from "lucide-react";
import { ReactNode } from "react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  className: string;
  icon: ReactNode | string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "IT Management Services",
    description: "Expert IT management solutions to optimize your business operations and infrastructure.",
    tags: ["Strategy", "Consultation"],
    color: "bg-blue-600",
    className: "it-management",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Data Tracking and Security",
    description: "Secure data management and tracking solutions to protect your valuable information.",
    tags: ["Management", "Transfer"],
    color: "bg-orange-500",
    className: "data-security",
    icon: "🔐",
  },
  {
    id: 3,
    title: "Website Development",
    description: "Professional website development with responsive design and modern technologies.",
    tags: ["Landing Page", "Plugins"],
    color: "bg-amber-500",
    className: "web-dev",
    icon: "💻",
  },
  {
    id: 4,
    title: "Modern Technology Solution",
    description: "Cutting-edge technology solutions to keep your business ahead of the competition.",
    tags: ["Consultation", "Solution"],
    color: "bg-pink-500",
    className: "tech-solution",
    icon: "⚙️",
  },
  {
    id: 5,
    title: "UI/UX Design Services",
    description: "User-centered design approach to create intuitive and engaging digital experiences.",
    tags: ["Website", "Mobile App"],
    color: "bg-indigo-600",
    className: "uxui",
    icon: <PenTool className="h-8 w-8 text-white" />,
  },
  {
    id: 6,
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions to transform your business with smart automation.",
    tags: ["ML", "Automation"],
    color: "bg-purple-700",
    className: "ai-services",
    icon: <Brain className="h-8 w-8 text-white" />,
  }
];
