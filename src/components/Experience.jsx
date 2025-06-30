import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack Web Developer | Intern [Remote]",
    company: "Rudraksha Welfare Foundation",
    date: "July 2023 – Sep 2023",
    link: "https://drive.google.com/file/d/1jsGolsbTMYO-2EgamMuyVRUEwDN3DoYi/view",
    points: [
      "Managed website operations on GoDaddy, improving site uptime and performance by 20%.",
      "Planned and deployed responsive front-end interfaces with Bootstrap, enhancing UX by 30%.",
      "Created interactive data visualizations and collaborated with 7+ team members, accelerating CRM testing by 25%."
    ]
  },
  {
    role: "Web Developer | Intern [On-site]",
    company: "Wolfox Services Pvt. Ltd.",
    date: "Jan 2023 – Feb 2023",
    link: "https://drive.google.com/file/d/1-YFQp70SihM1s3hfyMqCblcPctY3GT-a/view",
    points: [
      "Developed an Inventory Management System, reducing stock tracking errors by 40%.",
      "Enhanced SEO using MVC architecture & secure CodeIgniter practices, increasing traffic by 15%.",
      "Optimized back-end and server configurations, achieving 99.9% uptime and improving session management by 20%."
    ]
  },
  {
    role: "Web Developer | Trainee [On-site]",
    company: "Resilient Lab Pvt. Ltd.",
    date: "July 2022 – Aug 2022",
    link: "https://drive.google.com/file/d/1TI1lLyNAPNm8TYk9QRO34TuzCT5KNrYb/view",
    points: [
      "Improved web portal load speed by 18% and mobile responsiveness by 25%.",
      "Built RESTful APIs to enhance system integration and improve communication speed by 30%."
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Professional <span className="text-yellow-600 relative">
                <span className="relative z-10">Experience</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-100 opacity-70 -z-0 transform -rotate-1"></span>
                </span>
            </h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4 origin-left"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My journey through impactful roles where I've delivered measurable results
            </p>
        </motion.div>
       
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-400 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-8 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white transform -translate-x-1/2 -translate-y-1/2 top-12 z-10"></div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500 sm:ml-16">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-md font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                    >
                      {exp.company}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 mt-1 mr-2">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}