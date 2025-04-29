"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselControlsProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
  onGoToSlide: (index: number) => void
}

export function CarouselControls({ currentSlide, totalSlides, onPrev, onNext, onGoToSlide }: CarouselControlsProps) {
  return (
    <>
      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={onPrev}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          aria-label="Précédent"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={onNext}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          aria-label="Suivant"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-purple-500 w-6" : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Aller à l'élément ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}
