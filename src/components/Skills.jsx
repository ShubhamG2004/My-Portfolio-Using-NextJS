export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Flutter', 'Firebase']
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-gray-200 rounded text-sm font-medium">{skill}</span>
        ))}
      </div>
    </section>
  )
}