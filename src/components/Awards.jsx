import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Awards() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

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

  const awards = [
    {
      title: "Winner",
      description: "Finserve: Where Tech Meets Finance [National Level DSA Hackathon]",
      certLink: "https://drive.google.com/file/d/1rT8nyL_fghyAavFTi16SeL64Y_o2g-TP/view",
      icon: "🥇",
      date: "2023",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "Winner",
      description: "Techno-Enhance 2k23 [State Level Web Design Competition]",
      certLink: "https://drive.google.com/file/d/1Q7V9r5y7eqe53sLxP8Uh0BZnl9Jmk2oB/view",
      icon: "🏆",
      date: "2023",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Runner-Up",
      description: "AIZureStack (AI + Azure) Hackathon [National Level Competition]",
      certLink: "https://drive.google.com/file/d/181C8X45wKkTuZwM-aov8J1xTQQLthbMe/view",
      icon: "🥈",
      date: "2022",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Runner-Up",
      description: "Ink of Independence [National Level Poster Presentation Competition]",
      certLink: "https://drive.google.com/file/d/1EWquF_6GR1cC5FOHL9LJEbfMgek0XBSP/view",
      icon: "🎨",
      date: "2022",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Runner-Up",
      description: "GeekGenius Challenge [National Level Quiz Competition]",
      certLink: "https://drive.google.com/file/d/1CRfbOaf7noSJixFeANptOLaCF2bbRvzQ/view",
      icon: "🧠",
      date: "2021",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    },
  ];

  const activities = [
    { text: "Student Coordinator", icon: "👥", year: "2023", color: "from-indigo-400 to-purple-500" },
    { text: "Technical Coordinator - Techno-Fest 2k23", icon: "🛠️", year: "2023", color: "from-orange-400 to-red-500" },
    { text: "E-CESA Club Member", icon: "🤝", year: "2022-23", color: "from-green-400 to-blue-500" },
    { text: "IEEE Student Club Participant", icon: "⚡", year: "2021-22", color: "from-yellow-400 to-orange-500" }
  ];

  const openSource = [
    { text: "Contributed to 3+ open source projects via CertifyO platform", icon: "🌐", year: "2023", color: "from-cyan-400 to-blue-500" },
    { text: "Improved bug tracking and documentation", icon: "📝", year: "2022", color: "from-emerald-400 to-green-500" },
    { text: "Developed UI components and fixed API issues", icon: "💻", year: "2022", color: "from-purple-400 to-pink-500" }
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
      opacity: 0, 
      y: 60,
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

  const awardItemVariants = {
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

  return (
    <section 
      ref={containerRef}
      id="achievements" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
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

        {/* Rotating Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-yellow-400/20 rotate-45"
          style={{ rotateZ: rotateX }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border-2 border-orange-400/20"
          style={{ rotateZ: rotateX }}
          transition={{ duration: 20 }}
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
              🏆 Recognition & Impact 🏆
            </motion.span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Awards &{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 relative"
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
              Achievements
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-red-500/20 blur-xl rounded-lg"
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
            Celebrating milestones that showcase technical excellence and community leadership
          </motion.p>
        </motion.div> 
        {/* Main Content Grid */}
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Awards Section */}
          <motion.div
            variants={cardVariants}
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
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:30px_30px]" />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Header */}
              <motion.div 
                className="flex items-center mb-8 relative z-10"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="text-5xl mr-6 relative"
                  whileHover={{ 
                    rotate: [0, -15, 15, -15, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="relative z-10">🏆</span>
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
                <motion.h3 
                  className="text-3xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Competition Awards
                  </span>
                </motion.h3>
              </motion.div>

              {/* Awards List */}
              <div className="space-y-6 relative z-10">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={awardItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ 
                      scale: 1.03,
                      x: 10,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="relative group/item"
                  >
                    {/* Item Glow */}
                    <motion.div
                      className={`absolute -inset-2 bg-gradient-to-r ${award.color} rounded-2xl opacity-0 group-hover/item:opacity-20 blur transition-opacity duration-300`}
                    />

                    {/* Main Content */}
                    <div className={`relative ${award.bgColor} backdrop-blur-sm border ${award.borderColor} rounded-2xl p-6 group-hover/item:border-opacity-60 transition-all duration-300`}>
                      <div className="flex items-start">
                        <motion.div
                          className="flex-shrink-0 mr-6 mt-1"
                          whileHover={{ 
                            scale: 1.3,
                            rotate: 360
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-4xl">{award.icon}</span>
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <motion.span 
                              className={`inline-block px-4 py-2 rounded-xl text-sm font-bold ${
                                award.title === "Winner" 
                                  ? "bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 border border-yellow-400/30" 
                                  : "bg-gradient-to-r from-slate-600/20 to-slate-700/20 text-slate-300 border border-slate-500/30"
                              }`}
                              whileHover={{ 
                                scale: 1.1,
                                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                              }}
                            >
                              {award.title}
                            </motion.span>
                            <motion.span 
                              className="text-sm text-slate-400 font-semibold"
                              whileHover={{ scale: 1.1, color: "#facc15" }}
                            >
                              {award.date}
                            </motion.span>
                          </div>
                          
                          <motion.p 
                            className="text-slate-300 mb-4 leading-relaxed"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {award.description}
                          </motion.p>
                          
                          <motion.a
                            href={award.certLink}
                            className="inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300 transition-colors font-semibold group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View Certificate</span>
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 ml-2" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              whileHover={{ x: 5, y: -2 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </motion.svg>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Activities & Open Source */}
          <div className="space-y-8">
            {/* Open Source Section */}
            <motion.div
              variants={cardVariants}
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
                  className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <motion.div 
                  className="flex items-center mb-8 relative z-10"
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="text-5xl mr-6 relative"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="relative z-10">🌍</span>
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                      Open Source
                    </span>
                  </motion.h3>
                </motion.div>

                <div className="space-y-4 relative z-10">
                  {openSource.map((item, index) => (
                    <motion.div 
                      key={index}
                      custom={index}
                      variants={awardItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ 
                        x: 10,
                        scale: 1.02,
                        backgroundColor: "rgba(34, 197, 94, 0.1)"
                      }}
                      className="flex items-start p-4 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-green-500/30"
                    >
                      <motion.span 
                        className={`text-3xl mr-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.3, rotate: 15 }}
                      >
                        {item.icon}
                      </motion.span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <motion.span 
                            className="text-slate-300 group-hover/item:text-white transition-colors leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {item.text}
                          </motion.span>
                          <motion.span 
                            className="text-sm text-slate-400 font-semibold ml-4"
                            whileHover={{ scale: 1.1, color: "#22c55e" }}
                          >
                            {item.year}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Activities Section */}
            <motion.div
              variants={cardVariants}
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
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <motion.div 
                  className="flex items-center mb-8 relative z-10"
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="text-5xl mr-6 relative"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="relative z-10">🌟</span>
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
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      Leadership
                    </span>
                  </motion.h3>
                </motion.div>

                <div className="space-y-4 relative z-10">
                  {activities.map((item, index) => (
                    <motion.div 
                      key={index}
                      custom={index}
                      variants={awardItemVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ 
                        x: 10,
                        scale: 1.02,
                        backgroundColor: "rgba(59, 130, 246, 0.1)"
                      }}
                      className="flex items-start p-4 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-blue-500/30"
                    >
                      <motion.span 
                        className={`text-3xl mr-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.3, rotate: 15 }}
                      >
                        {item.icon}
                      </motion.span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <motion.span 
                            className="text-slate-300 group-hover/item:text-white transition-colors leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {item.text}
                          </motion.span>
                          <motion.span 
                            className="text-sm text-slate-400 font-semibold ml-4"
                            whileHover={{ scale: 1.1, color: "#3b82f6" }}
                          >
                            {item.year}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
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
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    "0 0 0px rgba(251, 191, 36, 0.5)",
                    "0 0 20px rgba(251, 191, 36, 0.8)",
                    "0 0 0px rgba(251, 191, 36, 0.5)"
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