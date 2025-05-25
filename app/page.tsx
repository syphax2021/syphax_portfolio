"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HomeSection } from "@/components/sections/home-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { TechWatchSection } from "@/components/sections/tech-watch-section"
import { CVSection } from "@/components/sections/cv-section"
import { ContactSection } from "@/components/sections/contact-section"
import { PortfolioProvider } from "@/components/portfolio-context"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [mounted, setMounted] = useState(false)
  const sections = ["Accueil", "Compétences", "Projets", "Stages", "Veille", "CV", "Contact"]

  // Fix for hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) => document.getElementById(`section-${index}`))

      const currentPosition = window.scrollY + window.innerHeight / 3

      sectionElements.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
            setCurrentSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections, mounted])

  if (!mounted) {
    return null
  }

  return (
    <PortfolioProvider>
      <div className="bg-gray-950 text-white min-h-screen">
        <Header sections={sections} currentSection={currentSection} setCurrentSection={setCurrentSection} />

        <main className="pt-20">
          <section id="section-0" className="min-h-screen">
            <HomeSection />
          </section>

          <section id="section-1" className="min-h-screen py-20">
            <SkillsSection />
          </section>

          <section id="section-2" className="min-h-screen py-20">
            <ProjectsSection />
          </section>

          <section id="section-3" className="min-h-screen py-20">
            <ExperienceSection />
          </section>

          <section id="section-4" className="min-h-screen py-20">
            <TechWatchSection />
          </section>

          <section id="section-5" className="min-h-screen py-20">
            <CVSection />
          </section>

          <section id="section-6" className="min-h-screen py-20">
            <ContactSection />
          </section>
        </main>

        <ScrollToTop />
      </div>
    </PortfolioProvider>
  )
}
