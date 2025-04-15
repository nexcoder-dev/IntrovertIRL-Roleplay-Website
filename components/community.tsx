import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Youtube, Twitch, MessageSquare } from "lucide-react"

export function Community() {
  const testimonials = [
    {
      avatar: "/placeholder.svg?height=100&width=100",
      name: "Alex_RP",
      role: "Police Officer",
      content:
        "Starline RP has the most professional staff and amazing community I've ever seen. The custom scripts and jobs make the experience incredibly immersive.",
    },
    {
      avatar: "/placeholder.svg?height=100&width=100",
      name: "Sarah_Gaming",
      role: "EMS Chief",
      content:
        "I've been on many RP servers but none compare to Starline. The economy is balanced, the community is helpful, and the roleplay scenarios are always exciting.",
    },
    {
      avatar: "/placeholder.svg?height=100&width=100",
      name: "RPMaster99",
      role: "Criminal Kingpin",
      content:
        "The criminal organizations and heist systems on this server are next level. Every job feels unique and the risk vs reward is perfectly balanced.",
    },
  ]

  return (
    <section id="community" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
            Our Community
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Join thousands of players in our thriving roleplay community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-orange-500">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-orange-400 mb-4">{testimonial.role}</p>
                  <p className="text-zinc-400 italic">"{testimonial.content}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Sponsors & Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=200"
                width={200}
                height={80}
                alt="Sponsor 1"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=200"
                width={200}
                height={80}
                alt="Sponsor 2"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=200"
                width={200}
                height={80}
                alt="Sponsor 3"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=200"
                width={200}
                height={80}
                alt="Sponsor 4"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Media Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-orange-500">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Media Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Rahul Sharma</h3>
                  <p className="text-sm text-orange-400 mb-2">Lead Photographer</p>
                  <p className="text-zinc-400 text-sm">Capturing the best moments in the city</p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-orange-500/50 hover:bg-orange-500/20"
                    >
                      <Twitter className="h-4 w-4 text-orange-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-white/50 hover:bg-white/20"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-green-500/50 hover:bg-green-500/20"
                    >
                      <Youtube className="h-4 w-4 text-green-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Media Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Priya Patel</h3>
                  <p className="text-sm text-white mb-2">Video Editor</p>
                  <p className="text-zinc-400 text-sm">Creating cinematic stories from the server</p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-orange-500/50 hover:bg-orange-500/20"
                    >
                      <Twitter className="h-4 w-4 text-orange-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-white/50 hover:bg-white/20"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-green-500/50 hover:bg-green-500/20"
                    >
                      <Youtube className="h-4 w-4 text-green-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-green-500">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Media Team Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Arjun Singh</h3>
                  <p className="text-sm text-green-400 mb-2">Livestreamer</p>
                  <p className="text-zinc-400 text-sm">Broadcasting daily adventures in Starline RP</p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-orange-500/50 hover:bg-orange-500/20"
                    >
                      <Twitter className="h-4 w-4 text-orange-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-white/50 hover:bg-white/20"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-green-500/50 hover:bg-green-500/20"
                    >
                      <Youtube className="h-4 w-4 text-green-400" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/20 via-zinc-800 to-green-900/20 border border-zinc-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="border-orange-500/50 hover:bg-orange-500/20 gap-2">
              <Discord className="h-5 w-5 text-orange-400" />
              Discord
            </Button>
            <Button variant="outline" className="border-white/50 hover:bg-white/20 gap-2">
              <Twitter className="h-5 w-5 text-white" />
              Twitter
            </Button>
            <Button variant="outline" className="border-green-500/50 hover:bg-green-500/20 gap-2">
              <Youtube className="h-5 w-5 text-green-400" />
              YouTube
            </Button>
            <Button variant="outline" className="border-orange-500/50 hover:bg-orange-500/20 gap-2">
              <Twitch className="h-5 w-5 text-orange-400" />
              Twitch
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-zinc-400 mb-6">
              Join our Discord community to stay updated on server events, updates, and to connect with other players.
              Our active staff team is always available to help with any questions or issues.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              Join Our Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Discord(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M7.5 7.2c.3-.5.7-1 1.2-1.3a7 7 0 0 1 3.3-.7c1.3 0 2.5.3 3.3.7.5.3.9.8 1.2 1.3" />
      <path d="M7.5 16.8c.3.5.7 1 1.2 1.3.8.4 2 .7 3.3.7 1.3 0 2.5-.3 3.3-.7.5-.3.9-.8 1.2-1.3" />
      <path d="M15.5 17 17 20" />
      <path d="M8.5 17 7 20" />
      <path d="M8.5 7 7 4" />
      <path d="M15.5 7 17 4" />
      <path d="M3 7v10c0 3 2 4 4 4h10c2 0 4-1 4-4V7c0-3-2-4-4-4H7C5 3 3 4 3 7Z" />
    </svg>
  )
}

function Instagram(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
