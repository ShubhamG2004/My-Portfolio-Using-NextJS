export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto"> {/* Increased from max-w-5xl to max-w-6xl */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-yellow-600">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Increased width content box with adjusted padding */}
        <div className="text-xl leading-relaxed text-gray-700 space-y-6 bg-white p-12 rounded-xl shadow-sm border border-gray-100 w-full"> {/* Added w-full and increased padding */}
          <p>I'm a <strong className="text-gray-900">Full-Stack Developer</strong> and Electronics & Computer Engineering student at PES Modern College, blending academic knowledge with hands-on development expertise across web and mobile platforms.</p>

          <p>With a diploma in Information Technology and ongoing B.E. studies, I specialize in building <strong className="text-yellow-600">scalable web applications</strong> (MERN stack) and <strong className="text-yellow-600">high-performance mobile apps</strong> (Flutter), delivering solutions that exceed user expectations.</p>
          
          <p>My technical mastery spans <strong>JavaScript/TypeScript, Java, C++</strong>, and modern frameworks, with advanced <strong>problem-solving</strong> skills honed through competitive programming and Data Structures & Algorithms.</p>
          
          <p>As a <strong>award-winning developer</strong> (Techno-Enhance Web-Design champion), I architect solutions that marry technical robustness with intuitive UX/UI design principles.</p>
          
          <p>I'm deeply passionate about <strong>emerging technologies</strong> (AI/ML, Blockchain, Web) and thrive in collaborative, innovative environments that push technological boundaries.</p>
        </div>
      </div>
    </section>
  );
}