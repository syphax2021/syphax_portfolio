"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/components/portfolio-context"
import { ChevronDown, MapPin, Phone, Calendar, Car } from "lucide-react"

export function HomeSection() {
  const { portfolioData } = usePortfolio()

  const scrollToNextSection = () => {
    const skillsSection = document.getElementById("section-1")
    if (skillsSection) {
      window.scrollTo({
        top: skillsSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 h-full flex flex-col">
      {/* Background particles */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl flex flex-col items-center text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">{portfolioData.firstName}</span>{" "}
            <span className="gradient-text">{portfolioData.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-3">{portfolioData.formation}</h2>

          <p className="text-gray-400 mb-8">{portfolioData.school}</p>

          <div className="glass-effect p-8 rounded-xl max-w-2xl w-full">
            <p className="text-gray-200 text-lg leading-relaxed mb-8">{portfolioData.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <Calendar size={18} className="text-purple-400" />
                </div>
                <span>{portfolioData.birthDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <MapPin size={18} className="text-purple-400" />
                </div>
                <span>{portfolioData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <Phone size={18} className="text-purple-400" />
                </div>
                <span>{portfolioData.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <Car size={18} className="text-purple-400" />
                </div>
                <span>{portfolioData.driverLicense}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center mt-8 mb-4"
      >
        <button
          onClick={scrollToNextSection}
          className="text-gray-400 hover:text-white transition-colors flex flex-col items-center"
        >
          <span className="mb-2">Découvrir mes compétences</span>
          <ChevronDown className="animate-bounce" size={24} />
        </button>
      </motion.div>
    </div>
  )
}
