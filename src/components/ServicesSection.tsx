
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, PenTool } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
const ServicesSection = ({ showAll = false }) => {

  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardElement = entry.target as HTMLElement;
            const cardId = parseInt(cardElement.dataset.cardId || '0');
            setAnimatedCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const getAnimationClass = (index: number) => {
    if (!animatedCards.has(index + 1)) return '';
    return index % 2 === 0 ? 'slide-left' : 'slide-right';
  };

  const services = [
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
    },
    {
      id: 7,
      title: "Mobile App Development",
      description: "Custom mobile app development for iOS and Android platforms with seamless user experiences.",
      tags: ["iOS", "Android"],
      color: "bg-green-500",
      className: "mobile-app-dev",
      icon: "📱",
    },
  ];


  const displayedServices = showAll ? services : services.slice(0, 6);
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Featured Services
            </h2>
          </div>

        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        {/* {services.slice(0, 3).map((service, index) => (
            <Card
              key={service.id}
              data-card-id={service.id}
              className={`service-card overflow-hidden border-0 rounded-2xl ${service.className} ${getAnimationClass(index)}`}
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
          ))} */}

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {displayedServices.map((service, index) => (
            <Card
              key={service.id}
              data-card-id={service.id}
              className={`service-card overflow-hidden border-0 rounded-2xl ${service.className} ${getAnimationClass(index + 1)}`}
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
          ))}
        </div>
        {/* </div> */}

        {!showAll && (
          <div className="flex justify-center mt-12">
            <Link to="/services" className=" items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground inline-flex h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              MORE SERVICES <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
