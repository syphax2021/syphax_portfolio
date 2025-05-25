"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

type HeaderProps = {
  sections: string[]
  currentSection: number
  setCurrentSection: (index: number) => void
}

export function Header({ sections, currentSection, setCurrentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    setCurrentSection(index)
    const element = document.getElementById(`section-${index}`)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-white"
        >
          <span className="text-purple-500">Syphax | Portfolio</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {sections.map((section, index) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(index)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 relative ${
                    currentSection === index ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section}
                  {currentSection === index && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-purple-600 rounded-full -z-10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900 shadow-lg"
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      currentSection === index ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
