import projects from '../utils/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-100 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-48 h-48 rounded-full bg-yellow-100 opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-500 font-medium mb-4 tracking-wider">
            MY WORK
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-yellow-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  {project.category && (
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tech Stack - Safeguard against undefined */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Links */}
                <div className="flex space-x-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="flex-1 text-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className={`flex-1 text-center px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-colors duration-300 ${!project.link ? 'flex-grow' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}