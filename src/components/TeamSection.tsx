
const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      avatar: "AJ",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Robert Lee",
      role: "CTO",
      avatar: "RL",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Lead Designer",
      avatar: "JW",
      color: "bg-green-500",
    },
    {
      id: 4,
      name: "David Brown",
      role: "Senior Developer",
      avatar: "DB",
      color: "bg-amber-500",
    },
    {
      id: 5,
      name: "Emma Smith",
      role: "Marketing Specialist",
      avatar: "ES",
      color: "bg-rose-500",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Skilled Experts
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Meet our team of professionals dedicated to delivering exceptional 
            digital solutions and services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700 transition hover:shadow-md"
            >
              <div
                className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}
              >
                {member.avatar}
              </div>
              <h4 className="font-bold text-lg mb-1">{member.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
