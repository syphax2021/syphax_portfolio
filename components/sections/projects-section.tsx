"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePortfolio } from "@/components/portfolio-context"
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectsSection() {
  const { portfolioData } = usePortfolio()
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Determine how many slides to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(portfolioData.projects.length / slidesPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Project images
  const projectImages = ["/portfolio-personnel-modele-presentation-cv_150101-8202.JPG", "/thetis-application-creation-design-logiciel-webdesign-caconcept-alexis-cretin-2.jpg", "/security-system-design-guide.jpg"]

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Mes <span className="gradient-text">Projets</span>
      </motion.h2>

      <AnimatePresence mode="wait">
        {selectedProject !== null ? (
          <ProjectDetail
            project={portfolioData.projects[selectedProject]}
            projectImage={projectImages[selectedProject]}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <div className="relative">
            {/* Carousel Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full glass-effect hover:bg-gray-700/50 text-white transition-colors"
                aria-label="Projets précédents"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
              <button
                onClick={nextSlide}
                className="p-2 rounded-full glass-effect hover:bg-gray-700/50 text-white transition-colors"
                aria-label="Projets suivants"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden">
              <motion.div
                ref={carouselRef}
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {portfolioData.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4"
                  >
                    <div
                      className="glass-effect rounded-xl overflow-hidden cursor-pointer group h-full"
                      onClick={() => setSelectedProject(index)}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white font-medium px-4 py-2 rounded-full bg-purple-600/80">
                            Voir détails
                          </span>
                        </div>
                        <img
                          src={projectImages[index] || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">{project.objective}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs rounded-full bg-gray-800/70 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-800/70 text-gray-300">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-purple-500 w-6" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Aller à la page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectDetail({ project, projectImage, onBack }: { project: any; projectImage: string; onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <button onClick={onBack} className="flex items-center text-gray-400 hover:text-white transition-colors mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Retour aux projets
      </button>

      <div className="glass-effect rounded-xl overflow-hidden">
        <div className="h-80 overflow-hidden">
          <img src={projectImage || "/placeholder.svg"} alt={project.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h2>

            <div className="flex gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/70 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-2">Objectif</h3>
              <p className="text-gray-300">{project.objective}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-2">Contexte</h3>
              <p className="text-gray-300">{project.context}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-purple-400 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-800/70 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-purple-400 mb-3">Fonctionnalités</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
