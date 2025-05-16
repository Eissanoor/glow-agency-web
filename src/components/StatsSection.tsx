
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="mb-4 text-2xl">{stat.icon}</div>
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
