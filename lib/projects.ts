export interface Project {
  id: string
  slug: string
  title: string
  keywords: string[]
  coverImage: string
  description: string
  images: string[]
}

const CLOUDINARY_URL_BASE="";

export const projects: Project[] = [
  {
    id: "01",
    slug: "alter-ego",
    title: "ÆLTER ÆGO",
    keywords: ["portrait", "photography", "artistic"],
    coverImage: "/portrait-photography-artistic-moody.jpg",
    description: "xz",
    images: [
      "/portrait-photography-artistic-moody.jpg",
      "/geometric-abstract.png",
      "/street-photography-urban-scenes.jpg",
    ],
  },
  {
    id: "02",
    slug: "starshaped",
    title: "Starshaped",
    keywords: ["geometric", "abstract", "experimental"],
    coverImage: "/geometric-abstract.png",
    description: "xx",
    images: Array.from(
      {length: 3},
      (_, i) => `${CLOUDINARY_URL_BASE}/starchaped/image-${i + 1}.jpg`
    ),
  },
  {
    id: "03",
    slug: "street-photography",
    title: "Street Photography",
    keywords: ["urban", "documentary", "candid"],
    coverImage: "/street-photography-urban-scenes.jpg",
    description: "xy",
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
