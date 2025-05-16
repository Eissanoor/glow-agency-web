
const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "94+",
      label: "Team Members",
      icon: "👥",
    },
    {
      id: 2,
      value: "300+",
      label: "Projects Completed",
      icon: "📊",
    },
    {
      id: 3,
      value: "3M+",
      label: "Lines of Code",
      icon: "💻",
    },
    {
      id: 4,
      value: "98%",
      label: "Client Satisfaction",
      icon: "⭐",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <span className="text-sm font-medium text-primary">OUR ACHIEVEMENTS</span>
            <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Statistics</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-3xl text-primary">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
