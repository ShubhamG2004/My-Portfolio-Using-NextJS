import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, Briefcase, TrendingUp, Code2, Zap } from 'lucide-react';

const experiences = [
  {
    role: "Elliot Systems · Internship",
    company: "Hybrid",
    date: "Jan 2025 – Feb 2025 · 2 months",
    link: "https://drive.google.com/file/d/1hushO5wSZm5KbpmdJv6qx0TccyCAX9z2/view",
    icon: "💼",
    companyType: "Tech Startup",
    skills: ["Next.js", "Tailwind CSS", "MongoDB", "FastAPI"],
    points: [
      "Collaborated on the development of a Financial Management System as part of a cross-functional team.",
      "Utilized Next.js, Tailwind CSS, and MongoDB to design and implement responsive, full-stack web features.",
      "Contributed to the integration of AI agents for smart recommendations and task automation within the system.",
      "Worked on FastAPI-based backend services, optimizing API endpoints for performance and scalability."
    ]
  },
  {
    role: "Full Stack Web Developer | Intern [Remote]",
    company: "Rudraksha Welfare Foundation",
    date: "July 2023 – Sep 2023",
    link: "https://drive.google.com/file/d/1jsGolsbTMYO-2EgamMuyVRUEwDN3DoYi/view",
    icon: "🌟",
    companyType: "Non-Profit",
    skills: ["Bootstrap", "Data Visualization", "CRM", "GoDaddy"],
    points: [
      "Managed website operations on GoDaddy, improving site uptime and performance by 20%.",
      "Planned and deployed responsive front-end interfaces with Bootstrap, enhancing UX by 30%.",
      "Created interactive data visualizations and collaborated with 7+ team members, accelerating CRM testing by 25%."
    ]
  },
  {
    role: "Web Developer | Intern [On-site]",
    company: "Wolfox Services Pvt. Ltd.",
    date: "Jan 2023 – Feb 2023",
    link: "https://drive.google.com/file/d/1-YFQp70SihM1s3hfyMqCblcPctY3GT-a/view",
    icon: "⚡",
    companyType: "Digital Solutions",
    skills: ["CodeIgniter", "MVC", "SEO", "Inventory Management"],
    points: [
      "Developed an Inventory Management System, reducing stock tracking errors by 40%.",
      "Enhanced SEO using MVC architecture & secure CodeIgniter practices, increasing traffic by 15%.",
      "Optimized back-end and server configurations, achieving 99.9% uptime and improving session management by 20%."
    ]
  },
  {
    role: "Web Developer | Trainee [On-site]",
    company: "Resilient Lab Pvt. Ltd.",
    date: "July 2022 – Aug 2022",
    link: "https://drive.google.com/file/d/1TI1lLyNAPNm8TYk9QRO34TuzCT5KNrYb/view",
    icon: "🚀",
    companyType: "Software Agency",
    skills: ["RESTful APIs", "Performance Optimization", "Mobile Responsive"],
    points: [
      "Improved web portal load speed by 18% and mobile responsiveness by 25%.",
      "Built RESTful APIs to enhance system integration and improve communication speed by 30%."
    ]
  }
];

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -120,
    rotateY: -25,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 1.2
    }
  }
};

const skillChipVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  }
};

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const ExperienceCard = ({ experience, index, isLast }) => {
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
      className="relative group"
      style={{ perspective: "1500px" }}
    >
      {/* Enhanced Timeline connector */}
      <div className="hidden lg:flex absolute left-0 top-10 w-16 items-center z-20">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="w-10 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"
        />
        <motion.div
          whileHover={{ 
            scale: 1.4, 
            rotate: 360,
            boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)"
          }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(251, 191, 36, 0.4)",
              "0 0 15px rgba(251, 191, 36, 0.8)",
              "0 0 0px rgba(251, 191, 36, 0.4)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }}
          className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 border-2 border-white shadow-xl z-10"
        />
      </div>

      {/* Main card */}
      <motion.div
        className="lg:ml-16 relative"
        whileHover={{ 
          y: -12,
          rotateY: 3,
          rotateX: -2,
          scale: 1.02,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Advanced Glowing backdrop */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-pink-500/30 rounded-3xl blur-xl"
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1.08 : 1,
            rotate: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Mouse spotlight effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)`
          }}
        />

        {/* Card content */}
        <div className="relative bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:30px_30px]" />
          </div>

          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
            }}
            transition={{ duration: 25, repeat: Infinity }}
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #60A5FA 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Header with icon and company type */}
          <div className="flex items-start justify-between mb-4 relative z-10">
            <div className="flex items-center space-x-3">
              <motion.div
                className="text-2xl relative"
                animate={{
                  rotate: isHovered ? [0, 15, -15, 0] : 0,
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.8 }}
              >
                <span className="relative z-10">{experience.icon}</span>
                <motion.div
                  className="absolute inset-0 bg-yellow-400/30 blur-lg rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <div>
                <motion.h3
                  className="text-lg font-bold text-white mb-1.5 group-hover:text-yellow-400 transition-colors duration-500"
                  animate={{
                    color: isHovered ? "#FBBF24" : "#FFFFFF",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {experience.role}
                </motion.h3>
                <motion.span
                  className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-400/30 text-yellow-300 text-xs font-semibold rounded-full backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.08, 
                    y: -2,
                    backgroundColor: "rgba(251, 191, 36, 0.3)",
                    borderColor: "rgba(251, 191, 36, 0.6)"
                  }}
                >
                  <Briefcase className="w-3 h-3 mr-1.5" />
                  {experience.companyType}
                </motion.span>
              </div>
            </div>
            
            <motion.span
              className="px-4 py-2 bg-gradient-to-r from-slate-700/60 to-slate-600/60 border border-slate-600/50 text-slate-300 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: "rgba(71, 85, 105, 0.8)",
                color: "#E2E8F0"
              }}
            >
              <Calendar className="inline w-3 h-3 mr-1.5" />
              {experience.date}
            </motion.span>
          </div>

          {/* Company link with enhanced styling */}
          <motion.a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mb-4 text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text hover:from-blue-300 hover:to-purple-400 transition-all duration-300 relative z-10"
            whileHover={{ 
              scale: 1.02, 
              x: 4,
              textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
            }}
          >
            {experience.company}
            <motion.div className="ml-2">
              <ExternalLink 
                className="w-4 h-4 text-blue-400"
              />
            </motion.div>
            <motion.div
              className="ml-1"
              animate={{ x: isHovered ? [0, 3, 0] : 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Zap className="w-3 h-3 text-purple-400" />
            </motion.div>
          </motion.a>

          {/* Skills chips */}
          <motion.div
            className="flex flex-wrap gap-2 mb-5 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experience.skills.slice(0, 3).map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                custom={skillIndex}
                variants={staggerVariants}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  color: "#60A5FA",
                  boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)"
                }}
                className="px-3 py-1.5 bg-slate-700/60 border border-slate-600/50 text-slate-300 text-xs rounded-full font-medium cursor-pointer transition-all duration-300 backdrop-blur-sm"
              >
                <Code2 className="inline w-3 h-3 mr-1" />
                {skill}
              </motion.span>
            ))}
            {experience.skills.length > 3 && (
              <motion.span
                variants={skillChipVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(168, 85, 247, 0.3)"
                }}
                className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 text-xs rounded-full font-medium backdrop-blur-sm"
              >
                +{experience.skills.length - 3} more
              </motion.span>
            )}
          </motion.div>

          {/* Achievement points with enhanced animations */}
          <div className="space-y-3 relative z-10">
            {experience.points.slice(0, 3).map((point, pointIndex) => (
              <motion.div
                key={pointIndex}
                custom={pointIndex}
                variants={staggerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-start group/item"
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="flex-shrink-0 mt-1 mr-4"
                  whileHover={{ 
                    rotate: 180,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg border border-green-300/50">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                    >
                      <TrendingUp className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.span
                  className="text-slate-300 text-sm leading-relaxed group-hover/item:text-slate-100 transition-colors duration-300"
                  animate={{
                    color: isHovered ? "#F1F5F9" : "#CBD5E1",
                  }}
                >
                  {point}
                </motion.span>
              </motion.div>
            ))}
            {experience.points.length > 3 && (
              <motion.div 
                className="text-xs text-slate-400 ml-9 flex items-center"
                whileHover={{ color: "#94A3B8" }}
              >
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 animate-pulse" />
                +{experience.points.length - 3} more achievements
              </motion.div>
            )}
          </div>

          {/* Advanced floating decorative elements */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${
                    i % 3 === 0 ? 'w-1 h-1 bg-blue-400' :
                    i % 3 === 1 ? 'w-0.5 h-0.5 bg-purple-500' :
                    'w-1.5 h-1.5 bg-pink-400'
                  }`}
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${20 + (i % 4) * 20}%`,
                  }}
                  animate={{
                    y: [0, -25, -50, -25, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0, 0.8, 1, 0.8, 0],
                    scale: [0.5, 1, 1.5, 1, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2.5 + (i * 0.2),
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const timelineProgress = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, 1]), {
    stiffness: 80,
    damping: 30,
  });

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
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animation"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      {/* Mouse-following spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 500px at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)`
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-yellow-400/15"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            }}
            transition={{
              duration: particle.speed * 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      {/* Enhanced background with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #FBBF24 0%, #F59E0B 30%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/4 -right-24 w-80 h-80 rounded-full opacity-6"
          style={{
            background: "radial-gradient(circle, #F97316 0%, #EA580C 30%, transparent 70%)"
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #EC4899 0%, #BE185D 30%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating code symbols */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-400/20 font-mono text-lg select-none"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i % 4) * 22}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          >
            {['</', '/>', '{}', '[]', '()', '&&', '||', '=>', '==', '!=', '++', '--'][i % 12]}
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            className="relative inline-block mb-8"
          >
            <motion.span
              className="inline-flex items-center text-yellow-400 font-bold text-sm tracking-[0.3em] uppercase"
              animate={{
                textShadow: [
                  "0 0 0px #FBBF24",
                  "0 0 25px #FBBF24",
                  "0 0 0px #FBBF24"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.div
                className="px-5 py-3 bg-slate-800/60 backdrop-blur-xl rounded-full border border-slate-700/50 flex items-center"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(30, 41, 59, 0.8)",
                  borderColor: "rgba(100, 116, 139, 0.8)"
                }}
              >
                <Briefcase className="w-4 h-4 mr-3" />
                CAREER JOURNEY
              </motion.div>
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
          >
            Professional{" "}
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Experience
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-pink-500/30 rounded-full blur-sm"
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
            My journey through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">
              impactful roles
            </span>
            {" "}with measurable results and continuous growth
          </motion.p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1">
            <motion.div
              className="w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-pink-500 rounded-full shadow-lg"
              style={{
                scaleY: timelineProgress,
                transformOrigin: "top",
              }}
            />
            <div className="absolute inset-0 w-full bg-slate-700/50 rounded-full -z-10" />
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-pink-500 rounded-full blur-sm opacity-50"
              style={{
                scaleY: timelineProgress,
                transformOrigin: "top",
              }}
            />
          </div>

          {/* Experience cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom stats section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "4+", label: "Professional Roles", icon: Briefcase, color: "from-yellow-400 to-orange-600" },
              { number: "15+", label: "Technologies Mastered", icon: Code2, color: "from-orange-400 to-red-600" },
              { number: "25%", label: "Average Improvement", icon: TrendingUp, color: "from-pink-400 to-pink-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden group"
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(100, 116, 139, 0.8)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div 
                    className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-2xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}