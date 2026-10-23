import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { ServerRules } from "@/components/server-rules"
import { JoinServer } from "@/components/join-server"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"
import { WhitelistApplication } from "@/components/whitelist-application"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/images/logo.png" alt="IntrovertIRL RP Logo" width={40} height={40} className="object-contain" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
              INTROVERTIRL RP
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#rules" className="text-zinc-400 hover:text-white transition-colors">
              Rules
            </a>
            <a href="#join" className="text-zinc-400 hover:text-white transition-colors">
              How to Join
            </a>
            <a href="#whitelist" className="text-zinc-400 hover:text-white transition-colors">
              Whitelist
            </a>
            <a href="#community" className="text-zinc-400 hover:text-white transition-colors">
              Community
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700" asChild>
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </Button>
        </div>
      </header>

      <main className="pt-16">
        <HeroSection />
        <Features />
        <ServerRules />
        <JoinServer />
        <WhitelistApplication />
        <Community />
      </main>

      <Footer />
    </div>
  )
}
