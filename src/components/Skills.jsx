import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

export default function Skills() {
  const [floatingElements, setFloatingElements] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

  useEffect(() => {
    const floats = [...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 15,
      rotate: Math.random() * 360,
      size: Math.random() * 30 + 15,
      symbol: ['</>', '{ }', '() =>', '[]', '{}', '<div>', 'fn()', 'class', 'import', 'const', 'let', 'var', '&&', '||', '=>'][Math.floor(Math.random() * 15)]
    }));
    setFloatingElements(floats);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['JavaScript', 'Dart', 'Java', 'Python', 'C++', 'PHP'],
      color: 'from-purple-500 via-purple-600 to-indigo-700',
      glowColor: 'shadow-purple-500/25',
      textColor: 'text-purple-600'
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: ['MERN Stack', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-blue-500 via-blue-600 to-cyan-700',
      glowColor: 'shadow-blue-500/25',
      textColor: 'text-blue-600'
    },
    {
      title: 'Databases & Backend',
      icon: '🗃️',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'SOAP APIs', 'RESTful APIs'],
      color: 'from-green-500 via-green-600 to-emerald-700',
      glowColor: 'shadow-green-500/25',
      textColor: 'text-green-600'
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker'],
      color: 'from-orange-500 via-orange-600 to-amber-700',
      glowColor: 'shadow-orange-500/25',
      textColor: 'text-orange-600'
    },
    {
      title: 'Core CS Skills',
      icon: '🧠',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Problem Solving'],
      color: 'from-red-500 via-red-600 to-pink-700',
      glowColor: 'shadow-red-500/25',
      textColor: 'text-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      rotateX: 60,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skillVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      y: 20
    },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  const floatingVariants = {
    animate: (custom) => ({
      y: [0, -30, 0],
      x: [0, custom.x, 0],
      rotate: [custom.rotate, custom.rotate + 180, custom.rotate + 360],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: custom.duration,
        delay: custom.delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Dynamic Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </motion.div>

      {/* Animated Floating Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{ opacity: backgroundOpacity }}
      >
        {floatingElements.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-white/20 font-mono font-bold select-none"
            style={{
              top: item.top,
              left: item.left,
              fontSize: `${item.size}px`,
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
            custom={item}
            variants={floatingVariants}
            animate="animate"
          >
            {item.symbol}
          </motion.div>
        ))}
      </motion.div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span 
              className="inline-block text-yellow-400 font-semibold mb-4 tracking-[0.2em] text-sm uppercase relative z-10"
              animate={{
                textShadow: [
                  "0 0 0px #facc15",
                  "0 0 10px #facc15",
                  "0 0 20px #facc15",
                  "0 0 10px #facc15",
                  "0 0 0px #facc15"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚡ Technical Arsenal ⚡
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            My{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% auto"
              }}
            >
              Skills
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-xl rounded-lg"
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </motion.h2>

          <motion.div 
            className="flex justify-center items-center space-x-2 mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"
              animate={{
                width: [0, 120, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.p
            className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting digital experiences with cutting-edge technologies and modern development practices
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              className="relative group perspective-1000"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                scale: 1.02
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              {/* Card Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
                whileHover={{
                  opacity: 0.75,
                  scale: 1.05
                }}
              />

              {/* Main Card */}
              <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full overflow-hidden group-hover:border-slate-600/80 transition-all duration-500">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />
                </div>

                {/* Header */}
                <motion.div 
                  className="flex items-center mb-8"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="text-5xl mr-5 relative"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="relative z-10">{category.icon}</span>
                    <motion.div
                      className={`absolute inset-0 ${category.glowColor} blur-lg rounded-full`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </motion.div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={skillVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/skill"
                    >
                      {/* Skill Tag Glow */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover/skill:opacity-50 blur transition-opacity duration-300`}
                      />
                      
                      {/* Skill Tag */}
                      <motion.span
                        className="relative px-4 py-3 bg-slate-700/80 border border-slate-600/50 text-slate-200 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group-hover/skill:bg-slate-600/80 group-hover/skill:text-white group-hover/skill:border-slate-500/80"
                      >
                        <motion.span 
                          className={`w-2 h-2 rounded-full ${category.textColor.replace('text-', 'bg-')} mr-3 relative`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1
                          }}
                        >
                          <motion.span
                            className={`absolute inset-0 ${category.textColor.replace('text-', 'bg-')} rounded-full blur-sm`}
                            animate={{
                              scale: [1, 2, 1],
                              opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.1
                            }}
                          />
                        </motion.span>
                        {skill}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 ${category.textColor.replace('text-', 'bg-')} rounded-full`}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="flex space-x-2"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}