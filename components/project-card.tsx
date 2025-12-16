"use client"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/projects"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  )
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
            <div className="">
              <Carousel className="w-full max-w-sm mx-auto relative w-full aspect-video bg-gray-100 overflow-hidden"
                    plugins={[autoplay.current]}
                  
                  opts={{ loop: true }}>
                <CarouselContent>
                  {project.images.map((image) => (
                    <CarouselItem key={image} className="p-4">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={""}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 border border-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors"
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
