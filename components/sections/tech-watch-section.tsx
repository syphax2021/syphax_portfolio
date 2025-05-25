"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/components/portfolio-context"
import { Target, Search, Code, TrendingUp, Lightbulb, ExternalLink } from "lucide-react"

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

  const frameworks = {
    frontend: [
      {
        name: "React",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reactjs-B65FwBfvMplaO9067kv9fTYBjqpYyk.png",
        color: "text-blue-400",
      },
      {
        name: "Vue.js",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vusjs-Ts6dVZuPwsU0ZvY6sMEHKA0noZcNCc.png",
        color: "text-green-400",
      },
      {
        name: "Angular",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/angular-KQsIcUKmC40XjN6LQVGcSQCgalWeaQ.png",
        color: "text-red-400",
      },
      {
        name: "Svelte",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svelte-65NSDKTEgwA3fnyP17e5gbSuFqlO5h.png",
        color: "text-orange-400",
      },
    ],
    backend: [
      {
        name: "Laravel",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laravel-bjXxofqmuS3iwcrMZI8nK5cbWmTQQt.png",
        color: "text-red-400",
      },
      {
        name: "Django",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/django-LQb5b6KGRSnFZpYXCv1lvSejl9cxrN.png",
        color: "text-green-400",
      },
      {
        name: "Express.js",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expressjs-sMxMtZeNafbV2BCKDDp7mL1KmPmte6.png",
        color: "text-yellow-400",
      },
      {
        name: "Spring Boot",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/springboot-ErKqSFg23OvUxhzHdsuZB5jpYFXuVL.png",
        color: "text-green-400",
      },
    ],
    mobile: [
      {
        name: "Flutter",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flutter-cQFPlHGoKxcBwuWXWdLDzy5iHQ5gfj.png",
        color: "text-blue-400",
      },
      {
        name: "React Native",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reactnative-KanHjpWwNOjIFuVQp04gLPoDRSZEVl.png",
        color: "text-blue-400",
      },
    ],
    fullstack: [
      {
        name: "Next.js",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nextjs-t5ArWfeNixBruxJ2EQHN5GBiNcP974.png",
        color: "text-white",
      },
      {
        name: "Nuxt.js",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nuxtjs-lwhCC6lH82bwGYFDco10wur6F0i52i.png",
        color: "text-green-400",
      },
      {
        name: "Remix",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/remix-pnmGldO9T7qtjflsQvrI9tnawHIA6f.png",
        color: "text-blue-400",
      },
      {
        name: "Astro",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/astro-QGslRQ8IMjjlBhEgRMffi5v9kdLtTt.png",
        color: "text-purple-400",
      },
    ],
  }

  const sources = [
    { name: "Smashing Magazine", url: "https://www.smashingmagazine.com/", icon: "📰" },
    { name: "CSS-Tricks", url: "https://css-tricks.com/", icon: "📘" },
    { name: "Dev.to", url: "https://dev.to/", icon: "💻" },
    { name: "State of JS", url: "https://stateofjs.com/", icon: "📊" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/", icon: "🌐" },
    { name: "StackShare", url: "https://stackshare.io/", icon: "🛠️" },
    { name: "Medium", url: "https://medium.com/", icon: "📢" },
    { name: "Syntax.fm", url: "https://syntax.fm/", icon: "🎙️" },
  ]

  const trends = [
    {
      title: "Croissance continue de React grâce à Next.js",
      description: "React maintient sa position dominante, renforcée par l'écosystème Next.js",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "Next.js", color: "green-text-gradient" },
      ],
    },
    {
      title: "Popularité de Vue 3 dans des projets plus légers",
      description: "Vue.js gagne en popularité pour les projets nécessitant une livraison rapide",
      tags: [
        { name: "Vue.js", color: "green-text-gradient" },
        { name: "Performance", color: "pink-text-gradient" },
      ],
    },
    {
      title: "Intérêt croissant pour Svelte et Bun",
      description: "Les frameworks innovants comme Svelte et les runtimes comme Bun attirent l'attention",
      tags: [
        { name: "Svelte", color: "orange-text-gradient" },
        { name: "Bun", color: "blue-text-gradient" },
      ],
    },
    {
      title: "Consolidation des frameworks full-stack JavaScript",
      description: "Les solutions full-stack JavaScript se standardisent autour de quelques acteurs majeurs",
      tags: [
        { name: "Full-stack", color: "purple-text-gradient" },
        { name: "JavaScript", color: "yellow-text-gradient" },
      ],
    },
    {
      title: "Focus sur la performance et l'expérience développeur",
      description: "L'industrie privilégie de plus en plus la DX et les performances",
      tags: [
        { name: "DX", color: "pink-text-gradient" },
        { name: "Performance", color: "green-text-gradient" },
      ],
    },
  ]

  const objectives = [
    "Comprendre les différences entre les principaux frameworks front-end et back-end",
    "Identifier les tendances actuelles (popularité, écosystème, usages)",
    "Évaluer la pertinence de chaque framework selon les types de projets",
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🧠 Veille <span className="text-purple-500">Technologique</span>
        </h2>
        <p className="text-xl text-gray-300">Les Frameworks</p>
        <p className="text-gray-400 mt-4 max-w-4xl mx-auto">
          Dans le cadre de ma veille technologique, j'ai choisi d'explorer l'univers des frameworks. Ces outils jouent
          un rôle central dans le développement web et mobile moderne, en facilitant la création d'applications
          performantes, modulaires et maintenables.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Objectifs */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
              <Target size={20} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">🎯 Objectifs</h3>
          </div>
          <div className="space-y-3">
            {objectives.map((objective, index) => (
              <motion.div key={index} variants={item} className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">{objective}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Méthodologie */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
              <Search size={20} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">🔍 Méthodologie</h3>
          </div>
          <p className="text-gray-300 mb-4">
            J'ai utilisé CommaFeed comme agrégateur de flux RSS afin de suivre régulièrement les mises à jour de sources
            fiables et spécialisées :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sources.map((source, index) => (
              <motion.a
                key={index}
                variants={item}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
              >
                <span className="text-2xl mr-3">{source.icon}</span>
                <span className="text-gray-300 group-hover:text-white">{source.name}</span>
                <ExternalLink size={16} className="ml-auto text-gray-500 group-hover:text-purple-400" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Frameworks analysés */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
              <Code size={20} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">🧱 Frameworks analysés</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={item} className="space-y-3">
              <h4 className="font-semibold text-purple-400">Front-end</h4>
              <div className="space-y-2">
                {frameworks.frontend.map((framework, index) => (
                  <div key={index} className="flex items-center px-3 py-2 rounded-lg bg-gray-800">
                    <img
                      src={framework.image || "/placeholder.svg"}
                      alt={framework.name}
                      className="w-10 h-10 mr-2 rounded object-contain"
                    />
                    <span className={`${framework.color} font-medium`}>{framework.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h4 className="font-semibold text-purple-400">Back-end</h4>
              <div className="space-y-2">
                {frameworks.backend.map((framework, index) => (
                  <div key={index} className="flex items-center px-3 py-2 rounded-lg bg-gray-800">
                    <img
                      src={framework.image || "/placeholder.svg"}
                      alt={framework.name}
                      className="w-10 h-10 mr-2 rounded object-contain"
                    />
                    <span className={`${framework.color} font-medium`}>{framework.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h4 className="font-semibold text-purple-400">Mobile</h4>
              <div className="space-y-2">
                {frameworks.mobile.map((framework, index) => (
                  <div key={index} className="flex items-center px-3 py-2 rounded-lg bg-gray-800">
                    <img
                      src={framework.image || "/placeholder.svg"}
                      alt={framework.name}
                      className="w-10 h-10 mr-2 rounded object-contain"
                    />
                    <span className={`${framework.color} font-medium`}>{framework.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h4 className="font-semibold text-purple-400">Full-stack</h4>
              <div className="space-y-2">
                {frameworks.fullstack.map((framework, index) => (
                  <div key={index} className="flex items-center px-3 py-2 rounded-lg bg-gray-800">
                    <img
                      src={framework.image || "/placeholder.svg"}
                      alt={framework.name}
                      className="w-10 h-10 mr-2 rounded object-contain"
                    />
                    <span className={`${framework.color} font-medium`}>{framework.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Résultats et tendances */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
              <TrendingUp size={20} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">📈 Résultats et tendances observées</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trends.map((trend, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-600"
              >
                <h4 className="text-white font-bold text-lg mb-2">{trend.title}</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {trend.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`text-sm ${tag.color}`}>
                      #{tag.name}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CommaFeed Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 gap-6 items-center"
        >
          <div className="w-[200px] h-[200px] rounded-xl flex items-center justify-center">
            <img
              src="/commafeed.svg?height=200&width=200"
              alt="CommaFeed"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-white text-[22px] font-bold mb-2">Ma méthode de veille – CommaFeed</h3>
            <p className="text-gray-300 text-[15px] leading-[24px]">
              Pour recueillir de nouvelles informations, j'utilise <strong>CommaFeed</strong>, une application web qui
              permet de collecter automatiquement des articles sur les frameworks via des flux RSS. Les sites choisis
              sont spécialisés dans les tendances technologiques, les comparatifs et les bonnes pratiques de
              développement.
            </p>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
              <Lightbulb size={20} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white"> Conclusion personnelle</h3>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Grâce à cette veille, j'ai affiné ma capacité à choisir un framework adapté à un projet selon sa complexité,
            l'équipe, et les besoins techniques. Elle m'a permis aussi de rester à jour dans un écosystème qui évolue
            très rapidement.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
