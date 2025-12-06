export interface Project {
  id: string
  slug: string
  title: string
  keywords: string[]
  coverImage: string
  description: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "alter-ego",
    title: "ÆLTER ÆGO",
    keywords: ["portrait", "photography", "artistic"],
    coverImage: "/portrait-photography-artistic-moody.jpg",
    description: "A portrait photography series exploring identity and transformation.",
    images: [
      "/portrait-photography-artistic-moody.jpg",
      "/geometric-abstract.png",
      "/street-photography-urban-scenes.jpg",
    ],
  },
  {
    id: "2",
    slug: "starshaped",
    title: "Starshaped",
    keywords: ["geometric", "abstract", "experimental"],
    coverImage: "/geometric-abstract.png",
    description: "Exploring geometric forms and abstract compositions.",
    images: [
      "/geometric-abstract.png",
      "/portrait-photography-artistic-moody.jpg",
      "/street-photography-urban-scenes.jpg",
    ],
  },
  {
    id: "3",
    slug: "street-photography",
    title: "Street Photography",
    keywords: ["urban", "documentary", "candid"],
    coverImage: "/street-photography-urban-scenes.jpg",
    description: "Capturing everyday moments in urban environments.",
    images: [
      "/street-photography-urban-scenes.jpg",
      "/portrait-photography-artistic-moody.jpg",
      "/geometric-abstract.png",
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
