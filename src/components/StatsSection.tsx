import { useEffect, useRef, useState } from 'react';
import { Brain as BrainIcon, Shield as ShieldCheckIcon, ThumbsUp as ThumbsUpIcon, Target as TargetIcon } from 'lucide-react';
import brand1 from '../assets/tech/brands/brand1.png';
import brand2 from '../assets/tech/brands/brand2.png';
import brand3 from '../assets/tech/brands/brand3.png';
import brand4 from '../assets/tech/brands/brand4.png';
import brand5 from '../assets/tech/brands/brand5.png';
import brand6 from '../assets/tech/brands/brand6.png';

const StatsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          startCounting();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);

  const startCounting = () => {
    stats.forEach((stat) => {
      const value = parseInt(stat.value.replace(/[^0-9]/g, ''));
      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCounts(prev => ({
          ...prev,
          [stat.id]: Math.floor(progress * value)
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  const brands = [
    { id: 1, name: 'CH', logo: brand1 },
    { id: 2, name: 'Radiant', logo: brand2 },
    { id: 3, name: 'Maxhub', logo: brand3 },
    { id: 4, name: 'IC Solutions', logo: brand4 },
    { id: 5, name: 'Exotec', logo: brand5 },
    { id: 6, name: 'Proview', logo: brand6 },
    { id: 7, name: 'A4Tech', logo: brand2 },
    { id: 8, name: 'Mov', logo: brand3 },
  ];

  const stats = [
    {
      id: 1,
      value: "25+",
      label: "Years of experience",
      icon: <BrainIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 2,
      value: "280+",
      label: "Success Stories",
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 3,
      value: "6K+",
      label: "Companies Trust Us",
      icon: <ThumbsUpIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 4,
      value: "100%",
      label: "Results Guaranteed",
      icon: <TargetIcon className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Brands Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 mb-4">
            <span className="text-sm font-medium text-pink-500">Brand We</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-1">Work With</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-12">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 object-contain filter dark:brightness-0 dark:invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {isInView ? (
                  counts[stat.id] + stat.value.replace(/[0-9]/g, '')
                ) : (
                  '0' + stat.value.replace(/[0-9]/g, '')
                )}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Stats Card */}
        <div className="mt-8 lg:mt-12">
          <div className="bg-blue-600 rounded-2xl p-8 text-white flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">12000+</h3>
              <p className="text-xl">employees in 30 countries in Europe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
