
import { useEffect, useRef, useState } from 'react';
import { Brain as BrainIcon, Shield as ShieldCheckIcon, ThumbsUp as ThumbsUpIcon, Target as TargetIcon } from 'lucide-react';
import brand1 from '../assets/tech/brands/brand1.png';
import brand2 from '../assets/tech/brands/brand2.png';
import brand3 from '../assets/tech/brands/brand3.png';
import brand4 from '../assets/tech/brands/brand4.png';
import brand5 from '../assets/tech/brands/brand5.png';
import brand6 from '../assets/tech/brands/brand6.png';
import banner2 from '../assets/tech/banner4.jpg';

const StatsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const brandContainerRef = useRef<HTMLDivElement>(null);

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

  // Brand slider animation
  useEffect(() => {
    const slider = brandContainerRef.current;
    if (!slider) return;

    const brands = slider.querySelectorAll('.brand-item');
    const brandWidth = brands[0] ? (brands[0] as HTMLElement).offsetWidth : 0;
    const gap = 32; // gap between items
    const totalWidth = brands.length * (brandWidth + gap);
    
    const animateBrands = () => {
      if (!slider) return;
      
      const currentScroll = slider.scrollLeft;
      const newPosition = currentScroll + 0.5;
      
      // Reset position when we reach the end
      if (newPosition >= totalWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft = newPosition;
      }
      
      requestAnimationFrame(animateBrands);
    };
    
    const animationId = requestAnimationFrame(animateBrands);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

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
    { id: 1, name: 'TEC', logo: brand1 },
    { id: 2, name: 'PROVIEW', logo: brand2 },
    { id: 3, name: 'A4TECH', logo: brand3 },
    { id: 4, name: 'MOVEX', logo: brand4 },
    { id: 5, name: 'A4TECH', logo: brand5 },
    { id: 6, name: 'radiant', logo: brand6 },
    { id: 7, name: 'MAXHUB', logo: brand3 },
    { id: 8, name: 'IC solutions', logo: brand4 },
    // Duplicate brands for continuous scrolling
    { id: 9, name: 'TEC', logo: brand1 },
    { id: 10, name: 'PROVIEW', logo: brand2 },
    { id: 11, name: 'A4TECH', logo: brand3 },
    { id: 12, name: 'MOVEX', logo: brand4 },
    { id: 13, name: 'A4TECH', logo: brand5 },
    { id: 14, name: 'radiant', logo: brand6 },
    { id: 15, name: 'MAXHUB', logo: brand3 },
    { id: 16, name: 'IC solutions', logo: brand4 },
  ];

  const stats = [
    {
      id: 1,
      value: "10+",
      label: "Years of experience",
      icon: <BrainIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 2,
      value: "20+",
      label: "Success Stories",
      icon: <ShieldCheckIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 3,
      value: "100+",
      label: "Companies Trust Us",
      icon: <ThumbsUpIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 4,
      value: "100%",
      label: "Results Guaranteed",
      icon: <TargetIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900/50 dark:to-gray-900 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      <div className="container mx-auto px-4">
        {/* Brands Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
             <span className="text-sm font-medium text-primary dark:text-blue-400">TRUSTED PARTNERS</span>
             <span className="w-2 h-2 ml-2 bg-primary dark:bg-blue-400 rounded-full"></span>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Brands We Work With</h2>
          
          <div 
            ref={brandContainerRef}
            className="overflow-x-hidden relative whitespace-nowrap py-4"
          >
            <div className="inline-flex gap-8">
              {brands.map((brand) => (
                <div 
                  key={brand.id} 
                  className="brand-item inline-block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ width: '180px', height: '80px' }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-full object-contain dark:filter dark:brightness-90 dark:invert-[0.15]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-12 gap-8">
          <div ref={sectionRef} className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1"
              >
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 inline-block mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
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
          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-xl h-full flex items-center justify-center overflow-hidden relative">
              <img 
                src={banner2} 
                alt="Team members" 
                className="absolute h-full w-full object-cover opacity-90 dark:opacity-70"
              />
              
              <div className="relative z-10 text-center p-8">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
