import { motion } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';

export default function About() {
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

  const leftSlideVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  const rightSlideVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotateY: 15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
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
        type: "spring",
        stiffness: 120,
        damping: 15
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
      status: "Current"
    },
    {
      degree: "Diploma in Information Technology",
      score: "Percentage: 87.18%",
      institution: "Government Polytechnic, Kolhapur",
      duration: "Dec 2020 – June 2023",
      location: "Kolhapur, India",
      icon: BookOpen,
      color: "from-green-500 to-teal-600",
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
      status: "Completed"
    }
  ];

  const highlights = [
    {
      icon: Trophy,
      title: "Award Winner",
      description: "Techno-Enhance Web-Design Competition Champion",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "MERN Stack & Flutter Development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Competitive Programming & DSA",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Tech Enthusiast",
      description: "AI/ML & Emerging Technologies",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
            style={{
              background: `linear-gradient(45deg, ${['#3B82F6', '#8B5CF6', '#EF4444', '#10B981', '#F59E0B', '#EC4899'][i]}, transparent)`,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-200 mb-6"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-medium">About Me & Education</span>
            <Sparkles className="h-5 w-5 text-blue-600" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            My{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate developer with a strong educational foundation and hands-on experience
          </motion.p>
        </motion.div>

        {/* Main Left-Right Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* LEFT SECTION - About Me */}
          <motion.div
            variants={leftSlideVariants}
            className="space-y-8"
          >
            {/* About Story Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden group transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Heart className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">About Me</h3>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {[
                    "Hi! I'm <strong class='text-blue-600'>Shubham Gavade</strong>, a passionate Full-Stack Developer and Electronics & Computer Engineering student at PES Modern College, blending academic knowledge with hands-on development expertise.",
                    "With a strong foundation from my Diploma in Information Technology, I specialize in building <strong class='text-purple-600'>scalable web applications</strong> using the MERN stack and <strong class='text-green-600'>high-performance mobile apps</strong> with Flutter.",
                    "What sets me apart is my <strong class='text-orange-600'>problem-solving mindset</strong> and genuine enthusiasm for learning new technologies. I believe in writing clean, efficient code and creating user-centered solutions.",
                    "As an <strong class='text-yellow-600'>award-winning developer</strong> (Techno-Enhance Web-Design champion), I'm actively seeking opportunities to contribute my skills and grow as a professional."
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      custom={i}
                      variants={staggerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="hover:text-gray-800 transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={cardVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={staggerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      rotateY: 10
                    }}
                    className="group"
                  >
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/60 text-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-3 bg-gradient-to-r ${highlight.color} rounded-xl mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <highlight.icon className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{highlight.title}</h4>
                        <p className="text-gray-600 text-xs">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION - Education */}
          <motion.div
            variants={rightSlideVariants}
            className="space-y-8"
          >
            <motion.div
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">Education Journey</h3>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>
                
                <div className="space-y-8">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={staggerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="relative pl-16 group"
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
                      <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 group-hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <edu.icon className="h-5 w-5 text-gray-600" />
                            <span className={`px-2 py-1 bg-gradient-to-r ${edu.color} text-white text-xs font-semibold rounded-full`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-semibold mb-2">{edu.score}</p>
                        <p className="text-gray-600 mb-3">{edu.institution}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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
        </div>

        
        </motion.div>
    </section>
  );
}