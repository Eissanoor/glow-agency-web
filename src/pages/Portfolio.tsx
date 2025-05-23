import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Portfolio = () => {
  // Filter categories
  const categories = ["All", "Web Development", "Mobile App", "UI/UX Design", "E-commerce" , "Software Solution", "Artificial Intelligence"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Finance Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
      client: "FinTech Inc.",
      description: "Interactive financial dashboard with real-time data visualization and reporting features.",
    },
    {
      id: 2,
      title: "Health App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1621274282562-9bced5572257?auto=format&fit=crop&q=80&w=500",
      client: "MediCare",
      description: "Mobile application for tracking health metrics, appointments, and medication schedules.",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=500",
      client: "ShopSmart",
      description: "Full-featured e-commerce platform with inventory management, payment processing, and analytics.",
    },
    {
      id: 4,
      title: "Travel Booking Interface",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=500",
      client: "Wanderlust Travel",
      description: "User-friendly interface design for a travel booking platform with intuitive navigation and booking flow.",
    },
    {
      id: 5,
      title: "Real Estate Marketplace",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500",
      client: "PropertyPro",
      description: "Web-based real estate marketplace with property listings, advanced search, and agent connections.",
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=500",
      client: "Quick Bites",
      description: "Mobile application for food ordering and delivery with real-time tracking and payment processing.",
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-primary text-white py-20 text-center"
        >
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-foreground/20 mb-4">
              <span className="text-sm font-medium text-white">PORTFOLIO</span>
              <span className="w-2 h-2 ml-2 bg-white rounded-full"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Explore our portfolio of successful projects delivered with excellence and innovation.
              Each project represents our commitment to quality and client satisfaction.
            </p>
          </div>
        </motion.div>

        {/* Portfolio Filter */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Portfolio Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-transform hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Client: {project.client}
                      </span>
                      <a
                        href={`/portfolio/${project.id}`}
                        className="inline-block font-medium text-primary hover:underline"
                      >
                        View Details →
                      </a>
                    </div>
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
              <Button>Load More Projects</Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-primary text-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="mb-8 text-white/80">
                Let's collaborate to bring your vision to life with our expertise and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  View More Work
                </Button> */}
                <Link to="/contact" className="inline-block bg-white text-primary hover:bg-white/90 px-4 py-2 rounded font-medium text-center">
          Contact Us Now
        </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;