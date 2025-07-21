import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Building, Zap } from "lucide-react"

export function CaseStudies() {
  const caseStudies = [
    {
      image: "/emlogo.jpg",
      badge: "Steel Industry",
      title: "Emirates Steel (UAE)",
      description: "Green hydrogen savings tokenized via MRV and traded as credits",
    },
    {
     image: "/hol.jpg",
      badge: "Cement Industry",
      title: "LafargeHolcim",
      description: "CO₂ capture in cement plants verified and converted into digital assets",
    },
    {
     image: "/en.jpg",
      badge: "Energy Sector",
      title: "ENGIE Cofely",
      description: "Energy efficiency credits generated from smart MEP retrofits",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Case Studies Featured</h2>
          <p className="text-lg text-gray-700">Real-world implementations from leading GCC companies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <img src={study.image} alt={study.badge + " logo"} className="h-10 w-10 object-contain" />

                  <Badge variant="outline" className="border-green-600 text-green-600">
                    {study.badge}
                  </Badge>
                </div>
                <CardTitle className="text-black">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
