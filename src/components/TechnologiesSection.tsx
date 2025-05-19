import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  SiAngular,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import Cursorailogo from "../assets/tech/useTechnologies/Cursorai.jpg";
import windsurflogo from "../assets/tech/useTechnologies/windsurf.jpg";
import { FaVuejs } from "react-icons/fa6";




const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("web");

  const techCategories = [
    {
      id: "web",
      name: "Web Platform",
      technologies: [
        { name: "JavaScript", icon: <SiJavascript className="w-12 h-12 text-yellow-500" /> },
        { name: "React JS", icon: <SiReact className="w-12 h-12 text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12 text-green-600" /> },
        { name: "WordPress", icon: <SiWordpress className="w-12 h-12 text-blue-600" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-12 h-12 text-purple-600" /> },
        { name: "AngularJS", icon: <SiAngular className="w-12 h-12 text-red-600" /> },
        { name: "Vue.js", icon: <FaVuejs className="w-12 h-12 text-green-500" /> },
      ],
    },
    {
      id: "databases",
      name: "Databases",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12 text-blue-400" /> },
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <span className="text-sm font-medium text-primary">OUR TECHNOLOGIES</span>
            <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Use <span className="text-primary">Technologies</span>
          </h2>
        </div>

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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {category.technologies.map((tech, index) => (
                  <Card key={index} className="bg-white dark:bg-slate-800 border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                        {tech.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologiesSection;
