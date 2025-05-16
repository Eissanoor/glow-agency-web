
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      text: "+880-1680-6361-89",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: "techco@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Sunshine Business Park",
    },
  ];

  const steps = [
    {
      number: "01",
      text: "Share your requirements",
    },
    {
      number: "02",
      text: "Discuss them with our experts",
    },
    {
      number: "03",
      text: "Get a free quote",
    },
    {
      number: "04",
      text: "Start the project",
    },
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-md overflow-hidden">
            <CardContent className="p-8">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <span className="text-sm font-medium text-primary">YOU ARE HERE</span>
                <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's Start</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Initiating Your Journey to Success and Growth.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white mr-4">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 mt-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full border border-primary text-primary text-sm mr-4">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-200">{step.text}</p>
                      {index < steps.length - 1 && (
                        <div className="h-6 border-l border-dashed border-gray-300 dark:border-gray-600 ml-4 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Column */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-md overflow-hidden">
            <CardContent className="p-8">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <span className="text-sm font-medium text-primary">LET'S CONNECT!</span>
                <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-6">
                Send us a message, and we'll promptly discuss your project with you.
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-gray-50 dark:bg-gray-700"
                      {...register("name", { required: "Name is required" })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-50 dark:bg-gray-700"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone No."
                      className="bg-gray-50 dark:bg-gray-700"
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Company Name"
                      className="bg-gray-50 dark:bg-gray-700"
                      {...register("company")}
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    placeholder="How can we help you?"
                    className="bg-gray-50 dark:bg-gray-700 min-h-[120px]"
                    {...register("message", { required: "Message is required" })}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-auto"
                >
                  {isSubmitting ? "Sending..." : (
                    <span className="flex items-center">
                      SEND REQUEST <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
