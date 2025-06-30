import { motion } from 'framer-motion';
import projects from '../utils/projects';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-100 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-48 h-48 rounded-full bg-yellow-100 opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block text-yellow-500 font-medium mb-4 tracking-wider relative"
          >
            <span className="relative z-10 px-2 bg-gray-50">MY WORK</span>
            <span className="absolute left-1/2 top-1/2 w-16 h-px bg-gray-300 transform -translate-x-1/2 -translate-y-1/2"></span>
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-yellow-600 relative inline-block">
              <span className="relative z-10">Projects</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-100 opacity-60 -z-0"></span>
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full origin-left"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl group"
            >
              {/* Project Image with hover effect */}
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                <img 
                  src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.category && (
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-yellow-100 hover:text-yellow-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Links with improved buttons */}
                <div className="flex space-x-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="flex items-center justify-center flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className={`flex items-center justify-center flex-1 px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:shadow-md ${!project.link ? 'flex-grow' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}