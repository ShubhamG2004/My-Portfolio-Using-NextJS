import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import projects from '../utils/projects';
import { ExternalLink, Github, Code, Sparkles, Zap, Rocket, Star } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotateX: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 1.2,
    },
  },
};

const techChipVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const staggerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative h-full"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Advanced Glowing backdrop */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Mouse spotlight effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
        }}
      />

      {/* Main card */}
      <motion.div 
        className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl h-full flex flex-col"
        whileHover={{ 
          y: -15,
          scale: 1.02,
          rotateY: 2,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:25px_25px]" />
        </div>

        {/* Category badge */}
        {project.category && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
            className="absolute top-4 left-4 z-20"
          >
            <motion.span 
              className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg border border-white/20"
              whileHover={{ scale: 1.05, rotate: 2 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.8)",
                  "0 0 0px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 mr-1.5" />
              {project.category}
            </motion.span>
          </motion.div>
        )}

        {/* Project Image with advanced effects */}
        <div className="relative h-64 overflow-hidden">
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-500/20 to-pink-500/30 z-10"
            animate={{ opacity: isHovered ? 0.8 : 0.3 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Image */}
          <motion.img
            src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.15 : 1,
              filter: isHovered ? "brightness(1.2) contrast(1.2) saturate(1.1)" : "brightness(0.9) contrast(1.1)",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Advanced floating particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${
                  i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-500' : 'bg-pink-400'
                }`}
                style={{
                  left: `${10 + (i * 8)}%`,
                  top: `${20 + (i % 4) * 20}%`,
                }}
                animate={{
                  y: isHovered ? [0, -30, -60, -30, 0] : 0,
                  x: isHovered ? [0, Math.sin(i) * 10, 0] : 0,
                  opacity: isHovered ? [0, 0.8, 1, 0.8, 0] : 0,
                  scale: isHovered ? [1, 1.5, 2, 1.5, 1] : 1,
                }}
                transition={{
                  duration: 3 + (i * 0.2),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          {/* Action buttons overlay */}
          <motion.div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center space-x-4 z-30"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-xl border border-white/20 hover:from-blue-600 hover:to-purple-700 transition-all"
                whileHover={{ 
                  scale: 1.08, 
                  y: -3,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 30, opacity: 0, scale: 0.8 }}
                animate={{
                  y: isHovered ? 0 : 30,
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2.5 bg-slate-800/90 backdrop-blur-sm text-white rounded-full font-semibold shadow-xl border border-slate-600/50 hover:bg-slate-700 transition-all"
                whileHover={{ 
                  scale: 1.08, 
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 30, opacity: 0, scale: 0.8 }}
                animate={{
                  y: isHovered ? 0 : 30,
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4 flex-1 relative z-10">
          <motion.h3
            className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500"
            animate={{
              color: isHovered ? "#60A5FA" : "#FFFFFF",
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p
            className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300"
            animate={{
              color: isHovered ? "#E2E8F0" : "#CBD5E1",
            }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mt-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {project.tech.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={staggerVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    color: "#60A5FA"
                  }}
                  className="px-3 py-1.5 bg-slate-700/60 border border-slate-600/50 text-slate-300 text-xs rounded-full font-medium cursor-pointer transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
              {project.tech.length > 4 && (
                <motion.span
                  variants={techChipVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 text-xs rounded-full font-medium backdrop-blur-sm"
                >
                  +{project.tech.length - 4}
                </motion.span>
              )}
            </motion.div>
          )}

          {/* Project Stats */}
          <motion.div 
            className="flex items-center justify-between pt-4 border-t border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center space-x-4 text-slate-400 text-xs">
              <motion.div 
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05, color: "#F59E0B" }}
              >
                <Star className="w-3 h-3" />
                <span>Featured</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05, color: "#10B981" }}
              >
                <Code className="w-3 h-3" />
                <span>Modern</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <motion.div
          className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          animate={{
            opacity: isHovered ? 1 : 0.4,
            scaleX: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 2 + 0.5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Mouse-following spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)`
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            }}
            transition={{
              duration: particle.speed * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      {/* Enhanced background elements with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, #1D4ED8 50%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 w-80 h-80 rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, #7C3AED 50%, transparent 70%)"
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-12"
          style={{
            background: "radial-gradient(circle, #EC4899 0%, #BE185D 50%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'bg-blue-400/20 w-2 h-2' :
              i % 4 === 1 ? 'bg-purple-500/20 w-3 h-3' :
              i % 4 === 2 ? 'bg-pink-400/20 w-1.5 h-1.5' :
              'bg-cyan-400/20 w-2.5 h-2.5'
            }`}
            style={{
              left: `${5 + (i * 6)}%`,
              top: `${10 + (i % 5) * 18}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div style={{ y: textY }} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="relative inline-block mb-8"
          >
            <motion.span
              className="inline-block text-blue-400 font-bold text-sm tracking-[0.3em] uppercase relative"
              animate={{
                textShadow: [
                  "0 0 0px #60A5FA",
                  "0 0 20px #60A5FA",
                  "0 0 0px #60A5FA"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Rocket className="inline w-4 h-4 mr-2" />
              Portfolio
            </motion.span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Featured{" "}
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Projects
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-full blur-sm"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.8, type: "spring" }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover my latest work showcasing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
              modern technologies
            </span>
            {" "}and innovative solutions
          </motion.p>
          
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.6 }}
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
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
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
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}