import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const featuredTestimonials = [
    {
      id: 1,
      name: "Lisa Rodriguez",
      position: "Marketing Director, Global Ventures",
      content:
        "The team at E&Z Tech Solution exceeded our expectations in every way. They took the time to understand our brand and delivered a website that perfectly captures our vision. The site has significantly improved our online presence and customer engagement.",
      avatar: "LR",
      color: "bg-indigo-500",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex Johnson",
      position: "CEO, Tech Innovators",
      content:
        "Working with E&Z Tech Solution transformed our business completely. Their web development team created a stunning website that has significantly improved our conversion rates. The ongoing support has been exceptional, and we couldn't be happier with the results.",
      avatar: "AJ",
      color: "bg-blue-500",
      rating: 5,
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, Bright Ideas",
      thumbnail:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=500",
      videoUrl: "#",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, Future Systems",
      thumbnail:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80&w=500",
      videoUrl: "#",
    },
  ];

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
              <span className="text-sm font-medium text-white">TESTIMONIALS</span>
              <span className="w-2 h-2 ml-2 bg-white rounded-full"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Don't take our word for it. See what our clients have to say about their experience working with us.
            </p>
          </div>
        </motion.div>

        {/* Featured Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <span className="text-sm font-medium text-primary">FEATURED STORIES</span>
                <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Read what our clients have to say about their experience working with us.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <div
                        className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-white text-xl font-bold mr-4`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-300 italic text-lg mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  {/* <a href="#" className="text-primary font-medium hover:underline">
                    Read Full Story →
                  </a> */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Video Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gray-50 dark:bg-gray-900/50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <span className="text-sm font-medium text-primary">VIDEO TESTIMONIALS</span>
                <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Clients</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Watch these video testimonials to learn more about how we've helped our clients succeed.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={`${video.name} video thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg">{video.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {video.position}
                    </p>
                    <a
                      href={video.videoUrl}
                      className="inline-block font-medium text-primary hover:underline"
                    >
                      Watch Testimonial →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* All Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-xl p-10 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience Our Service?
              </h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Join our satisfied clients and discover how we can help your business succeed in the digital landscape.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">
                Get Started Today
              </Button>
            </div>
          </div>
        </motion.section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;