import {
  Mail,
  Linkedin,
  Github,
  Code2,
  GraduationCap,
  ChefHat,
  Download,
  Sparkles,
  Code,
  Brain,
  Rocket
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Shubham Gavade";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="particles"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }}
    />
  ));

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animation"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400 rotate-45 float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 border-2 border-blue-400 rounded-full float-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-purple-500 transform rotate-12 float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-0 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen justify-center">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left space-y-8 slide-in-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-400 bounce-in" style={{ animationDelay: '0.5s' }} />
              <span className="text-yellow-400 font-medium bounce-in" style={{ animationDelay: '0.7s' }}>Welcome to my digital space</span>
              <Sparkles className="h-6 w-6 text-yellow-400 bounce-in" style={{ animationDelay: '0.9s' }} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              <span className="block text-white mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>
          
          <div className="space-y-4 bounce-in" style={{ animationDelay: '1s' }}>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-lg sm:text-xl">
              <div className="flex items-center gap-2 glass-morphism px-4 py-2 rounded-full">
                <Code className="h-5 w-5 text-blue-400" />
                <span className="text-gray-200">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 glass-morphism px-4 py-2 rounded-full">
                <Rocket className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">MERN Stack</span>
              </div>
              <div className="flex items-center gap-2 glass-morphism px-4 py-2 rounded-full">
                <Brain className="h-5 w-5 text-purple-400" />
                <span className="text-gray-200">AI Enthusiast</span>
              </div>
            </div>
          </div>

          {/* Email and Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8 bounce-in" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center justify-center md:justify-start glass-morphism px-4 py-3 rounded-full">
              <Mail className="h-5 w-5 mr-3 text-yellow-400 pulse-glow" />
              <a
                href="mailto:gavadeshubham2004@gmail.com"
                className="text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium"
              >
                gavadeshubham2004@gmail.com
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.linkedin.com/in/shubham-gavade23/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-gray-300 hover:text-[#0A66C2] transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-xl glass-morphism hover:scale-110 hover:rotate-12"
              >
                <Linkedin className="h-6 w-6 relative z-10" />
                <div className="absolute inset-0 bg-[#0A66C2] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </a>
              <a 
                href="https://github.com/ShubhamG2004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-gray-300 hover:text-white transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-xl glass-morphism hover:scale-110 hover:rotate-12"
              >
                <Github className="h-6 w-6 relative z-10" />
                <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </a>
              <a 
                href="https://leetcode.com/gavadeshubham2004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-gray-300 hover:text-[#FFA116] transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-xl glass-morphism hover:scale-110 hover:rotate-12"
              >
                <Code2 className="h-6 w-6 relative z-10" />
                <div className="absolute inset-0 bg-[#FFA116] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </a>
              <a 
                href="https://www.geeksforgeeks.org/user/gavadeshubham2004/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-gray-300 hover:text-[#2F8D46] transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-xl glass-morphism hover:scale-110 hover:rotate-12"
              >
                <GraduationCap className="h-6 w-6 relative z-10" />
                <div className="absolute inset-0 bg-[#2F8D46] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </a>
              <a 
                href="https://www.codechef.com/users/shubhamgavade" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-gray-300 hover:text-[#5B4638] transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-xl glass-morphism hover:scale-110 hover:rotate-12"
              >
                <ChefHat className="h-6 w-6 relative z-10" />
                <div className="absolute inset-0 bg-[#5B4638] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 bounce-in" style={{ animationDelay: '1.4s' }}>
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail className="h-5 w-5 mr-2 relative z-10" />
              <span className="relative z-10">Hire Me</span>
            </a>
            <a 
              href="#projects" 
              className="group relative px-8 py-4 border-2 border-yellow-500 text-yellow-400 hover:text-gray-900 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <Code2 className="h-5 w-5 mr-2 relative z-10" />
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="/Resume_Shubham_Gavade.pdf"
              download
              className="group relative px-8 py-4 glass-morphism border border-gray-600 text-gray-200 hover:text-yellow-400 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center"
            >
              <Download className="h-5 w-5 mr-2 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center slide-in-right mt-10 md:mt-0">
          <div className="relative group">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border-2 border-blue-400 opacity-50 pulse-glow"></div>
            <div className="absolute -inset-8 rounded-full border border-purple-400 opacity-30 float-animation"></div>
            
            {/* Main image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img 
                  src="/My_Profile.jpeg" 
                  alt="Shubham Gavade"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3" 
                />
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
            
            {/* Floating icons around the image */}
            <div className="absolute top-4 -right-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg float-animation">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full shadow-lg float-animation" style={{ animationDelay: '2s' }}>
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-1/2 -left-8 p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-lg float-animation" style={{ animationDelay: '4s' }}>
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-in" style={{ animationDelay: '2s' }}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}