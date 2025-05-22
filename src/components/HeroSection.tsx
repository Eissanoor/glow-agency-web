import { Button } from "@/components/ui/button";
import bannerImg from "../assets/tech/Barner2.jpg";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-28 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/30 dark:to-transparent -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section with Motion */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <span className="text-sm font-medium text-primary dark:text-blue-400">Innovative Solutions</span>
              <span className="w-2 h-2 ml-2 bg-primary dark:bg-blue-400 rounded-full"></span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Grow your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-200">
                Organic &amp; IT Solution
              </span>{" "}
              Technology
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              We help businesses transform through cutting-edge technology with custom software,
              web development, and advanced IT solutions designed for your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 flex my-auto py-2 rounded font-medium bg-primary hover:bg-primary/90 text-white">
                Get Started <ChevronRight className="ml-1 h-4 w-4 my-auto" />
              </Link>
              <Link to="/about" className="px-8 flex my-auto py-2 rounded font-medium hover:bg-white text-primary border border-primary hover:bg-primary/5">
                Learn More
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs ring-2 ring-white dark:ring-gray-900 shadow-sm">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs ring-2 ring-white dark:ring-gray-900 shadow-sm">
                  KL
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs ring-2 ring-white dark:ring-gray-900 shadow-sm">
                  MN
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs ring-2 ring-white dark:ring-gray-900 shadow-sm">
                  +5
                </div>
              </div>
              <span className="font-medium">Trusted by 100+ clients worldwide</span>
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="md:w-1/2 relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3 scale-105 dark:from-blue-900/40 dark:to-accent/40"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl transform transition-transform hover:-translate-y-1 duration-300">
              <img
                src={bannerImg}
                alt="IT Solutions"
                className="rounded-xl w-full object-cover"
              />

              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-4 shadow-lg text-white dark:shadow-accent/20">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
