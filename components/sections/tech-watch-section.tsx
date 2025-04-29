"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/components/portfolio-context"
import { Rss, Hash, BookOpen } from "lucide-react"

export function TechWatchSection() {
  const { portfolioData } = usePortfolio()

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
        Veille <span className="gradient-text">Technologique</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div variants={item} className="glass-effect p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                <Rss size={20} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Outils de veille</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {portfolioData.techWatch.tools.map((tool, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-gray-800/70 text-gray-300">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="glass-effect p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                <Hash size={20} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Sujets suivis</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {portfolioData.techWatch.topics.map((topic, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-gray-800/70 text-gray-300">
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-effect p-6 rounded-xl"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
              <BookOpen size={20} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Articles récents commentés</h3>
          </div>

          <div className="space-y-6">
            {portfolioData.techWatch.articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-purple-600 pl-4 py-2"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {article.title}
                </a>
                <p className="text-gray-400 mt-2">{article.comment}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
