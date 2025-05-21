import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How to choose a software development company?",
      answer: (
        <div>
          <p className="mb-3">
            A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of 
            other useful services like software upgrades. Here is an extended list of services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Web and mobile app development
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Software architecture
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                IT consulting and audit
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Legacy system modernization
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Cloud computing
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                QA and testing
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Business analysis
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                IT staffing services
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      question: "What is a custom software development company?",
      answer: (
        <p>
          A custom software development company specializes in creating bespoke software solutions tailored to the specific needs of businesses. Unlike off-the-shelf software, custom solutions are designed to address particular challenges, workflows, and objectives unique to your organization.
        </p>
      ),
    },
    {
      question: "Why do businesses need custom software development?",
      answer: (
        <p>
          Businesses need custom software development when existing commercial solutions don't meet their specific requirements. Custom software provides a competitive advantage through tailored functionality, better integration with existing systems, scalability to grow with your business, and ownership of the solution without ongoing licensing fees.
        </p>
      ),
    },
    {
      question: "What technologies do you use?",
      answer: (
        <p>
          We leverage a wide range of modern technologies including JavaScript frameworks like React, Next.js for frontend development; Node.js for backend solutions; cloud services like Server, and Google Cloud; and mobile development frameworks including React Native and Flutter. We select the most appropriate technology stack based on your project requirements.
        </p>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <span className="text-sm font-medium text-primary">F.A.Q.</span>
              <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a <span className="text-primary">Support?</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800"
                >
                  <AccordionTrigger className="px-6 py-4 flex hover:no-underline text-left">
                    <div className="flex-1 flex items-center text-lg font-medium">
                      <span className="mr-4 text-gray-700 dark:text-gray-300">Q.</span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 pt-0 bg-blue-50 dark:bg-blue-900/20">
                    <div className="flex">
                      <span className="mr-4 text-2xl font-bold text-primary">A.</span>
                      <div className="text-gray-700 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
