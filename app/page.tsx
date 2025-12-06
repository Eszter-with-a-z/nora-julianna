import Header from "@/components/header"
import Navigation from "@/components/navigation"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/projects"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Header Section */}
        <Header />

        {/* Skills and Contact Grid */}
        <section className="w-full px-6 md:px-12 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SkillsSection />
              <ContactSection />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full px-6 md:px-12 py-16">
          <div className="max-w-4xl mx-auto space-y-24">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-gray-200 px-6 md:px-12 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600">© 2025 Nora Julianna. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
