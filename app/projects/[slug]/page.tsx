import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getProjectBySlug, projects } from "@/lib/projects"
import Navigation from "@/components/navigation"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="flex min-h-screen bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Back Navigation */}
        <div className="w-full px-6 md:px-12 py-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-sm uppercase tracking-widest hover:font-bold transition-all">
              ← Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Project Header */}
        <div className="w-full px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider">{project.title}</h1>
            <p className="text-gray-600 max-w-2xl">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-4">
              {project.keywords.map((keyword) => (
                <span key={keyword} className="px-3 py-1 border border-gray-300 text-xs uppercase tracking-widest">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="w-full px-6 md:px-12 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
              <Image src={project.coverImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className="w-full px-6 md:px-12 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Navigation */}
        <div className="w-full px-6 md:px-12 py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <Link href={`/projects/${nextProject.slug}`} className="group block">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-gray-500">Next Project</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider group-hover:opacity-70 transition-opacity">
                  {nextProject.title}
                </h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-gray-200 px-6 md:px-12 py-8 mt-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600">© 2025 Nora Julianna. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
