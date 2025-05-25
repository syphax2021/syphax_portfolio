"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    name: "QR Code Generator",
    objective: "Application web permettant de générer des QR codes personnalisés à partir de texte ou d'URLs.",
    context: "Outil pratique pour créer rapidement des codes QR pour des sites web, cartes de visite ou événements",
    technologies: ["JavaScript", "HTML5", "CSS3", "QR API"],
    features: [
      "Génération de QR codes en temps réel",
      "Personnalisation des couleurs",
      "Ajustement de la taille",
      "Téléchargement des codes générés",
    ],
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qr-FmEFI13LdEP5hjluYMSQgZit8YSdzN.png",
    githubLink: "https://github.com/fares3413/Qr-code-generater",
    demoLink: "",
  },
  {
    name: "QCM App",
    objective: "Application de questionnaire à choix multiples pour créer et gérer des quiz interactifs.",
    context: "Projet éducatif permettant aux enseignants de créer des évaluations en ligne",
    technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    features: [
      "Création de questionnaires",
      "Système de notation automatique",
      "Interface responsive",
      "Gestion des résultats",
    ],
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qcm-nJJpkKF0YuWjOOUCpjkq6YzKwHvBNO.png",
    githubLink: "https://github.com/",
    demoLink: "",
  },
  {
    name: "Furni - E-commerce Moderne",
    objective: "Plateforme e-commerce spécialisée dans la vente de meubles avec un design moderne et élégant.",
    context: "Site vitrine pour une entreprise de mobilier haut de gamme",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    features: [
      "Catalogue de produits interactif",
      "Panier d'achat dynamique",
      "Interface d'administration",
      "Design responsive moderne",
    ],
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jobit-xui69KxPcPZd7wfYp6RigTVzNKlfe8.png",
    githubLink: "https://github.com/fares3413/furni-web",
    demoLink: "",
  },
  {
    name: "Planet Shopify - E-commerce PHP",
    objective: "Site e-commerce complet avec gestion de produits et interface utilisateur optimisée.",
    context: "Plateforme de vente en ligne multi-produits avec système de gestion avancé",
    technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    features: [
      "Gestion complète des produits",
      "Système de commandes",
      "Interface administrateur",
      "Gestion des utilisateurs",
    ],
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecommercephp-uiY6f9DLZEQBe2qyhrPNKqWemaVPc3.png",
    githubLink: "https://github.com/",
    demoLink: "",
  },
  {
    name: "Client Léger - Montres de Luxe",
    objective: "Site de vente de montres haut de gamme avec interface d'administration complète.",
    context: "Plateforme e-commerce spécialisée dans les montres de luxe avec gestion avancée",
    technologies: ["Laravel", "JavaScript", "Tailwind CSS", "MySQL"],
    features: [
      "Catalogue de montres premium",
      "Système de recherche avancé",
      "Gestion des marques",
      "Interface d'administration",
    ],
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clientleger-bxuM4IwNndlUlBH4oOe869hEVLxTDp.png",
    githubLink: "https://github.com/",
    demoLink: "",
  },
  {
    name: "Luxe Appointment System",
    objective: "Application de prise de rendez-vous pour services de luxe avec dashboard complet.",
    context: "Système de gestion de rendez-vous pour entreprises haut de gamme",
    technologies: ["Python", "Django", "JavaScript", "PostgreSQL"],
    features: ["Gestion des rendez-vous", "Dashboard analytique", "Système de notifications", "Gestion des clients"],
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clourd-EkAqeMsCnbs1buBYpf6ui2Q2OhmirD.png",
    githubLink: "https://github.com/",
    demoLink: "",
  },
  {
    name: "Tic-Tac-Toe",
    objective: "Jeu de morpion interactif avec interface moderne et suivi de l'historique des parties.",
    context: "Projet ludique démontrant les compétences en logique de programmation",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    features: ["Jeu à deux joueurs", "Interface intuitive", "Historique des coups", "Détection automatique du gagnant"],
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tictactoe-vQVLjHGhzASnq0r4WinHcMmrKHSgzP.png",
    githubLink: "https://github.com/fares3413/tic-tac-toe",
    demoLink: "",
  },
  {
    name: "Tetris Game",
    objective: "Recréation du célèbre jeu Tetris avec fonctionnalités modernes et système de score.",
    context: "Projet de jeu classique implémentant toute la logique du Tetris original",
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
    features: ["Logique complète du Tetris", "Rotation des pièces", "Système de score", "Niveaux de difficulté"],
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testris-5cB3z9hvpg7xmu5fTFLnrKOylux6DR.png",
    githubLink: "https://github.com/fares3413/TESTRIS",
    demoLink: "",
  },
  {
    name: "Site Immobilier - Partami",
    objective: "Plateforme immobilière avec interface d'administration complète pour la gestion des biens.",
    context: "Site professionnel pour agence immobilière avec gestion avancée des propriétés",
    technologies: ["Laravel", "Tailwind CSS", "JavaScript", "Filament"],
    features: [
      "Gestion des propriétés",
      "Système de recherche avancé",
      "Interface d'administration",
      "Gestion des clients",
    ],
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/immobilier-W1CRUabycItvXcP4RxI83sdNDjt6Dq.png",
    githubLink: "https://github.com/",
    demoLink: "",
  },
  {
    name: "Template E-commerce Fashion",
    objective: "Template e-commerce moderne pour site de mode avec design élégant et responsive.",
    context: "Projet statique démontrant les compétences en design frontend et intégration",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: ["Design responsive moderne", "Interface utilisateur élégante", "Animations CSS", "Navigation intuitive"],
    screenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front2-F4SyT6Mu887nq1jcEj57kaZfuKAaXa.png",
    githubLink: "https://github.com/",
    demoLink: "",
  },
]

export function ProjectsSection() {
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

  const totalSlides = Math.ceil(projects.length / slidesPerView)

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

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Mes <span className="text-purple-500">Projets</span>
      </motion.h2>

      <AnimatePresence mode="wait">
        {selectedProject !== null ? (
          <ProjectDetail project={projects[selectedProject]} onBack={() => setSelectedProject(null)} />
        ) : (
          <div className="relative">
            {/* Carousel Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                aria-label="Projets précédents"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
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
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4"
                  >
                    <div
                      className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group h-full"
                      onClick={() => setSelectedProject(index)}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white font-medium px-4 py-2 rounded-full bg-purple-600/80">
                            Voir détails
                          </span>
                        </div>
                        <img
                          src={project.screenshot || "/placeholder.svg?height=600&width=800"}
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
                            <span key={techIndex} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
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

function ProjectDetail({ project, onBack }: { project: any; onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <button onClick={onBack} className="flex items-center text-gray-400 hover:text-white transition-colors mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Retour aux projets
      </button>

      <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="h-80 overflow-hidden">
          <img
            src={project.screenshot || "/placeholder.svg?height=600&width=800"}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h2>

            <div className="flex gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
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
                <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
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
