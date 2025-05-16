
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-primary rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated With Our Newsletter
          </h2>
          <p className="text-primary-foreground mb-8">
            Get the latest news, updates, and insights about technology and digital
            transformation.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              required
            />
            <Button variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
