import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      degree: "B.E. Electronic and Computer Engineering",
      score: "CGPA: 8.67",
      institution: "PES Modern College of Engineering, Pune",
      duration: "Sept 2023 – June 2026",
      location: "Pune, India",
      icon: "🎓"
    },
    {
      degree: "Diploma in Information Technology",
      score: "Percentage: 87.18%",
      institution: "Government Polytechnic, Kolhapur",
      duration: "Dec 2020 – June 2023",
      location: "Kolhapur, India",
      icon: "📚"
    },
    {
      degree: "SSC (10th)",
      score: "Percentage: 94.60%",
      institution: "Shri Shardchandraji High School, Buzavade",
      duration: "March 2020",
      location: "Kolhapur, India",
      icon: "🏫"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="relative py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-yellow-50 to-transparent opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
             Acad<span className="text-yellow-600 relative">
                        <span className="relative z-10">emics</span>
                        <span className="absolute bottom-0 left-0 w-full h-3  opacity-70 -z-0 transform -rotate-1"></span>
                </span>
          </h2>
          
          <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4 origin-left"
                    />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white transform -translate-x-1/2 -translate-y-1/2 top-8 z-10"></div>
                
                {/* Content */}
                <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'}`}>
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{edu.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {edu.degree} | <span className="text-yellow-600">{edu.score}</span>
                      </h3>
                      <p className="text-gray-600 mt-1">{edu.institution}</p>
                      
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {edu.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}