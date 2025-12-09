"use client"

import Image from "next/image"
import { useState } from "react"
import { GalleryView } from "./gallery-view"

interface GalleryImageProps {
  images: string[]
  index: number
  src: string
  alt: string
}

export default function GalleryImage({ images, index, src, alt }: GalleryImageProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className="relative w-full aspect-video bg-gray-100 overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {open && (
        <GalleryView
          images={images}
          initialIndex={index}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
