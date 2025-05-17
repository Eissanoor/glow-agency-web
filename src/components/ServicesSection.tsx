
import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
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
      title: "Web Development",
      description:
        "Custom website development with responsive design and modern technologies.",
      icon: "🌐",
      className: "web",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      className: "app",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "User-centered design approach to create intuitive and engaging experiences.",
      icon: "🎨",
      className: "uxui",
    },
    // {
    //   id: 4,
    //   title: "Digital Marketing",
    //   description:
    //     "Strategic digital marketing to boost your online presence and growth.",
    //   icon: "📈",
    //   className: "marketing",
    // },
    {
      id: 4,
      title: "IT Consulting",
      description:
        "Expert IT consulting services to help you leverage technology for success.",
      icon: "💼",
      className: "support",
    },
    {
      id: 5,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business needs.",
      icon: "⚙️",
      className: "design",
    },
    {
      id: 6,
      title: "Networking Solutions",
      description:
        "Enterprise-grade networking infrastructure setup and maintenance for optimal connectivity.",
      icon: "🌍",
      className: "networking",
    },
    {
      id: 7,
      title: "SEO Optimization",
      description:
        "Search engine optimization strategies to improve your website's visibility and rankings.",
      icon: "🎯",
      className: "seo",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We offer a comprehensive range of IT and digital services to help your
            business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              data-card-id={service.id}
              className={`service-card hover:shadow-2xl ${service.className} ${getAnimationClass(services.indexOf(service))}`}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              {/* <a
                href="#"
                className="mt-4 inline-block font-medium text-primary hover:underline"
              >
                Learn More →
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
