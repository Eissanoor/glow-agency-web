
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Php, 
  Javascript, 
  Postgresql, 
  Swift, 
  Typescript, 
  Python, 
  Java, 
  Ruby, 
  Database, 
  Cloud, 
  Server, 
  Laptop, 
  Code, 
  ReactJs as ReactIcon 
} from "lucide-react";

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("web");

  const techCategories = [
    {
      id: "web",
      name: "Web Platform",
      technologies: [
        { name: "PHP", icon: <Php className="w-12 h-12" /> },
        { name: "JavaScript", icon: <Javascript className="w-12 h-12" /> },
        { name: "TypeScript", icon: <Typescript className="w-12 h-12" /> },
        { name: "React JS", icon: <ReactIcon className="w-12 h-12" /> },
      ],
    },
    {
      id: "databases",
      name: "Databases",
      technologies: [
        { name: "PostgreSQL", icon: <Postgresql className="w-12 h-12" /> },
        { name: "Database", icon: <Database className="w-12 h-12" /> },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      technologies: [
        { name: "Cloud", icon: <Cloud className="w-12 h-12" /> },
        { name: "Server", icon: <Server className="w-12 h-12" /> },
      ],
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      technologies: [
        { name: "Swift", icon: <Swift className="w-12 h-12" /> },
        { name: "Java", icon: <Java className="w-12 h-12" /> },
      ],
    },
    {
      id: "other",
      name: "Other Frameworks",
      technologies: [
        { name: "Python", icon: <Python className="w-12 h-12" /> },
        { name: "Ruby", icon: <Ruby className="w-12 h-12" /> },
        { name: "Laravel", icon: <Code className="w-12 h-12" /> },
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
