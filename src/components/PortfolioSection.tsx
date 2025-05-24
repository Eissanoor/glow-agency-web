import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";


const PortfolioSection = () => {
  
  const projects = [
    {
      id: 1,
      title: "Global Standard Technology (GST)",
      category: "Web Development",
      image: "https://plus.unsplash.com/premium_photo-1740533182105-0d9446d2e10d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Health App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 4,
      title: "POS System",
      category: "Software Solution",
      image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 5,
      title: "Gtrack Project",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 6,
      title: "GS1 Project",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 7,
      title: "Facility Management System (FMS)",
      category: "Enterprise Software",
      image: "https://images.unsplash.com/photo-1624927637280-f033784c1279?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Queue Management System (QMS)",
      category: "Business Solution",
      image: "https://plus.unsplash.com/premium_photo-1682141253489-66b926cb7559?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const itemsPerSlide = {
    sm: 1,
    md: 2,
    lg: 3
  };

  // Determine items per slide based on screen width
  const [visibleItems, setVisibleItems] = useState(itemsPerSlide.lg);
   
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(itemsPerSlide.sm);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(itemsPerSlide.md);
      } else {
        setVisibleItems(itemsPerSlide.lg);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalSlides = Math.ceil(projects.length / visibleItems);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  const getVisibleProjects = () => {
    const startIdx = (currentIndex * visibleItems) % projects.length;
    const items = [];
    
    for (let i = 0; i < visibleItems; i++) {
      const idx = (startIdx + i) % projects.length;
      items.push(projects[idx]);
    }
    
    return items;
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <span className="text-sm font-medium text-primary dark:text-blue-400">OUR PORTFOLIO</span>
              <span className="w-2 h-2 ml-2 bg-primary dark:bg-blue-400 rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Recent Best Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore our portfolio of successful projects delivered with excellence
              and innovation.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentIndex}
                custom={direction}
                initial={{ 
                  x: direction > 0 ? '50%' : direction < 0 ? '-50%' : 0,
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{ 
                  x: 0,
                  opacity: 1,
                  scale: 1
                }}
                exit={{ 
                  x: direction < 0 ? '50%' : direction > 0 ? '-50%' : 0,
                  opacity: 0,
                  scale: 0.95,
                  zIndex: 0
                }}
                transition={{ 
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className={`grid grid-cols-1 md:grid-cols-${visibleItems === 2 ? '2' : '3'} gap-8`}
              >
                {getVisibleProjects().map((project, index) => (
                  <motion.div
                    key={`${currentIndex}-${project.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="h-52 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ 
                          scale: 1.08,
                          transition: { duration: 0.5 }
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm font-medium text-primary dark:text-blue-400">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center font-medium text-primary hover:text-blue-700 dark:hover:text-blue-300 group"
                      >
                        View Case Study 
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          className="inline-block ml-1"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </motion.button>
          
          <motion.button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </motion.button>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 mx-1 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-300 dark:bg-gray-600 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
           <a href="/portfolio"> <Button className="bg-primary hover:bg-primary/90 text-white">View All Projects</Button></a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
