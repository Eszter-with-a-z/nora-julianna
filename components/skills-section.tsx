export default function SkillsSection() {
  const skills = ["something", "like", "street photography", "brutalist", "and other", "keywords"]

  return (
    <div className="border border-black p-6 md:p-8">
      <h2 className="text-base font-bold mb-6 uppercase tracking-widest">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-2 border border-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
