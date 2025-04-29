"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type PortfolioData = {
  name: string
  firstName: string
  school: string
  formation: string
  bio: string
  photo: string
  birthDate: string
  location: string
  phone: string
  driverLicense: string
  skills: {
    languages: { name: string; level: number }[]
    technologies: { name: string; level: number }[]
    databases: { name: string; level: number }[]
    methods: { name: string; level: number }[]
    tools: { name: string; level: number }[]
  }
  projects: {
    name: string
    objective: string
    context: string
    technologies: string[]
    features: string[]
    screenshot: string
    githubLink: string
    demoLink?: string
  }[]
  experiences: {
    company: string
    duration: string
    missions: string[]
    projects: string[]
    skills: string[]
  }[]
  education: {
    degree: string
    institution: string
    period: string
    description: string[]
  }[]
  languages: {
    language: string
    level: string
  }[]
  softSkills: string[]
  interests: string[]
  techWatch: {
    tools: string[]
    topics: string[]
    articles: { title: string; url: string; comment: string }[]
  }
  contact: {
    email: string
    linkedin: string
    github: string
  }
}

const defaultPortfolioData: PortfolioData = {
  name: "SAIDANI",
  firstName: "Syphax",
  school: "Institut IEF2I",
  formation: "BTS SIO Services Informatiques aux Organisations",
  bio: "Étudiant en BTS SIO à la recherche d'une alternance en bachelor Informatique. Passionné par le développement web et la cybersécurité, je suis curieux et toujours prêt à apprendre de nouvelles technologies.",
  photo: "/placeholder.svg?height=400&width=300",
  birthDate: "30 Juin 2001",
  location: "Ile de France",
  phone: "0636021623",
  driverLicense: "Permis B",
  skills: {
    languages: [
      { name: "HTML", level: 0.85 },
      { name: "CSS", level: 0.8 },
      { name: "JavaScript", level: 0.75 },
      { name: "PHP", level: 0.7 },
    ],
    technologies: [
      { name: "WordPress", level: 0.65 },
      { name: "Bootstrap", level: 0.7 },
      { name: "React", level: 0.6 },
    ],
    databases: [
      { name: "MySQL", level: 0.75 },
      { name: "SQL Server", level: 0.65 },
    ],
    methods: [
      { name: "Gestion de projet", level: 0.7 },
      { name: "Méthodes agiles", level: 0.65 },
    ],
    tools: [
      { name: "VS Code", level: 0.85 },
      { name: "Git", level: 0.7 },
      { name: "Administration réseau", level: 0.75 },
      { name: "Sécurité informatique", level: 0.7 },
    ],
  },
  projects: [
    {
      name: "Portfolio Personnel",
      objective: "Créer un portfolio professionnel pour présenter mes compétences et projets",
      context: "Projet personnel",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      features: ["Design responsive", "Présentation des compétences", "Galerie de projets", "Formulaire de contact"],
      screenshot: "/portfolio-personnel-modele-presentation-cv_150101-8202.jpg",
      githubLink: "https://github.com/username/portfolio",
      demoLink: "https://portfolio-demo.vercel.app",
    },
    {
      name: "Application de Gestion",
      objective: "Développer une application pour la gestion des stocks et des livraisons",
      context: "Stage chez NAFTAL",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      features: ["Gestion des stocks", "Suivi des livraisons", "Interface administrateur", "Rapports statistiques"],
      screenshot: "/thetis-application-creation-design-logiciel-webdesign-caconcept-alexis-cretin-2.jpg",
      githubLink: "https://github.com/username/gestion-app",
    },
    {
      name: "Système de Sécurité",
      objective: "Mettre en place des mesures de sécurité informatique",
      context: "Stage chez NAFTAL",
      technologies: ["Pare-feu", "Gestion des droits d'accès", "Sécurité réseau"],
      features: [
        "Configuration de pare-feu",
        "Gestion des droits d'accès",
        "Audit de sécurité",
        "Formation des utilisateurs",
      ],
      screenshot: "/security-system-design-guide.jpg",
      githubLink: "https://github.com/username/security-system",
    },
  ],
  experiences: [
    {
      company: "NAFTAL, Béjaïa",
      duration: "Décembre 2024 - Janvier 2025",
      missions: [
        "Contribuer à la mise en place de mesures de sécurité",
        "Configuration de pare-feu",
        "Gestion des droits d'accès",
        "Amélioration des applications pour la gestion des stocks et des livraisons",
      ],
      projects: ["Système de sécurité informatique", "Application de gestion des stocks"],
      skills: ["Sécurité informatique", "Développement d'applications", "Gestion de projet"],
    },
    {
      company: "NAFTAL, Béjaïa",
      duration: "Mai 2024 - Juin 2024",
      missions: [
        "Mise à jour des logiciels et systèmes d'exploitation",
        "Assistance aux utilisateurs pour les problèmes matériels ou logiciels",
      ],
      projects: ["Support technique", "Maintenance informatique"],
      skills: ["Support technique", "Maintenance système", "Relation client"],
    },
    {
      company: "Algérie Télécom, Béjaïa",
      duration: "Mars 2021 - Mai 2021",
      missions: [
        "Installation et maintenance d'équipements télécoms",
        "Diagnostic et résolution de pannes électriques",
      ],
      projects: ["Maintenance d'équipements", "Résolution de pannes"],
      skills: ["Électrotechnique", "Maintenance", "Diagnostic technique"],
    },
  ],
  education: [
    {
      degree: "BTS SIO Services Informatiques aux Organisations",
      institution: "Institut IEF2I, Paris (France)",
      period: "2023-2025",
      description: [
        "Développement Web & Mobile",
        "Gestion de bases de données (SQL)",
        "Cybersécurité",
        "Formation spécialisée dans la gestion des infrastructures informatiques et le développement de solutions logicielles",
      ],
    },
    {
      degree: "Licence 2 en Sciences et Technologies, Spécialité Electrotechnique",
      institution: "Univérsité A/Mira - Béjaia",
      period: "2022-2023",
      description: ["Electrotechnique", "Electronique", "Probabilités & statistiques"],
    },
    {
      degree: "Licence 1 en Sciences et Technologies",
      institution: "Univérsité A/Mira - Béjaia",
      period: "2021-2022",
      description: ["Physique Générale", "Informatique (Algorithmique en langage Pascal)"],
    },
    {
      degree: "Baccalauréat, Série Sciences Expérimentales",
      institution: "Lycée Chouhada Chikhoune - Béjaia",
      period: "2020-2021",
      description: [
        "Mathématiques, Physique, Chimie",
        "Formation axée sur les sciences fondamentales et les méthodologies expérimentales",
      ],
    },
  ],
  languages: [
    { language: "Français", level: "Courant" },
    { language: "Anglais", level: "Intermédiaire" },
    { language: "Kabyle", level: "Langue maternelle" },
    { language: "Arabe", level: "Courant" },
  ],
  softSkills: [
    "Curiosité technique et veille sur la technologie",
    "Capacité d'adaptation et à apprendre rapidement",
    "Autonomie et sens de l'organisation",
  ],
  interests: [
    "Création de sites ou d'applications web",
    "Sport (Football, Musculation)",
    "Voyages (Algérie, Tunisie, Espagne, Grèce)",
  ],
  techWatch: {
    tools: ["Veille technologique", "Forums spécialisés", "Newsletters tech"],
    topics: ["Développement Web", "Cybersécurité", "Nouvelles technologies"],
    articles: [
      {
        title: "Les tendances du développement web en 2024",
        url: "https://example.com/web-dev-trends",
        comment: "Article intéressant sur les nouvelles technologies web à surveiller cette année.",
      },
      {
        title: "Sécurité informatique : les bonnes pratiques",
        url: "https://example.com/cybersecurity-best-practices",
        comment: "Guide complet sur les mesures de sécurité essentielles pour les entreprises.",
      },
      {
        title: "L'avenir de l'IA dans le développement logiciel",
        url: "https://example.com/ai-software-dev",
        comment: "Analyse des impacts de l'intelligence artificielle sur les métiers du développement.",
      },
    ],
  },
  contact: {
    email: "saidanisyphax14@gmail.com",
    linkedin: "https://linkedin.com/in/syphax-saidani",
    github: "https://github.com/syphax-saidani",
  },
}

type PortfolioContextType = {
  portfolioData: PortfolioData
  updatePortfolioData: (data: Partial<PortfolioData>) => void
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData)

  const updatePortfolioData = (data: Partial<PortfolioData>) => {
    setPortfolioData((prev) => ({ ...prev, ...data }))
  }

  return (
    <PortfolioContext.Provider value={{ portfolioData, updatePortfolioData }}>{children}</PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider")
  }
  return context
}
