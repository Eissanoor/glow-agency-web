import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Global Standard Technology (GST)",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      title: "Health App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1621274282562-9bced5572257?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=500",
    },
  ];

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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary dark:text-blue-400">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center font-medium text-primary hover:text-blue-700 dark:hover:text-blue-300"
                >
                  View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white">View All Projects</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
