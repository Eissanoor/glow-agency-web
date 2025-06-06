import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiWordpress,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiGithub,
  SiPostman,
  SiNpm,
  SiFigma,
  SiGooglechrome,
  SiPhp,
  SiBootstrap,
  SiTypescript,
  SiAngular,
  SiWoocommerce,
  SiPython,
  SiMysql,
  SiGraphql,
  SiLaravel,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import Cursorailogo from "../assets/tech/useTechnologies/Cursorai.jpg";
import windsurflogo from "../assets/tech/useTechnologies/windsurf.jpg";

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("web");

  const techCategories = [
    {
      id: "web",
      name: "Web Platform",
      technologies: [
        { name: "JavaScript", icon: <SiJavascript className="w-12 h-12 text-yellow-500" /> },
        {name: "TypeScript", icon: <SiTypescript className="w-12 h-12 text-blue-500" />},
        { name: "React JS", icon: <SiReact className="w-12 h-12 text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12 text-green-600" /> },
        { name: "WordPress", icon: <SiWordpress className="w-12 h-12 text-blue-600" /> },
        { name: "WooCommerce", icon: <SiWoocommerce className="w-20 h-20" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-12 h-12 text-purple-600" /> },
        { name: "AngularJS", icon: <SiAngular className="w-12 h-12 text-red-600" /> },
        { name: "Vue.js", icon: <FaVuejs className="w-12 h-12 text-green-500" /> },
        { name: "Laravel", icon: <SiLaravel className="w-12 h-12 text-red-500" /> },
        { name: "Python", icon: <SiPython className="w-12 h-12 text-yellow-400" /> },
        { name: "HeroUI", icon: <img src={`https://media.licdn.com/dms/image/v2/D4D0BAQFOOZJG95shlg/company-logo_200_200/B4DZU.5LxmG8AI-/0/1740516933102/heroui_logo?e=2147483647&v=beta&t=eK3t9ufFe15S-GtC5SE5P7uO3f4jjbCeeg7-6XN8T4I`} className="w-12 h-12" alt="HeroUI" /> },
        { name: "MUI", icon: <img src={`https://www.remoterocketship.com/images/blog/Material%20UI-icon-for-blog.jpg`} className="w-12 h-12 text-blue-600" /> },
        { name: "shadcn ui", icon: <img src={`https://avatars.githubusercontent.com/u/139895814?v=4`} className="w-12 h-12" alt="shadcn ui" /> },
      ]
    },
    {
      id: "databases",
      name: "Databases",
      technologies: [
        { name: "MySQL", icon: <SiMysql className="w-12 h-12 text-blue-600" /> },
        { name: "MySQL Server", icon: <SiMysql className="w-12 h-12 text-orange-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12 text-blue-400" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-12 h-12 text-pink-600" /> },
        { name: "API", icon: <SiPostman className="w-12 h-12 text-orange-500" /> },
        { name: "PHP", icon: <SiPhp className="w-12 h-12 text-blue-700" /> },
      ],
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="w-12 h-12 text-blue-400" /> },
        { name: "React Native", icon: <SiReact className="w-12 h-12 text-blue-500" /> },
        { name: "Java", icon: <SiNodedotjs className="w-12 h-12 text-red-600" /> },
        { name: "Android", icon: <SiAndroid className="w-12 h-12 text-green-500" /> },
        { name: "iOS", icon: <SiApple className="w-12 h-12 text-gray-800 dark:text-gray-200" /> },
      ],
    },
    {
      id: "tools",
      name: "Development Tools",
      technologies: [
        { name: "VS Code", icon: <BiLogoVisualStudio className="w-12 h-12 text-blue-500" /> },
        { name: "GitHub", icon: <SiGithub className="w-12 h-12 text-gray-800 dark:text-gray-200" /> },
        { name: "Postman", icon: <SiPostman className="w-12 h-12 text-orange-500" /> },
        { name: "npm", icon: <SiNpm className="w-12 h-12 text-red-500" /> },
        { name: "Git", icon: <FaGitAlt className="w-12 h-12 text-purple-500" /> },
        { name: "Figma", icon: <SiFigma className="w-12 h-12 text-purple-500" /> },
        { name: "Chrome DevTools", icon: <SiGooglechrome className="w-12 h-12 text-blue-500" /> },
        { name: "Cursor AI", icon: <img src={Cursorailogo} className="w-12 h-12 text-purple-500" /> },
        { name: "Windsurf", icon: <img src={windsurflogo} className="w-12 h-12 text-green-500" /> },
        { name: "Android Studio", icon: <SiAndroid className="w-12 h-12 text-green-600" /> },
      ],
    },
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <span className="text-sm font-medium text-primary">OUR TECHNOLOGIES</span>
              <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Use <span className="text-primary">Technologies</span>
            </h2>
          </div>
        </motion.div>

        <Tabs defaultValue="web" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-blue-100/50 dark:bg-blue-900/20 p-1 rounded-lg mb-8">
            {techCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800/40"
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {techCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {category.technologies.map((tech, index) => (
                  <Card
                    key={index}
                    className="bg-white dark:bg-slate-800 border-0 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                        {tech.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologiesSection;
