import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

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
    const newParticles = [...Array(35)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_xk34nsa',
        'template_jv4jqws',
        {
          title: formData.title,
          name: formData.name,
          time: new Date().toLocaleString(),
          message: formData.message,
          email: formData.email
        },
        'CwV_Vp1w8mAYxMjwY'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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

  const contactItemVariants = {
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

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(251, 191, 36, 0.1), 0 0 20px rgba(251, 191, 36, 0.2)",
      borderColor: "#fbbf24"
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 0 0 0px rgba(251, 191, 36, 0), 0 0 0px rgba(251, 191, 36, 0)",
      borderColor: "#475569"
    }
  };

  return (
    <section 
      ref={containerRef}
      id="contact" 
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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]" />
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

      <div className="max-w-6xl mx-auto relative z-10">
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
              💬 Let's Connect 💬
            </motion.span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Get In{" "}
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
              Touch
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
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>
        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Form */}
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
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                  <span className="relative z-10">📧</span>
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
                    Send Message
                  </span>
                </motion.h3>
              </motion.div>

              {/* Form */}
              <form onSubmit={sendEmail} className="space-y-6 relative z-10">
                <motion.div
                  variants={contactItemVariants}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <label htmlFor="title" className="block text-sm font-semibold text-slate-300 mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all backdrop-blur-sm"
                    placeholder="What's this about?"
                    variants={inputVariants}
                    whileFocus="focused"
                    initial="unfocused"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={contactItemVariants}
                    custom={1}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all backdrop-blur-sm"
                      placeholder="Your name"
                      variants={inputVariants}
                      whileFocus="focused"
                      initial="unfocused"
                    />
                  </motion.div>

                  <motion.div
                    variants={contactItemVariants}
                    custom={2}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all backdrop-blur-sm"
                      placeholder="your@email.com"
                      variants={inputVariants}
                      whileFocus="focused"
                      initial="unfocused"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={contactItemVariants}
                  custom={3}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or idea..."
                    variants={inputVariants}
                    whileFocus="focused"
                    initial="unfocused"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={contactItemVariants}
                  custom={4}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(251, 191, 36, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-4 px-8 rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl overflow-hidden group ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {/* Button Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-xl"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Button Content */}
                  <div className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 ml-2" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          whileHover={{ x: 5 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </motion.svg>
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`text-center p-4 rounded-xl ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}
                  >
                    {submitStatus === 'success' 
                      ? '✅ Message sent successfully! I\'ll get back to you soon.' 
                      : '❌ Failed to send message. Please try again or contact me directly.'}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
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
                  <span className="relative z-10">📞</span>
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
                    Contact Info
                  </span>
                </motion.h3>
              </motion.div>

              {/* Contact Items */}
              <div className="space-y-6 relative z-10">
                {/* Email */}
                <motion.div 
                  variants={contactItemVariants}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    backgroundColor: "rgba(34, 197, 94, 0.1)"
                  }}
                  className="flex items-start p-4 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-green-500/30"
                >
                  <motion.div 
                    className="flex-shrink-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-2xl border border-green-500/30"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <motion.a 
                      href="mailto:gavadeshubham2004@gmail.com" 
                      className="text-slate-300 hover:text-green-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      gavadeshubham2004@gmail.com
                    </motion.a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  variants={contactItemVariants}
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.1)"
                  }}
                  className="flex items-start p-4 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-blue-500/30"
                >
                  <motion.div 
                    className="flex-shrink-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-2xl border border-blue-500/30"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <motion.a 
                      href="tel:+917057652014" 
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      +91 7057652014
                    </motion.a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  variants={contactItemVariants}
                  custom={2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    backgroundColor: "rgba(168, 85, 247, 0.1)"
                  }}
                  className="flex items-start p-4 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-purple-500/30"
                >
                  <motion.div 
                    className="flex-shrink-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-2xl border border-purple-500/30"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                    <p className="text-slate-300">Pune, Maharashtra, India</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={contactItemVariants}
                  custom={3}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="pt-6 border-t border-slate-700/50"
                >
                  <h4 className="text-lg font-bold text-white mb-6 text-center">Connect with me</h4>
                  <div className="flex justify-center space-x-6">
                    {/* LinkedIn */}
                    <motion.a 
                      href="https://www.linkedin.com/in/shubham-gavade23/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative group"
                      whileHover={{ y: -8, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="relative bg-slate-700/50 p-4 rounded-2xl border border-slate-600/50 group-hover:border-blue-400/50 transition-all duration-300">
                        <svg className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a 
                      href="https://github.com/ShubhamG2004" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative group"
                      whileHover={{ y: -8, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="relative bg-slate-700/50 p-4 rounded-2xl border border-slate-600/50 group-hover:border-gray-400/50 transition-all duration-300">
                        <svg className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                    </motion.a>

                    {/* LeetCode */}
                    <motion.a 
                      href="https://leetcode.com/gavadeshubham2004" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative group"
                      whileHover={{ y: -8, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="relative bg-slate-700/50 p-4 rounded-2xl border border-slate-600/50 group-hover:border-yellow-400/50 transition-all duration-300">
                        <svg className="h-6 w-6 text-slate-400 group-hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M16 2.667c-7.364 0-13.333 5.969-13.333 13.333s5.969 13.333 13.333 13.333 13.333-5.969 13.333-13.333-5.969-13.333-13.333-13.333zm0 24c-5.891 0-10.667-4.776-10.667-10.667s4.776-10.667 10.667-10.667 10.667 4.776 10.667 10.667-4.776 10.667-10.667 10.667zm-2.667-8l-4-4 4-4 1.414 1.414-2.586 2.586 2.586 2.586-1.414 1.414zm5.334 0l-1.414-1.414 2.586-2.586-2.586-2.586 1.414-1.414 4 4-4 4z"/>
                        </svg>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
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