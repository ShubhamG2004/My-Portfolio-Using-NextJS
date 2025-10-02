import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Code, Database, Globe, Settings, Brain } from 'lucide-react';

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

  // Generate floating particles similar to Hero
  useEffect(() => {
    const floats = [...Array(15)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 15,
      rotate: Math.random() * 360,
      size: Math.random() * 20 + 10,
      symbol: ['</>', '{ }', '() =>', '[]', '{}', '<div>', 'fn()', 'class'][Math.floor(Math.random() * 8)]
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
      icon: Code,
      skills: ['JavaScript', 'Dart', 'Java', 'Python', 'C++', 'PHP'],
      color: 'from-yellow-400 via-orange-500 to-pink-500',
      glowColor: 'shadow-yellow-500/25',
      textColor: 'text-yellow-400'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['MERN Stack', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-yellow-400 via-orange-500 to-pink-500',
      glowColor: 'shadow-yellow-500/25',
      textColor: 'text-yellow-400'
    },
    {
      title: 'Databases & Backend',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'SOAP APIs', 'RESTful APIs'],
      color: 'from-yellow-400 via-orange-500 to-pink-500',
      glowColor: 'shadow-yellow-500/25',
      textColor: 'text-yellow-400'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker'],
      color: 'from-yellow-400 via-orange-500 to-pink-500',
      glowColor: 'shadow-yellow-500/25',
      textColor: 'text-yellow-400'
    },
    {
      title: 'Core CS Skills',
      icon: Brain,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Problem Solving'],
      color: 'from-yellow-400 via-orange-500 to-pink-500',
      glowColor: 'shadow-yellow-500/25',
      textColor: 'text-yellow-400'
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
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated gradient background - same as Hero */}
      <div className="absolute inset-0 gradient-animation"></div>
      
      {/* Overlay for better text readability - same as Hero */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      {/* Floating particles - similar to Hero */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="particles"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Geometric shapes - similar to Hero */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400 rotate-45 float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 border-2 border-blue-400 rounded-full float-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-purple-500 transform rotate-12 float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-400 font-medium">⚡ Technical Arsenal ⚡</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white mb-2">My </span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and modern development practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              className="relative group"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
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

              {/* Main Card - glass morphism similar to Hero */}
              <div className="relative glass-morphism border border-gray-600 rounded-2xl p-6 h-full overflow-hidden group-hover:border-gray-500 transition-all duration-500">
                {/* Header */}
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="mr-4 relative"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="h-8 w-8 text-yellow-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </motion.div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={skillVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/skill"
                    >
                      {/* Skill Tag */}
                      <motion.span
                        className="relative px-3 py-2 bg-gray-700/80 border border-gray-600/50 text-gray-200 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group-hover/skill:bg-gray-600/80 group-hover/skill:text-white group-hover/skill:border-gray-500/80"
                      >
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-yellow-400 mr-2 relative"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1
                          }}
                        />
                        {skill}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center mt-12"
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