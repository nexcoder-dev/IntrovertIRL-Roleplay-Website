import { Shield, Users, Briefcase, Map, Cpu, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: "Custom Economy",
      description: "Balanced economy system with multiple ways to earn money through legal and illegal activities.",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Active Community",
      description: "Join hundreds of active roleplayers in a vibrant and welcoming community.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-green-500" />,
      title: "Unique Jobs",
      description: "Over 100 custom jobs including police, EMS, mechanics, lawyers, and many criminal organizations.",
    },
    {
      icon: <Map className="h-10 w-10 text-orange-500" />,
      title: "Custom Locations",
      description: "Explore unique custom-built locations and properties throughout the map.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "Advanced Scripts",
      description: "Experience smooth gameplay with our optimized custom scripts and resources.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-green-500" />,
      title: "Immersive RP",
      description: "Realistic roleplay experience with voice proximity and character development.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
            Server Features
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Discover what makes Starline Roleplay the most immersive FiveM experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-zinc-800 border-zinc-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-400 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
