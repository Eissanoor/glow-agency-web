
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Portfolio = () => {
  // Filter categories
  const categories = ["All", "Web Development", "Mobile App", "UI/UX Design", "E-commerce", "Software Solution", "Artificial Intelligence"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Finance Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "FinTech Inc.",
      description: "Interactive financial dashboard with real-time data visualization and reporting features.",
    },
    {
      id: 2,
      title: "Health App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1581553672347-95d9444c0d2c?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "Wanderlust Travel",
      description: "User-friendly interface design for a travel booking platform with intuitive navigation and booking flow.",
    },
    {
      id: 5,
      title: "Real Estate Marketplace",
      category: "Web Development",
      image: "https://plus.unsplash.com/premium_photo-1716603741742-db515ca0a8e6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "PropertyPro",
      description: "Web-based real estate marketplace with property listings, advanced search, and agent connections.",
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "Quick Bites",
      description: "Mobile application for food ordering and delivery with real-time tracking and payment processing.",
    },
    {
      id: 7,
      title: "Gtrack Project",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=500",
      client: "Quick Bites",
      description: "Gtrack is a web application for tracking and managing vehicles, assets, and equipment. It provides real-time location updates, status monitoring, and reporting features.",
      link: 'https://gtrack.online/'
    },
    {
      id: 8,
      title: "GS1 Project",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=500",
      client: "Quick Bites",
      description: "GS1 is a web application for tracking and managing vehicles, assets, and equipment. It provides real-time location updates, status monitoring, and reporting features.",
    link:'https://gs1ksa.org/'
    },
    {
      id: 9,
      title: "Facility Management System (FMS)",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1624927637280-f033784c1279?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "Quick Bites",
      description: "Facility Management System (FMS) is a web application for tracking and managing vehicles, assets, and equipment. It provides real-time location updates, status monitoring, and reporting features.",
     link: "http://fms.gtrack.online/"
    },
    {
      id: 10,
      title: "Queue Management System (QMS)",
      category: "Software Solution",
      image: "https://plus.unsplash.com/premium_photo-1682141253489-66b926cb7559?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "Quick Bites",
      description: "Queue Management System (QMS) is a web application for tracking and managing vehicles, assets, and equipment. It provides real-time location updates, status monitoring, and reporting features.",
    link:"http://qms.groute.online/"
    },
    {
      id: 11,
      title: "POS System",
      category: "Software Solution",
      image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?auto=format&fit=crop&q=80&w=500",
      client: "Quick Bites",
      description: "POS System is a web application for tracking and managing vehicles, assets, and equipment. It provides real-time location updates, status monitoring, and reporting features.",
    link:"https://gposv2.gtrack.online/"
    },
    {
      id: 12,
      title: "Groute Project",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1634743556192-d19f0c69ff3a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "Quick Bites",
      description: "Groute Project is a web application for tracking and managing vehicles, assets, and equipment. It provides real-time location updates, status monitoring, and reporting features.",

    },
    {
      id: 13,
      title: "Performance AI Agent (PMS)",
      category: "Artificial Intelligence",
      image: "https://plus.unsplash.com/premium_photo-1725907643701-9ba38affe7bb?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "Quick Bites",
      description: "Performance AI Agent (PMS) is a web application for tracking and managing vehicles, assets, and equipment. It provides real-time location updates, status monitoring, and reporting features.",
    },
    // New Web Development Project
    {
      id: 14,
      title: "Enterprise CRM Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "Enterprise Solutions Ltd",
      description: "Comprehensive customer relationship management platform with advanced analytics, lead tracking, and sales automation features.",
    },
    // New UI/UX Design Projects
    {
      id: 15,
      title: "Banking App Interface",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "SecureBank",
      description: "Modern and secure banking application interface with intuitive navigation, transaction history, and enhanced security features.",
    },
    {
      id: 16,
      title: "Fitness App Design",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "FitLife Co",
      description: "Engaging fitness application design with workout tracking, progress visualization, and social features to motivate users.",
    },
    // New E-commerce Projects
    {
      id: 17,
      title: "Fashion Marketplace",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "StyleHub",
      description: "Premium fashion e-commerce platform with AR try-on features, personalized recommendations, and seamless checkout experience.",
    },
    {
      id: 18,
      title: "Electronics Store",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "TechMart",
      description: "Complete electronics e-commerce solution with detailed product comparisons, warranty tracking, and technical support integration.",
    },
    // New Software Solution Project
    {
      id: 19,
      title: "Inventory Management System",
      category: "Software Solution",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "LogiTech Pro",
      description: "Advanced inventory management software with real-time stock tracking, automated reordering, and comprehensive reporting capabilities.",
    },
    {
      id: 20,
      title: "Pakardi",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1515169067865-5387e7c41a50?auto=format&fit=crop&w=500&q=80", // E-commerce Unsplash image
      client: "Pakardi",
      description: "Pakardi is a modern e-commerce platform offering a wide range of products with a seamless shopping experience.",
      link: "http://pakardi.com/"
    },
    {
      id: 21,
      title: "Podmap",
      category: "UI/UX Design",
      image: "https://codecue.solutions/wp-content/uploads/2023/02/571471159511235.Y3JvcCwzNDA5LDI2NjcsMjk1LDA.webp",
      client: "Podmap",
      description: "Podmap is a modern UI/UX project focused on intuitive mapping and navigation experiences.",
      link: "https://podmaps.com/"
    },
    {
      id: 22,
      title: "GST",
      category: "Web Development", // Changed to Web Development
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80", // Example Unsplash image
      client: "GSTSA",
      description: "Official web portal for GST. Utilize our GST Global Standards Barcode to accurately identify your products. Trusted by over 2 million companies worldwide.",
      link: "https://gstsa1.org/"
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
                  className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeCategory === category
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
                      className="w-full h-full object-cover transition-transform hover:scale-105"
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
                        href={project.link ? project.link : `/portfolio/${project.id}`}
                        className="inline-block font-medium text-primary hover:underline"
                        target={project.link ? "_blank" : undefined}
                        rel={project.link ? "noopener noreferrer" : undefined}
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
