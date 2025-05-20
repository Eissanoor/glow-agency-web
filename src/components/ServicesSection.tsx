
import { useRef } from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from './services/ServiceCard';
import { SmallServiceCard } from './services/SmallServiceCard';
import { services } from '@/data/servicesData';
import { useCardAnimation } from '@/hooks/useCardAnimation';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { getAnimationClass } = useCardAnimation();

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Featured Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              animationClass={getAnimationClass(index)} 
            />
          ))}
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {services.slice(3, 6).map((service, index) => (
              <SmallServiceCard 
                key={service.id} 
                service={service} 
                animationClass={getAnimationClass(index + 3)} 
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/services" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground inline-flex h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors">
            MORE SERVICES <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
