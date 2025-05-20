
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ServiceItem } from "@/data/servicesData";

interface SmallServiceCardProps {
  service: ServiceItem;
  animationClass: string;
}

export const SmallServiceCard = ({ service, animationClass }: SmallServiceCardProps) => {
  return (
    <Card
      data-card-id={service.id}
      className={`service-card overflow-hidden border-0 rounded-2xl ${service.className} ${animationClass}`}
    >
      <div className={`${service.color} relative p-8 text-white h-full`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-world"></div>
        
        <div className="relative z-10 flex justify-between h-full">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4">
                {typeof service.icon === 'string' ? (
                  <span className="text-3xl">{service.icon}</span>
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
            </div>
            
            <Link to="/services" className="rounded-full bg-white/20 p-3 hover:bg-white/30 transition-colors mt-4 self-start">
              <ArrowRight className="h-5 w-5 text-white" />
            </Link>
          </div>
          
          <div className="flex flex-col items-end justify-end">
            <div className="flex flex-col gap-2 items-end">
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
