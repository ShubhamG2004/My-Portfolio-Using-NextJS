import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6 overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow-100 opacity-20 blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 0.5 }}
        className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-yellow-200 opacity-20 blur-xl"
      />

      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            About <span className="relative">
              <span className="relative z-10 text-yellow-600">Me</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-100 opacity-70 -z-0 transform -rotate-1"></span>
            </span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover my journey, skills, and passion for technology
          </motion.p>
          {/* Download Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, backgroundColor: "#fde68a" }}
            className="inline-block mt-8 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-colors duration-300"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          className="text-lg leading-relaxed text-gray-700 space-y-6 bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-lg border border-white/20 w-full relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Card shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {[
            "I'm a <strong class='text-yellow-600'>Full-Stack Developer</strong> and Electronics & Computer Engineering student at PES Modern College, blending academic knowledge with hands-on development expertise across web and mobile platforms.",
            "With a diploma in Information Technology and ongoing B.E. studies, I specialize in building <strong class='text-yellow-600'>scalable web applications</strong> (MERN stack) and <strong class='text-yellow-600'>high-performance mobile apps</strong> (Flutter), delivering solutions that exceed user expectations.",
            "My technical mastery spans <strong class='text-yellow-600'>JavaScript/TypeScript, Java, C++</strong>, and modern frameworks, with advanced <strong class='text-yellow-600'>problem-solving</strong> skills honed through competitive programming and Data Structures & Algorithms.",
            "As a <strong class='text-yellow-600'>award-winning developer</strong> (Techno-Enhance Web-Design champion), I architect solutions that marry technical robustness with intuitive UX/UI design principles.",
            "I'm deeply passionate about <strong class='text-yellow-600'>emerging technologies</strong> (AI/ML, Blockchain, Web3) and thrive in collaborative, innovative environments that push technological boundaries."
          ].map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hover:text-gray-900 transition-colors duration-300 relative pl-6 border-l-2 border-yellow-400/30 hover:border-yellow-500"
              whileHover={{ x: 5 }}
              style={{ position: "relative" }}
            >
              <motion.span 
                className="absolute left-0 top-0 h-full w-0.5 bg-yellow-400 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
              />
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack floating tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Flutter", "MongoDB", "FastAPI", "AI/ML"].map((tech, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.8 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="inline-block px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium shadow-md border border-gray-100 hover:shadow-lg hover:border-yellow-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}