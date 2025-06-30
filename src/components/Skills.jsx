import { useEffect, useState } from 'react';

export default function Skills() {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const floats = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 15 + 10}s`,
      rotate: `${Math.random() * 360}deg`,
      symbol: ['</>', '{ }', '() =>', '[]', '{}', 'div', 'fn()', 'class', 'import'][Math.floor(Math.random() * 9)]
    }));
    setFloatingElements(floats);
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['JavaScript', 'Dart', 'Java', 'Python', 'C++', 'PHP'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: ['MERN Stack', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Databases & Backend',
      icon: '🗃️',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'SOAP APIs', 'RESTful APIs'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker'],
      color: 'from-yellow-500 to-amber-600'
    },
    {
      title: 'Core CS Skills',
      icon: '🧠',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Problem Solving'],
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none z-0">
        {floatingElements.map((item, i) => (
          <div
            key={i}
            className="absolute text-gray-300 text-xl sm:text-2xl"
            style={{
              top: item.top,
              left: item.left,
              animation: `float ${item.duration} linear infinite`,
              animationDelay: item.delay,
              transform: `rotate(${item.rotate})`
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-yellow-500 font-medium mb-4 tracking-widest text-sm uppercase">
            Technical Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div 
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 h-full">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}
