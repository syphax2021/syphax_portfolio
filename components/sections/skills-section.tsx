"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/components/portfolio-context"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function SkillsSection() {
  const { portfolioData } = usePortfolio()
  const [activeCategory, setActiveCategory] = useState(0)

  const skillCategories = [
    { title: "Langages", skills: portfolioData.skills.languages },
    { title: "Technologies", skills: portfolioData.skills.technologies },
    { title: "Bases de données", skills: portfolioData.skills.databases },
    { title: "Méthodes", skills: portfolioData.skills.methods },
    { title: "Outils", skills: portfolioData.skills.tools },
  ]

  const nextCategory = () => {
    setActiveCategory((prev) => (prev === skillCategories.length - 1 ? 0 : prev + 1))
  }

  const prevCategory = () => {
    setActiveCategory((prev) => (prev === 0 ? skillCategories.length - 1 : prev - 1))
  }

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Mes <span className="text-purple-500">Compétences</span>
      </motion.h2>

      {/* Carousel Navigation */}
      <div className="flex justify-center items-center mb-8 gap-4">
        <button
          onClick={prevCategory}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          aria-label="Catégorie précédente"
        >
          <ChevronLeft size={24} />
        </button>

        <h3 className="text-2xl font-bold text-white">
          <span className="text-purple-500">{skillCategories[activeCategory].title}</span>
        </h3>

        <button
          onClick={nextCategory}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          aria-label="Catégorie suivante"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {skillCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeCategory === index ? "bg-purple-500 w-6" : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Aller à la catégorie ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Content */}
      <div className="relative overflow-hidden rounded-xl bg-gray-900/60 backdrop-blur-sm p-8">
        <div className="min-h-[400px]">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium text-lg">{skill.name}</span>
                  <span className="text-gray-400">{Math.round(skill.level * 100)}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
