
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Part-time"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-primary text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-foreground/20 mb-4">
              <span className="text-sm font-medium text-white">CAREERS</span>
              <span className="w-2 h-2 ml-2 bg-white rounded-full"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Be part of something extraordinary. Discover exciting career opportunities and grow with us.
            </p>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" 
                  alt="Team collaboration" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <span className="text-sm font-medium text-primary">WHY JOIN US</span>
                  <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow Your Career With Us</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Innovation First</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We're pioneers in technology solutions, always pushing boundaries and embracing new ideas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4h12m-12 0a2 2 0 110-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4h-12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Flexible Work Environment</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Work from anywhere with our remote-first approach, giving you the freedom to do your best work.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Growth Opportunities</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Continuous learning and advancement with mentorship programs and career development paths.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Open Positions Section */}
        <div className="py-16 bg-blue-50 dark:bg-blue-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <span className="text-sm font-medium text-primary">OPEN POSITIONS</span>
                <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Opportunities</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Explore our open positions and find the perfect fit for your skills and passion.
              </p>
            </div>
            
            <div className="space-y-6">
              {openPositions.map(position => (
                <div key={position.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{position.title}</h3>
                      <p className="text-primary">{position.department}</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-4 md:mt-0">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{position.type}</span>
                      </div>
                      <button className="mt-2 md:mt-0 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors text-sm font-medium">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <span className="text-sm font-medium text-primary">BENEFITS</span>
                <span className="w-2 h-2 ml-2 bg-primary rounded-full"></span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                At E&Z Tech Solution, we believe in taking care of our most valuable asset—our people.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Salary</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer industry-leading compensation packages to attract and retain top talent.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Health Benefits</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive health, dental, and vision insurance for you and your family.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Continuous learning with our professional development programs and education stipend.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Work-Life Balance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Flexible work schedule, remote options, and generous paid time off to recharge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
