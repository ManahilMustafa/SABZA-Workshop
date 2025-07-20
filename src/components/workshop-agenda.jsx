import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code } from "lucide-react"

export function WorkshopAgenda() {
  const day1Items = [
    "Introduction to Carbon Markets & Climate Finance",
    "Blockchain 101: Public vs Private Chains",
    "Tokenization Mechanics & Lifecycle",
    "GCC Legal Landscape for Environmental Assets",
    "Industry Use Cases Discussion",
    "Launch of Group Tokenization Assignment",
  ]

  const day2Items = [
    "MRV & IoT for Carbon Data",
    "Smart Contracts & dApp Development (Hands-On)",
    "Token Distribution & Marketplace Access",
    "Regulatory Reporting & Risk Management",
    "Final Group Presentations + Evaluation",
    "Certification Ceremony",
  ]

  return (
    <section id="agenda" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Workshop Agenda</h2>
          <p className="text-lg text-gray-700">
            Comprehensive 2-day curriculum covering theory and hands-on implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center space-x-2 text-black">
                <BookOpen className="h-6 w-6 text-green-600" />
                <span>Day 1 – Foundations</span>
              </CardTitle>
              <CardDescription>Building core knowledge and understanding</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {day1Items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-green-600">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center space-x-2 text-black">
                <Code className="h-6 w-6 text-green-600" />
                <span>Day 2 – Implementation</span>
              </CardTitle>
              <CardDescription>Hands-on development and practical application</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {day2Items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-green-600">{index + 1}</span>
                    </div>
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
