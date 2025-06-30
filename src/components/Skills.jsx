import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none z-0">
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-300 text-xl sm:text-2xl"
            style={{
              top: item.top,
              left: item.left,
              transform: `rotate(${item.rotate})`
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [item.rotate, `${parseInt(item.rotate) + 5}deg`, item.rotate]
            }}
            transition={{
              duration: parseFloat(item.duration),
              delay: parseFloat(item.delay),
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <motion.span 
            className="inline-block text-yellow-500 font-medium mb-4 tracking-widest text-sm uppercase"
            whileHover={{ scale: 1.05 }}
          >
            Technical Capabilities
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"
            whileHover={{ scaleX: 1.3 }}
            transition={{ type: "spring" }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 h-full">
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-4xl mr-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </motion.div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#fef3c7",
                        color: "#92400e"
                      }}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
                    >
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-yellow-500 mr-2"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}