import {
  Mail,
  Linkedin,
  Github,
  Code2,
  GraduationCap,
  ChefHat,
  Download
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-yellow-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-yellow-500 blur-3xl"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 w-full max-w-7xl ml-2 z-10">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left space-y-6 animate-fadeIn">
          <h1 className="text-3xl sm:text-3xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Hi, I'm <span className="text-white">Shubham Gavade</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            Full Stack Developer | MERN Stack | AI Enthusiast
          </p>

          {/* Email and Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 mr-2 text-yellow-500" />
              <a
                href="mailto:gavadeshubham2004@gmail.com"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                gavadeshubham2004@gmail.com
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.linkedin.com/in/shubham-gavade23/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#0A66C2] transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/ShubhamG2004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://leetcode.com/gavadeshubham2004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#FFA116] transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Code2 className="h-5 w-5" />
              </a>
              <a 
                href="https://www.geeksforgeeks.org/user/gavadeshubham2004/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#2F8D46] transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <GraduationCap className="h-5 w-5" />
              </a>
              <a 
                href="https://www.codechef.com/users/shubhamgavade" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#5B4638] transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <ChefHat className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20 flex items-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Hire Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Code2 className="h-5 w-5 mr-2" />
              View Projects
            </a>
            <a
              href="/Resume_Shubham_Gavade.pdf"
              download
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-yellow-500 border border-yellow-500 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center animate-fadeIn mt-10 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl shadow-yellow-500/20 group">
            <img 
              src="/My_Profile.jpeg" 
              alt="Shubham Gavade"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}