
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Grow your Business with{" "}
              <span className="text-primary">Organic &amp; IT Solution</span>{" "}
              Technology
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              We help businesses transform through technology with custom software, 
              web development, and advanced IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">Get Started</Button>
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">KL</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">MN</div>
              </div>
              <span>Trusted by 400+ clients worldwide</span>
            </div>
          </div>

          <div className="md:w-1/2 relative animate-fade-in">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200"
                alt="IT Solutions"
                className="rounded-xl w-full"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-4 shadow-lg text-white">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
