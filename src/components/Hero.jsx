export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 w-full max-w-7xl ml-2">
        
        {/* Text Content - wider (2/3) */}
        <div className="md:w-2/3 text-center md:text-left space-y-6 animate-fadeIn">
          <h1 className="text-3xl sm:text-3xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Hi, I'm <span className="text-white">Shubham Gavade</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            Web & Android Developer | MERN Stack | Flutter | Firebase
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20"
            >
              Hire Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Photo Container - larger size */}
        <div className="md:w-1/3 flex justify-center animate-fadeIn mt-10 md:mt-0">
          <div className="relative w-96 h-96 sm:w-[26rem] sm:h-[26rem] lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl shadow-yellow-500/20">
            <img 
              src="/My_Profile.jpeg" 
              alt="Shubham Gavade"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
