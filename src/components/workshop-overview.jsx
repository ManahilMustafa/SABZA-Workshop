import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Users } from "lucide-react"

export function WorkshopOverview() {
  const learningItems = [
    "Understand carbon credit frameworks & MRV protocols",
    "Grasp blockchain architecture & smart contract lifecycle",
    "Explore the GCC's environmental asset legal landscape",
    "Create a lab-based carbon token & deploy on Polygon",
    "Analyze case studies from steel, cement, and energy sectors",
    "Present a group tokenization project with evaluation",
  ]

  const attendees = [
    "Sustainability & ESG Consultants",
    "Web3 Developers & Engineers",
    "Policymakers & Environmental Regulators",
    "MEP & Energy Managers",
    "Carbon Project Developers",
  ]

  return (
    <section id="overview" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Workshop Overview</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join this cutting-edge 2-day experience designed to equip professionals with the technical and strategic
            knowledge needed to thrive in carbon credit tokenization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-black">
                <Target className="h-6 w-6 text-green-600" />
                <span>What You Will Learn</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {learningItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-black">
                <Users className="h-6 w-6 text-green-600" />
                <span>Who Should Attend?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {attendees.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
