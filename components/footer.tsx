import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.png"
                  alt="IntrovertIRL RP Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
                INTROVERTIRL RP
              </span>
            </Link>
            <p className="text-zinc-400 text-sm">
              The most immersive GTA 5 FiveM roleplay experience with custom scripts, unique jobs, and a thriving
              community.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-zinc-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#rules" className="text-zinc-400 hover:text-white transition-colors">
                  Server Rules
                </a>
              </li>
              <li>
                <a href="#join" className="text-zinc-400 hover:text-white transition-colors">
                  How to Join
                </a>
              </li>
              <li>
                <a href="#community" className="text-zinc-400 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#whitelist" className="text-zinc-400 hover:text-white transition-colors">
                  Whitelist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Character Creation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Job Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Server Status
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Support Tickets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
          <p>
            © {new Date().getFullYear()} IntrovertIRL Roleplay. All rights reserved. Not affiliated with Rockstar Games or
            Take-Two Interactive.
          </p>
        </div>
      </div>
    </footer>
  )
}
