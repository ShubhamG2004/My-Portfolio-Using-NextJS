export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between">
      <h1 className="text-2xl font-bold">Shubham</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#skills" className="hover:text-yellow-400">Skills</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  )
}