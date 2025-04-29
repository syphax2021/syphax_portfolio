"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

type NavigationProps = {
  sections: string[]
  currentSection: number
  setCurrentSection: (index: number) => void
}

export function Navigation({ sections, currentSection, setCurrentSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md text-white md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed inset-0 z-40 bg-black/90 md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => {
                  setCurrentSection(index)
                  setIsOpen(false)
                }}
                className={`py-4 text-xl ${
                  currentSection === index ? "text-purple-500 font-bold" : "text-white/70 hover:text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Desktop navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block">
        <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-md rounded-full px-2 py-1">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => setCurrentSection(index)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? "bg-purple-600 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Section indicator */}
      <div className="fixed top-8 left-8 z-30">
        <h2 className="text-xl font-bold text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
          {sections[currentSection]}
        </h2>
      </div>
    </>
  )
}
