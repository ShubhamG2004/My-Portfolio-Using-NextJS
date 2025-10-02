import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Trophy, 
  Target, 
  BookOpen,
  Lightbulb,
  Heart,
  Zap,
  Star,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  Brain,
  Rocket,
  Coffee,
  Globe
} from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "About Me";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) / 50,
          y: (e.clientY - centerY) / 50
        });
        x.set((e.clientX - centerX) / 50);
        y.set((e.clientY - centerY) / 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  useEffect(() => {
    const newParticles = [...Array(40)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);
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
      opacity: 0, 
      y: 80,
      scale: 0.8,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const educationData = [
    {
      degree: "B.E. Electronic and Computer Engineering",
      score: "CGPA: 8.67",
      institution: "PES Modern College of Engineering, Pune",
      duration: "Sept 2023 – June 2026",
      location: "Pune, India",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      status: "Current"
    },
    {
      degree: "Diploma in Information Technology",
      score: "Percentage: 87.18%",
      institution: "Government Polytechnic, Kolhapur",
      duration: "Dec 2020 – June 2023",
      location: "Kolhapur, India",
      icon: BookOpen,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      status: "Completed"
    },
    {
      degree: "SSC (10th)",
      score: "Percentage: 94.60%",
      institution: "Shri Shardchandraji High School, Buzavade",
      duration: "March 2020",
      location: "Kolhapur, India",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      status: "Completed"
    }
  ];

  const highlights = [
    {
      icon: Trophy,
      title: "Award Winner",
      description: "Techno-Enhance Web-Design Competition Champion",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "MERN Stack & Flutter Development",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Competitive Programming & DSA",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Tech Enthusiast",
      description: "AI/ML & Emerging Technologies",
      color: "from-green-400 to-blue-500"
    }
  ];

  const personalInfo = [
    { icon: Coffee, label: "Passion", value: "Problem Solving", color: "from-amber-400 to-orange-500" },
    { icon: Globe, label: "Location", value: "Pune, India", color: "from-blue-400 to-purple-500" },
    { icon: Brain, label: "Focus", value: "Full-Stack Development", color: "from-purple-400 to-pink-500" },
    { icon: Rocket, label: "Goal", value: "Innovation & Growth", color: "from-green-400 to-blue-500" }
  ];

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animation"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:6rem_6rem]" />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400/20 rotate-45"
          style={{ rotateZ: rotateX }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Mouse-following spotlight effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(255,255,255,0.06), transparent 40%)`,
          width: "100%",
          height: "100%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
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
              className="inline-block text-yellow-400 font-semibold mb-2 tracking-[0.2em] text-sm uppercase relative z-10"
              animate={{
                textShadow: [
                  "0 0 0px #fbbf24",
                  "0 0 10px #fbbf24",
                  "0 0 20px #fbbf24",
                  "0 0 10px #fbbf24",
                  "0 0 0px #fbbf24"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨ Get to Know Me ✨
            </motion.span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% auto"
              }}
            >
              {displayedText}
              <motion.span
                className="animate-pulse text-white"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
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
            className="flex justify-center items-center space-x-2 mb-6"
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"
              animate={{
                width: [0, 150, 0]
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
            Passionate developer crafting digital experiences with modern technologies and creative solutions
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* About Me Section */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div 
              className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-hidden group hover:border-slate-600/80 transition-all duration-500"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:25px_25px]" />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Header */}
              <motion.div 
                className="flex items-center mb-8 relative z-10"
                whileHover={{ x: 8 }}
              >
                <motion.div
                  className="text-5xl mr-6 relative"
                  whileHover={{ 
                    rotate: [0, -15, 15, -15, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="relative z-10">👋</span>
                  <motion.div
                    className="absolute inset-0 bg-blue-400/30 blur-lg rounded-full"
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
                <motion.h3 
                  className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    About Me
                  </span>
                </motion.h3>
              </motion.div>

              {/* About Content */}
              <div className="space-y-6 text-slate-300 leading-relaxed relative z-10">
                {[
                  "Hi! I'm <strong class='text-blue-400'>Shubham Gavade</strong>, a passionate Full-Stack Developer and Electronics & Computer Engineering student at PES Modern College, blending academic knowledge with hands-on development expertise.",
                  "With a strong foundation from my Diploma in Information Technology, I specialize in building <strong class='text-purple-400'>scalable web applications</strong> using the MERN stack and <strong class='text-green-400'>high-performance mobile apps</strong> with Flutter.",
                  "What sets me apart is my <strong class='text-orange-400'>problem-solving mindset</strong> and genuine enthusiasm for learning new technologies. I believe in writing clean, efficient code and creating user-centered solutions.",
                  "As an <strong class='text-yellow-400'>award-winning developer</strong> (Techno-Enhance Web-Design champion), I'm actively seeking opportunities to contribute my skills and grow as a professional."
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    custom={i}
                    variants={staggerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="hover:text-white transition-colors duration-300"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                ))}
              </div>

              {/* Personal Info Grid */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mt-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.1)"
                    }}
                    className="flex items-center p-3 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${info.color} mr-3`}>
                      <info.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">{info.label}</p>
                      <p className="text-white text-sm font-semibold">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              className="mt-8 relative"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Key Highlights
                </span>
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={staggerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      rotateY: 5
                    }}
                    className="group"
                  >
                    <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 text-center relative overflow-hidden group-hover:border-slate-600/80 transition-all duration-300">
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${highlight.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <motion.div 
                          className={`inline-flex p-3 bg-gradient-to-r ${highlight.color} rounded-xl mb-3 shadow-lg`}
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <highlight.icon className="h-5 w-5 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-white text-sm mb-1">{highlight.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div 
              className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-hidden group hover:border-slate-600/80 transition-all duration-500"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Header */}
              <motion.div 
                className="flex items-center mb-8 relative z-10"
                whileHover={{ x: 8 }}
              >
                <motion.div
                  className="text-5xl mr-6 relative"
                  whileHover={{ 
                    rotate: [0, -15, 15, -15, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="relative z-10">🎓</span>
                  <motion.div
                    className="absolute inset-0 bg-green-400/30 blur-lg rounded-full"
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
                <motion.h3 
                  className="text-3xl font-black text-white group-hover:text-green-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Education Journey
                  </span>
                </motion.h3>
              </motion.div>

              {/* Education Timeline */}
              <div className="relative z-10">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-purple-600"></div>
                
                <div className="space-y-8">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={staggerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="relative pl-16 group/item"
                    >
                      {/* Timeline dot */}
                      <motion.div 
                        className={`absolute left-4 top-4 w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} border-2 border-white shadow-lg z-10`}
                        whileHover={{ scale: 1.5 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 0 10px rgba(59, 130, 246, 0)",
                            "0 0 0 0 rgba(59, 130, 246, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Content */}
                      <div className={`${edu.bgColor} backdrop-blur-sm border ${edu.borderColor} rounded-2xl p-6 group-hover/item:border-opacity-60 transition-all duration-300`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <edu.icon className="h-5 w-5 text-slate-400" />
                            <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-xs font-bold rounded-full`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-white mb-2 group-hover/item:text-blue-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-400 font-semibold mb-2">{edu.score}</p>
                        <p className="text-slate-300 mb-3">{edu.institution}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="flex space-x-3"
            animate={{
              y: [0, -15, 0]
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
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.8)",
                    "0 0 0px rgba(59, 130, 246, 0.5)"
                  ]
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