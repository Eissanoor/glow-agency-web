import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { motion } from "framer-motion";

const Team = () => {
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
              <span className="text-sm font-medium text-white">TEAM</span>
              <span className="w-2 h-2 ml-2 bg-white rounded-full"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Team Member</h1>
          </div>
        </motion.div>

        {/* Team Intro Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <span className="text-sm font-medium text-primary">OUR LEADERSHIP</span>
                  <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get to Know Our Expert Techco Team</h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get acquainted with the powerhouse behind Techco – our expert team of professionals dedicated to
                  revolutionizing the IT landscape. Combining innovation with expertise, we deliver exceptional
                  solutions tailored to your business needs.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full transition duration-300 flex items-center"
                >
                  TALK TO AN EXPERT
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                  alt="Team member"
                  className="rounded-xl shadow-lg w-full h-[500px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
          <div className="container mx-auto px-4">
          <TeamSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;