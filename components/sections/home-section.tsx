"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/components/portfolio-context"
import { ChevronDown, MapPin, Phone, Calendar } from "lucide-react"

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
    <div className="container mx-auto px-4 h-full flex flex-col pt-20">
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[70%] flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">{portfolioData.firstName}</span>{" "}
            <span className="text-purple-500">{portfolioData.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-2">{portfolioData.formation}</h2>

          <p className="text-gray-400 mb-6">{portfolioData.school}</p>

          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl max-w-full">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{portfolioData.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-purple-400" />
                <span>{portfolioData.birthDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-purple-400" />
                <span>{portfolioData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-purple-400" />
                <span>{portfolioData.phone}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[30%] flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Animated outer circle */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-purple-500/30"
            />

            {/* Animated middle circle */}
            <motion.div
              animate={{
                scale: [1.05, 0.95, 1.05],
                rotate: [360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-4 rounded-full border-2 border-blue-500/40"
            />

            {/* Main image container with pulsing effect */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-8 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />

              {/* Profile image */}
              <img
                src={portfolioData.photo || "/placeholder.svg?height=400&width=400"}
                alt={`${portfolioData.firstName} ${portfolioData.name}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20" />
            </motion.div>

            {/* Floating particles effect */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
              <div className="absolute top-12 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-80" />
              <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-70" />
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-blue-300 rounded-full opacity-60" />
            </motion.div>
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
