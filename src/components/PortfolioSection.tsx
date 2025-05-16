
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Finance Dashboard",
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
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Recent Best Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our portfolio of successful projects delivered with excellence
            and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-52 overflow-hidden">
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
                <a
                  href="#"
                  className="mt-4 inline-block font-medium text-primary hover:underline"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button>View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
