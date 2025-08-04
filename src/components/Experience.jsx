import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const experiences = [
  {
    role: "Full Stack Web Developer | Intern [Remote]",
    company: "Rudraksha Welfare Foundation",
    date: "July 2023 – Sep 2023",
    link: "https://drive.google.com/file/d/1jsGolsbTMYO-2EgamMuyVRUEwDN3DoYi/view",
    tech: ["GoDaddy", "Bootstrap", "CRM"],
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
    tech: ["MVC", "CodeIgniter", "SEO"],
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
    tech: ["RESTful APIs", "Mobile Responsive"],
    points: [
      "Improved web portal load speed by 18% and mobile responsiveness by 25%.",
      "Built RESTful APIs to enhance system integration and improve communication speed by 30%."
    ]
  },
  {
    role: "Elliot Systems · Internship",
    company: "Hybrid",
    date: "Jan 2025 – Feb 2025 · 2 months",
    link: "#",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "FastAPI", "AI Agents"],
    points: [
      "Collaborated on the development of a Financial Management System as part of a cross-functional team.",
      "Utilized Next.js, Tailwind CSS, and MongoDB to design and implement responsive, full-stack web features.",
      "Contributed to the integration of AI agents for smart recommendations and task automation within the system.",
      "Worked on FastAPI-based backend services, optimizing API endpoints for performance and scalability."
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // 3D Tech Icons Component
  const TechIcons = () => {
    return (
      <group>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[-2, 0, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial color="#f59e0b" />
          </mesh>
        </Float>
        <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
          <mesh position={[2, 1, -2]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
        </Float>
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[0, -1, 1]}>
            <torusGeometry args={[0.6, 0.2, 16, 32]} />
            <meshStandardMaterial color="#10b981" />
          </mesh>
        </Float>
      </group>
    );
  };

  return (
    <section 
      id="experience" 
      ref={ref}
      className="relative py-32 px-4 sm:px-8 bg-gray-900 text-white overflow-hidden"
    >
      {/* 3D Background Canvas */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-20"
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <TechIcons />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </motion.div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          style={{ y: textY }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600"
          >
            Professional Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            My career path with measurable impact and continuous growth
          </motion.p>
        </motion.div>
       
        <div className="space-y-16 relative">
          {/* Animated timeline */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-amber-500 to-transparent transform -translate-x-1/2 origin-top"
          />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              {/* 3D timeline dot */}
              <motion.div 
                whileHover={{ scale: 1.5 }}
                className="hidden sm:flex absolute left-10 w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border-2 border-white transform -translate-x-1/2 -translate-y-1/2 top-8 z-10 shadow-lg shadow-yellow-500/30"
              />
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 sm:ml-24 relative overflow-hidden transition-all duration-500 hover:border-yellow-400/30 hover:shadow-yellow-500/10">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-radial-gradient from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6 relative z-10">
                  <div>
                    <motion.h3 
                      whileHover={{ x: 5 }}
                      className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                    >
                      {exp.role}
                    </motion.h3>
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg font-medium text-yellow-400 hover:text-yellow-300 transition-colors flex items-center mt-2"
                    >
                      {exp.company}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                    
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          whileHover={{ y: -3 }}
                          className="inline-block px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-xs font-mono border border-gray-600 shadow-inner"
                        >
                          #{tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-amber-400 rounded-full text-sm font-medium border border-gray-700 shadow-lg"
                  >
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    {exp.date}
                  </motion.span>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {exp.points.map((point, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      whileHover={{ x: 10 }}
                      className="flex items-start pl-2 border-l-2 border-yellow-500/30 hover:border-yellow-500/80 transition-colors duration-300"
                    >
                      <motion.span 
                        whileHover={{ rotate: 180, scale: 1.2 }}
                        transition={{ type: "spring" }}
                        className="flex-shrink-0 mt-1 mr-3"
                      >
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </motion.span>
                      <span className="text-gray-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Floating tech icons for Elliot Systems */}
                {index === experiences.length - 1 && (
                  <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                    <Canvas>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
                        <mesh>
                          <boxGeometry args={[2, 2, 2]} />
                          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.5} />
                        </mesh>
                      </Float>
                    </Canvas>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;