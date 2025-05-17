
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Services = () => {
  // Service packages data
  const packages = [
    {
      title: "Basic",
      price: "$499",
      period: "one-time",
      features: [
        "Website Development",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration"
      ],
      popular: false
    },
    {
      title: "Professional",
      price: "$999",
      period: "one-time",
      features: [
        "Everything in Basic +",
        "Custom Design",
        "Content Management System",
        "E-commerce Integration",
        "Performance Optimization",
        "3 Months Support"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "$2,499",
      period: "one-time",
      features: [
        "Everything in Professional +",
        "Custom Functionality",
        "Advanced Security Features",
        "Dedicated Server Setup",
        "API Integration",
        "Database Development",
        "1 Year Priority Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-primary text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-foreground/20 mb-4">
              <span className="text-sm font-medium text-white">SERVICES</span>
              <span className="w-2 h-2 ml-2 bg-white rounded-full"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              We deliver cutting-edge digital solutions to help your business thrive in the modern market.
              Our expertise spans across web, mobile, and enterprise applications.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <ServicesSection />

        {/* Service Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <span className="text-sm font-medium text-primary">OUR PROCESS</span>
                <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our streamlined process ensures we deliver high-quality solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center relative">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We start by understanding your business, goals, and requirements through in-depth consultation.
                </p>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 6L30 0.226497V11.7735L40 6ZM0 7H31V5H0V7Z" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                  </svg>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center relative">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Planning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We create a detailed project plan, timeline, and choose the right technologies for your solution.
                </p>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 6L30 0.226497V11.7735L40 6ZM0 7H31V5H0V7Z" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                  </svg>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center relative">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our experts build your solution with regular updates and opportunities for feedback.
                </p>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 6L30 0.226497V11.7735L40 6ZM0 7H31V5H0V7Z" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                  </svg>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Delivery & Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We deploy your solution and provide ongoing support to ensure your continued success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <span className="text-sm font-medium text-primary">PRICING</span>
                <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Choose the package that best suits your business needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden ${
                    pkg.popular ? 'ring-2 ring-primary shadow-lg' : 'shadow-sm'
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-primary text-white text-center py-2">
                      <span className="text-sm font-medium">MOST POPULAR</span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4">{pkg.title}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-gray-600 dark:text-gray-400"> / {pkg.period}</span>
                    </div>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={pkg.popular ? "w-full bg-primary" : "w-full"}>
                      Get Started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Services;
