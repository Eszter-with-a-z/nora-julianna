import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group cursor-pointer mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* Left column - star and title */}
          <div className="flex flex-row">
            <div className="mb-8 h-12 w-12">
              <p className="text-gray-400 text-3xl group-hover:text-gray-600">
                {project.id}
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider leading-tight">
              {project.title}
            </h2>
          </div>

          {/* Right column - image and keywords */}
          <div className="space-y-4">
            <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
              <Image
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 border border-gray-300 text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
