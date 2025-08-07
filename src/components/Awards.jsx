import { motion } from 'framer-motion';

export default function Awards() {
  const awards = [
    {
      title: "Winner",
      description: "Finserve: Where Tech Meets Finance [National Level DSA Hackathon]",
      certLink: "https://drive.google.com/file/d/1rT8nyL_fghyAavFTi16SeL64Y_o2g-TP/view",
      icon: "🥇",
      date: "2023"
    },
    {
      title: "Winner",
      description: "Techno-Enhance 2k23 [State Level Web Design Competition]",
      certLink: "https://drive.google.com/file/d/1Q7V9r5y7eqe53sLxP8Uh0BZnl9Jmk2oB/view",
      icon: "🏆",
      date: "2023"
    },
    {
      title: "Runner-Up",
      description: "AIZureStack (AI + Azure) Hackathon [National Level Competition]",
      certLink: "https://drive.google.com/file/d/181C8X45wKkTuZwM-aov8J1xTQQLthbMe/view",
      icon: "🥈",
      date: "2022"
    },
    {
      title: "Runner-Up",
      description: "Ink of Independence [National Level Poster Presentation Competition]",
      certLink: "https://drive.google.com/file/d/1EWquF_6GR1cC5FOHL9LJEbfMgek0XBSP/view",
      icon: "🎨",
      date: "2022"
    },
    {
      title: "Runner-Up",
      description: "GeekGenius Challenge [National Level Quiz Competition]",
      certLink: "https://drive.google.com/file/d/1CRfbOaf7noSJixFeANptOLaCF2bbRvzQ/view",
      icon: "🧠",
      date: "2021"
    },
  ];

  const activities = [
    { text: "Student Coordinator", icon: "👥", year: "2023" },
    { text: "Technical Coordinator - Techno-Fest 2k23", icon: "🛠️", year: "2023" },
    { text: "E-CESA Club Member", icon: "🤝", year: "2022-23" },
    { text: "IEEE Student Club Participant", icon: "⚡", year: "2021-22" }
  ];

  const openSource = [
    { text: "Contributed to 3+ open source projects via CertifyO platform", icon: "🌐", year: "2023" },
    { text: "Improved bug tracking and documentation", icon: "📝", year: "2022" },
    { text: "Developed UI components and fixed API issues", icon: "💻", year: "2022" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            Awards &<span className="text-yellow-600 relative">
              <motion.span 
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
              >Achievements</motion.span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-3 bg-yellow-100 opacity-70 -z-0 transform -rotate-1"
                whileHover={{ height: 5 }}
                transition={{ type: "spring" }}
              />
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4 origin-left"
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Recognitions and contributions that highlight my technical and leadership capabilities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Awards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="text-3xl mr-3"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >🏆</motion.span>
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Competition Awards
                </span>
              </motion.h3>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.02, backgroundColor: "#fef9c3" }}
                    className="flex items-start group p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <motion.span 
                        className="text-3xl"
                        whileHover={{ scale: 1.2 }}
                      >{award.icon}</motion.span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <motion.span 
                          className={`inline-block px-2 py-1 rounded-md text-sm font-semibold mb-1 ${
                            award.title === "Winner" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {award.title}
                        </motion.span>
                        <span className="text-sm text-gray-500">{award.date}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{award.description}</p>
                      <motion.a
                        href={award.certLink}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                      >
                        View Certificate
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          whileHover={{ x: 5 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </motion.svg>
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Open Source & Activities */}
          <div className="space-y-8">
            {/* Open Source Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-3xl mr-3"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >🌍</motion.span>
                  <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                    Open Source Contributions
                  </span>
                </motion.h3>
                <ul className="space-y-4">
                  {openSource.map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ 
                        x: 5,
                        backgroundColor: "#dcfce7",
                        paddingLeft: "0.5rem"
                      }}
                      className="flex items-start group p-3 rounded-lg transition-all duration-300"
                    >
                      <motion.span 
                        className="text-2xl mr-4 text-green-500"
                        whileHover={{ scale: 1.2 }}
                      >{item.icon}</motion.span>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-gray-700">{item.text}</span>
                          <span className="text-sm text-gray-500">{item.year}</span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Activities Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-3xl mr-3"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >🌟</motion.span>
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Extra-Curricular Activities
                  </span>
                </motion.h3>
                <ul className="space-y-4">
                  {activities.map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ 
                        x: 5,
                        backgroundColor: "#dbeafe",
                        paddingLeft: "0.5rem"
                      }}
                      className="flex items-start group p-3 rounded-lg transition-all duration-300"
                    >
                      <motion.span 
                        className="text-2xl mr-4 text-blue-500"
                        whileHover={{ scale: 1.2 }}
                      >{item.icon}</motion.span>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-gray-700">{item.text}</span>
                          <span className="text-sm text-gray-500">{item.year}</span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}