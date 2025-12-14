// copied from egyheppem components
// 2st: add this code to components
"use client"

import { createPortal } from "react-dom"
import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"


interface GalleryViewProps {
  images: string[]
  initialIndex: number
  onClose: () => void
}

export function GalleryView({ images, initialIndex, onClose }: GalleryViewProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isClosing, setIsClosing] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

   const [mounted, setMounted] = useState(false)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }, [images.length])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      } else if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50) {
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleWheel)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [handleClose, handlePrevious, handleNext])

  // swipe gesture handlers 
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return

    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current

    // threshold of 50px for swipe
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext() // swipe left → next
      else handlePrevious() // swipe right → previous
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return createPortal(
    <div
      className={`fixed inset-0 flex bg-white/70 backdrop-blur-lg items-center justify-center glass-bg transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      } z-[9999]`}
      onClick={handleClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={handleClose}
        className="mt-12 cursor-pointer absolute top-4 left-4 p-2  bg-black  backdrop-blur-xs hover:bg-black/100 z-10"
        aria-label="Close gallery"
      >
        <X color="white" className="w-3 h-3 sm:w-6 sm:h-6 md:w-9 md:h-9" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          handlePrevious()
        }}
        className="cursor-pointer absolute left-4 p-2 bg-black black z-10"
        aria-label="Előző"
      >
        <ChevronLeft color="white" className="w-3 h-3 sm:w-6 sm:h-6 md:w-9 md:h-9" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          handleNext()
        }}
        className="cursor-pointer absolute right-4 p-2 bg-black z-10"
        aria-label="Következő kép"
      >
        <ChevronRight color="white" className="w-3 h-3 sm:w-6 sm:h-6 md:w-9 md:h-9" />
      </button>

      <div
        className={`relative w-full h-full flex items-center justify-center p-4 transition-transform duration-300 ${
          isClosing ? "scale-90" : "scale-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-7xl max-h-full w-full h-full">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted">
        {currentIndex + 1} / {images.length}
      </div>
    </div>,
    document.body
  )
}
