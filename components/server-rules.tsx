import { Check } from "lucide-react"

export function ServerRules() {
  const rules = [
    "Value your life (VDM) - Act as you would in real life situations",
    "No random death match (RDM) - Don't kill players without proper roleplay",
    "No breaking character - Stay in character at all times",
    "No metagaming - Don't use out-of-character information in-game",
    "No powergaming - Don't force scenarios on other players",
    "Respect all players and staff members",
    "No exploiting bugs or using hacks/mods",
    "No cop baiting or unnecessary police disturbance",
    "Proper use of radio channels and communication",
    "Follow all traffic laws unless in roleplay situations",
  ]

  return (
    <section id="rules" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
            Server Rules
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            To ensure the best experience for everyone, please follow these important rules
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 bg-orange-500/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-orange-500" />
                </div>
                <span className="text-zinc-300">{rule}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 text-sm">
              <strong>Note:</strong> Breaking these rules may result in warnings, temporary bans, or permanent bans
              depending on the severity and frequency of violations. All decisions by staff members are final.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
