"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/components/portfolio-context"
import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  const { portfolioData } = usePortfolio()

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Stages & <span className="text-purple-500">Expériences</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:translate-x-[-0.5px]"></div>

        {portfolioData.experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative mb-12 md:mb-24 ${
              index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
            } w-full md:w-1/2 pl-12 md:pl-0`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-0 md:left-auto ${
                index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:translate-x-[-50%]"
              } top-0 w-8 h-8 rounded-full bg-purple-600 border-4 border-gray-900 z-10 flex items-center justify-center`}
            >
              <Briefcase size={16} className="text-white" />
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300">
              <div className="flex flex-col mb-4">
                <h3 className="text-xl font-bold text-white">{experience.company}</h3>
                <div className="flex items-center text-gray-400 mt-1">
                  <Calendar size={16} className="mr-2" />
                  <span>{experience.duration}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-purple-400 font-medium mb-2">Missions</h4>
                  <ul className="space-y-1">
                    {experience.missions.map((mission, missionIndex) => (
                      <li key={missionIndex} className="text-gray-300 flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-purple-400 font-medium mb-2">Projets réalisés</h4>
                  <ul className="space-y-1">
                    {experience.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="text-gray-300 flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-purple-400 font-medium mb-2">Compétences développées</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
