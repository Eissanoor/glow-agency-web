import { motion } from "framer-motion";

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: "Eissa Noor",
      role: "Full Stack Developer | Artificial Intelligence",
      avatar: "../assets/tech/teams/eissanoor.jpg",
      color: "bg-white",
    },
    {
      id: 2,
      name: "Muhammad Zakirya",
      role: "FullStack Developer",
      avatar: "../assets/tech/teams/zakiryab.jpg",
      color: "bg-white",
    },
    {
      id: 3,
      name: "Hasnain Ahmad",
      role: "Front-End Developer",
      avatar: "../assets/tech/teams/HASNAIN AHMAD.jpg",
      color: "bg-[#EBE9EA]",
    },
    {
      id: 4,
      name: "SADEEQ KHAN",
      role: "FullStack/API Developer",
      avatar: "../assets/tech/teams/SADEEQ KHAN.png",
      color: "bg-amber-500",
    },
    {
      id: 5,
      name: "FAYSAL ZAMAN",
      role: "Mobile Developer (Google Flutter)",
      avatar: "../assets/tech/teams/FAYSAL ZAMAN.png",
      color: "bg-white",
    },
    {
      id: 6,
      name: "WASIM ZAMAN",
      role: "Full Stack Mobile Developer (Flutter & Node.js)",
      avatar: "../assets/tech/teams/WASIM ZAMAN.png",
      color: "bg-white",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Skilled Experts
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Meet our team of professionals dedicated to delivering exceptional
              digital solutions and services.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-xl border border-gray-100 dark:border-gray-700 transition hover:shadow-md"
            >
              <div
                className={`w-36 h-36 ${member.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}
              >
                {member.avatar.includes(".") ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full rounded-full object-contain"
                  />
                ) : member.avatar ? (
                  <span>{member.avatar}</span>
                ) : (
                  <span>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </span>
                )}
              </div>
              <h4 className="font-bold text-lg mb-1">{member.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;