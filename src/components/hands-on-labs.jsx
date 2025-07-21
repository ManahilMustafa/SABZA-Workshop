import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Shield, TrendingUp, Lightbulb } from "lucide-react"

export function HandsOnLabs() {
  const labItems = [
    { icon: Code, title: "Deploy Carbon Token", desc: "Deploy a carbon token on Polygon Testnet" },
    { icon: Shield, title: "Blockchain Tools", desc: "Work with MetaMask, Remix & Truffle" },
    { icon: TrendingUp, title: "MRV Simulation", desc: "Simulate MRV data in smart contracts" },
    { icon: Lightbulb, title: "Trading Platforms", desc: "Explore Sabza Platform and more" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Hands-On Lab Experience</h2>
          <p className="text-lg text-gray-700">Practical implementation with industry-standard tools</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {labItems.map((item, index) => (
            <Card key={index} className="border-green-200 text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <item.icon className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-black text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
