
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Tech Innovators",
      content:
        "Working with GlowTech transformed our business completely. Their web development team created a stunning website that has significantly improved our conversion rates.",
      avatar: "JD",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Director, Bright Ideas",
      content:
        "The mobile app developed by GlowTech exceeded all our expectations. The team was professional, responsive, and delivered a top-quality product on time.",
      avatar: "SJ",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "CTO, Future Systems",
      content:
        "Their technical expertise and dedication to quality is unmatched. GlowTech has been our trusted technology partner for over 3 years, and they never disappoint.",
      avatar: "MC",
      color: "bg-green-500",
    },
    {
      id: 4,
      name: "Emily Parker",
      position: "Product Owner, Insight Analytics",
      content:
        "The UX/UI design services provided by GlowTech revolutionized our product. Our user satisfaction scores have improved by 45% since implementation.",
      avatar: "EP",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What clients say
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Don't just take our word for it - hear from some of our satisfied
            clients about their experiences working with GlowTech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white text-lg font-bold mr-4`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
