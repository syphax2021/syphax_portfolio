"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/components/portfolio-context"
import { Download, GraduationCap, Briefcase, Code, Globe } from "lucide-react"

export function CVSection() {
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
        Curriculum <span className="text-purple-500">Vitae</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-xl overflow-hidden shadow-xl">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold">{`${portfolioData.firstName} ${portfolioData.name}`}</h2>
              <p className="text-xl text-purple-700 mt-1">{portfolioData.formation}</p>
              <p className="text-gray-600 mt-1">{portfolioData.school}</p>
            </div>
            <a href="CVSYPHAX-2025.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 md:mt-0 flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Download size={18} />
                <span>Télécharger PDF</span>
              </motion.button>
            </a>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Formation */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <GraduationCap size={20} className="text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Formation</h3>
              </div>

              <div className="ml-13 pl-6 border-l-2 border-gray-200 space-y-4">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h4 className="font-medium">{edu.degree}</h4>
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                      <span className="text-gray-600 md:ml-4">{edu.period}</span>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      {edu.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Globe size={20} className="text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Langues</h3>
              </div>

              <div className="ml-13 pl-6 border-l-2 border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolioData.languages.map((lang, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                      <span className="font-medium">{lang.language}</span>
                      <span className="text-purple-700 bg-purple-100 px-3 py-1 rounded-full text-sm">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compétences */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Code size={20} className="text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Compétences</h3>
              </div>

              <div className="ml-13 pl-6 border-l-2 border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Langages</h4>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills.languages.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills.technologies.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.softSkills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Expériences */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Briefcase size={20} className="text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Expériences professionnelles</h3>
              </div>

              <div className="ml-13 pl-6 border-l-2 border-gray-200 space-y-4">
                {portfolioData.experiences.map((exp, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h4 className="font-medium">{exp.company}</h4>
                      <span className="text-gray-600">{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      {exp.missions.map((mission, mIndex) => (
                        <li key={mIndex}>{mission}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Code size={20} className="text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Centres d'intérêt</h3>
              </div>

              <div className="ml-13 pl-6 border-l-2 border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {portfolioData.interests.map((interest, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
