"use client"

import { useProgress } from "@react-three/drei"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const { progress } = useProgress()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setShowLoader(false)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  if (!showLoader) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="text-4xl font-bold text-white mb-8">Portfolio 3D</div>
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-white">{Math.round(progress)}%</div>
    </div>
  )
}
