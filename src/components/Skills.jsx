export default function Skills() {
  const skillCategories = [
    {
      title: '👨‍💻 Programming',
      skills: ['JavaScript', 'Dart', 'Java', 'Python', 'C++', 'PHP']
    },
    {
      title: '🌐 Web Development',
      skills: ['MERN Stack', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Pandas']
    },
    {
      title: '🗃️ Databases & Backend',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'SOAP APIs', 'RESTful APIs']
    },
    {
      title: '🛠️ Tools & Platforms',
      skills: ['Git', 'GitHub', 'Microsoft Excel', 'MS Word', 'PowerPoint']
    },
    {
      title: '🧠 Core CS Skills',
      skills: ['Data Structures & Algorithms', 'OOPs Concepts', 'Problem-Solving']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-900 border-b-4 inline-block border-yellow-500 pb-2">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {skillCategories.map((category, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
