import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Monitor, Headphones, Users } from "lucide-react"

export function JoinServer() {
  const steps = [
    {
      icon: <Download className="h-10 w-10 text-orange-500" />,
      title: "Install FiveM",
      description: "Download and install the FiveM client from the official website",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Join Discord",
      description: "Join our Discord community for server updates and support",
    },
    {
      icon: <Monitor className="h-10 w-10 text-green-500" />,
      title: "Create Character",
      description: "Fill out the character application form on our website",
    },
    {
      icon: <Headphones className="h-10 w-10 text-orange-500" />,
      title: "Connect & Play",
      description: "Use the server connection details to join and start your RP journey",
    },
  ]

  return (
    <section id="join" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-green-500/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
            How to Join
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Follow these simple steps to join our FiveM roleplay server
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-zinc-800 border-zinc-700">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>

                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-500">Step {index + 1}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-zinc-800 border border-zinc-700 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Server Connection Details</h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-zinc-900 px-4 py-2 rounded-lg">
                <p className="text-zinc-400 text-sm">Server IP</p>
                <p className="font-mono text-orange-400">play.introvertirlrp.com</p>
              </div>
              <div className="bg-zinc-900 px-4 py-2 rounded-lg">
                <p className="text-zinc-400 text-sm">Direct Connect</p>
                <p className="font-mono text-green-400">fivem://connect/introvertirlrp.com</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700" asChild>
              <a href="fivem://connect/introvertirlrp.com">
                Connect to Server
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
