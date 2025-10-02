import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import projects from '../utils/projects';

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const techChipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ 
        y: -12,
        rotateY: 5,
        rotateX: -5,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Glowing backdrop */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl"
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main card */}
      <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500">
        {/* Category badge */}
        {project.category && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="absolute top-4 left-4 z-20"
          >
            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" />
              {project.category}
            </span>
          </motion.div>
        )}

        {/* Project Image with advanced effects */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-orange-500/20"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          />
          
          <motion.img
            src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? "brightness(1.1) contrast(1.1)" : "brightness(1) contrast(1)",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Floating particles effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  y: isHovered ? [-20, -40, -20] : 0,
                  opacity: isHovered ? [0, 1, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Action buttons overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-4"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-medium shadow-lg hover:bg-white transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ delay: 0.1 }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white rounded-full font-medium shadow-lg hover:bg-gray-800 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ delay: 0.2 }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Source Code
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <motion.h3
            className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300"
            animate={{
              color: isHovered ? "#D97706" : "#111827",
            }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 text-sm leading-relaxed"
            animate={{
              color: isHovered ? "#4B5563" : "#6B7280",
            }}
          >
            {project.description}
          </motion.p>

          {/* Enhanced Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {project.tech.slice(0, 6).map((tech, i) => (
                <motion.span
                  key={i}
                  variants={techChipVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    backgroundColor: "#FEF3C7",
                    color: "#92400E"
                  }}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium cursor-pointer transition-all duration-200 hover:shadow-md"
                >
                  {tech}
                </motion.span>
              ))}
              {project.tech.length > 6 && (
                <motion.span
                  variants={techChipVariants}
                  className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-xs rounded-full font-medium"
                >
                  +{project.tech.length - 6} more
                </motion.span>
              )}
            </motion.div>
          )}
        </div>

        {/* Bottom gradient line */}
        <motion.div
          className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500"
          animate={{
            opacity: isHovered ? 1 : 0.3,
            scaleX: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)"
      }}
    >
      {/* Enhanced background elements with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #FEF3C7 0%, #FCD34D 50%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 -right-24 w-64 h-64 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #DBEAFE 0%, #3B82F6 50%, transparent 70%)"
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ECFDF5 0%, #10B981 50%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-yellow-400/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          style={{ y: textY }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-6"
          >
            <motion.span
              className="inline-block text-yellow-500 font-bold text-sm tracking-[0.3em] uppercase relative"
              animate={{
                textShadow: [
                  "0 0 0px #FCD34D",
                  "0 0 10px #FCD34D",
                  "0 0 0px #FCD34D"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative z-10 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200">
                ✨ MY PORTFOLIO
              </span>
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Featured{" "}
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Projects
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-300 rounded-full -z-10"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover my latest work showcasing cutting-edge technologies and innovative solutions
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring", stiffness: 50 }}
            className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 mx-auto rounded-full mt-8 origin-left"
          />
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full shadow-lg cursor-pointer"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}