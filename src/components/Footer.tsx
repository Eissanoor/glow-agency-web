import { Link } from "react-router-dom";
import logo from "../assets/tech/logo/logo3.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold mb-6 inline-block">
              <img src={logo} alt="" className="w-full h-20 object-cover cursor-pointer" />
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering businesses with innovative digital solutions and
              technology services to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition"
              >
                <span className="sr-only">Facebook</span>
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition"
              >
                <span className="sr-only">Twitter</span>
                t
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition"
              >
                <span className="sr-only">Instagram</span>
                i
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition"
              >
                <span className="sr-only">LinkedIn</span>
                in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  Networking Solutions
                </Link>
              </li>
               <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3">📍</span>
                <span className="text-gray-400">
                  E&Z Tech Soluction Islamabad
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">📞</span>
                <div className="flex flex-col">
                  <span className="text-gray-400">+(92)336 1989322</span>
                <span className="text-gray-400">+(92)349 9386512</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✉️</span>
                <span className="text-gray-400">info@E&ZTechsoluction.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">🕙</span>
                <span className="text-gray-400">
                  Mon-Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} E&Z Tech Soluction. All rights reserved. Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
