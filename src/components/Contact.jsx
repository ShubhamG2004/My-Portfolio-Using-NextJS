import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
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
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', title: '', message: '' });
    })
    .catch(() => {
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
             Con<span className="text-yellow-600 relative inline-block">
              <span className="relative z-10">tact</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-100 opacity-60 -z-0"></span>
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full origin-left"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Message Subject"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
            >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

            <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <a href="mailto:gavadeshubham2004@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    gavadeshubham2004@gmail.com
                    </a>
                </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                    <a href="tel:+917057652014" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +91 7057652014
                    </a>
                </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">Pune, Maharashtra, India</p>
                </div>
                </div>

                {/* Socials */}
                <div className="pt-4">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/shubham-gavade23/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors">
                    <svg className="h-6 w-6 text-gray-700 hover:text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/ShubhamG2004" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <svg className="h-6 w-6 text-gray-700 hover:text-[#333]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    </a>

                    {/* LeetCode */}
                    <a href="https://leetcode.com/gavadeshubham2004" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-yellow-100 transition-colors">
                      <svg className="h-6 w-6 text-gray-700 hover:text-[#FFA116]" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M16 2.667c-7.364 0-13.333 5.969-13.333 13.333s5.969 13.333 13.333 13.333 13.333-5.969 13.333-13.333-5.969-13.333-13.333-13.333zm0 24c-5.891 0-10.667-4.776-10.667-10.667s4.776-10.667 10.667-10.667 10.667 4.776 10.667 10.667-4.776 10.667-10.667 10.667zm-2.667-8l-4-4 4-4 1.414 1.414-2.586 2.586 2.586 2.586-1.414 1.414zm5.334 0l-1.414-1.414 2.586-2.586-2.586-2.586 1.414-1.414 4 4-4 4z"/>
                      </svg>
                    </a>
                    
                </div>
                </div>
            </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
