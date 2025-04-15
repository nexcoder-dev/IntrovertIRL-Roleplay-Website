"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // This ensures the YouTube iframe API is loaded
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Clean up
    return () => {
      const scriptTags = document.getElementsByTagName("script")
      for (let i = 0; i < scriptTags.length; i++) {
        if (scriptTags[i].src.includes("youtube.com/iframe_api")) {
          scriptTags[i].remove()
          break
        }
      }
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <iframe
            ref={videoRef}
            src="https://www.youtube.com/embed/hvoD7ehZPcM?autoplay=1&mute=1&controls=0&loop=1&playlist=hvoD7ehZPcM&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
          STARLINE ROLEPLAY
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-8">
          Experience the most immersive GTA 5 FiveM roleplay server with custom scripts, unique jobs, and a thriving
          community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-lg"
          >
            Join Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-lg">
            Watch Trailer
          </Button>
        </div>

        <div className="mt-12">
          <div className="bg-zinc-900/80 p-6 rounded-lg inline-block border border-zinc-800">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
              LIVE SERVER STATUS
            </h3>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-2xl font-bold text-white">
                    <span className="text-green-500">127</span> / 256
                  </p>
                </div>
                <p className="text-zinc-400 text-sm">Players Online</p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-white">100+</p>
                <p className="text-zinc-400 text-sm">Custom Jobs</p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-zinc-400 text-sm">Server Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-8 w-8 rotate-90 text-zinc-500" />
      </div>
    </section>
  )
}
