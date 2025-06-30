export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 py-3 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Shubham Gavade</h1>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-yellow-400 transition-colors duration-300 font-medium">About</a>
        <a href="#projects" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Projects</a>
        <a href="#skills" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Skills</a>
        <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</a>
      </div>
      
      {/* Mobile Navigation Button */}
      <button className="md:hidden focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Navigation Menu (hidden by default) */}
      <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 flex flex-col items-center space-y-4 py-4 hidden">
        <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a>
        <a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">Projects</a>
        <a href="#skills" className="hover:text-yellow-400 transition-colors duration-300">Skills</a>
        <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
      </div>
    </nav>
  )
}