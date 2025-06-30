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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="bg-gray-50 py-20 px-8 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            About <span className="text-yellow-600">Me</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"
            whileHover={{ scaleX: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div 
          className="text-xl leading-relaxed text-gray-700 space-y-6 bg-white p-12 rounded-xl shadow-sm border border-gray-100 w-full"
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {[
            "I'm a <strong>Full-Stack Developer</strong> and Electronics & Computer Engineering student at PES Modern College, blending academic knowledge with hands-on development expertise across web and mobile platforms.",
            "With a diploma in Information Technology and ongoing B.E. studies, I specialize in building <strong>scalable web applications</strong> (MERN stack) and <strong>high-performance mobile apps</strong> (Flutter), delivering solutions that exceed user expectations.",
            "My technical mastery spans <strong>JavaScript/TypeScript, Java, C++</strong>, and modern frameworks, with advanced <strong>problem-solving</strong> skills honed through competitive programming and Data Structures & Algorithms.",
            "As a <strong>award-winning developer</strong> (Techno-Enhance Web-Design champion), I architect solutions that marry technical robustness with intuitive UX/UI design principles.",
            "I'm deeply passionate about <strong>emerging technologies</strong> (AI/ML, Blockchain, Web) and thrive in collaborative, innovative environments that push technological boundaries."
          ].map((text, i) => (
            <motion.p 
              key={i}
              custom={i}
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              dangerouslySetInnerHTML={{ __html: text }}
              className="hover:text-gray-900 transition-colors duration-300"
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}