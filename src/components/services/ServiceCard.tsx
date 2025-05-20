
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ServiceItem } from "@/data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
  animationClass: string;
}

export const ServiceCard = ({ service, animationClass }: ServiceCardProps) => {
  return (
    <Card
      data-card-id={service.id}
      className={`service-card overflow-hidden border-0 rounded-2xl ${service.className} ${animationClass}`}
    >
      <div className={`${service.color} h-full relative p-8 text-white`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-world"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-1 mb-16">
            <div className="mb-4">
              {typeof service.icon === 'string' ? (
                <span className="text-3xl">{service.icon}</span>
              ) : (
                service.icon
              )}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {service.title}
            </h3>
          </div>
          
          <div className="flex items-center justify-between">
            <Link to="/services" className="rounded-full bg-white/20 p-3 hover:bg-white/30 transition-colors">
              <ArrowRight className="h-5 w-5 text-white" />
            </Link>
            
            <div className="flex gap-2">
              {service.tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
