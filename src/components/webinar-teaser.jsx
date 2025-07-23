import { Calendar, Clock, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WebinarTeaser() {
  return (
    <section className="w-full py-12 md:py-16 ">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <Card className="border-2 border-green-500 shadow-lg bg-white relative overflow-hidden">
          {/* Alert Badge */}
          <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
            Free Webinar Alert!
          </div>

          <CardContent className="p-8 md:p-10">
            <div className="text-center space-y-6">
              {/* Main Heading */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Join our free webinar:</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-green-600">
                  Tokenizing Carbon Credits with Blockchain
                </h3>
              </div>

              {/* Topic Description */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Topic: Workshop on Tokenization of Carbon Credits – (Intro Session)
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                   Explore how blockchain, smart contracts, and MRV protocols are transforming the carbon credit
                  economy.
                </p>
                <p className="text-gray-600 mt-3 font-medium">
                  Ideal for ESG consultants, Web3 developers, sustainability officers & policymakers.
                </p>
              </div>

              {/* Date & Time Info */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Every Monday</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="font-medium">4:00-5:00 PM</span>
                </div>
                <div className="text-sm text-gray-600">Riyadh, KSA & Doha, Qatar Time Zones</div>
              </div>

              {/* SABZA Info */}
              <div className="bg-gray-50 rounded-lg p-4 border">
                <p className="text-gray-700">
                  Get an inside look at <span className="font-semibold text-green-600">SABZA's</span> real-world
                  solutions and innovations in climate finance.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  <a
                    href="https://www.meetup.com/doha-carbon-footprint-meetup-group/events/309587687/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    🔗 Register Now
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 bg-transparent"
                >
                  <a href="mailto:contact@sabza.me" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> More Info
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="text-sm text-gray-600 pt-2">
                For more information:{" "}
                <a href="mailto:contact@sabza.me" className="text-green-600 hover:underline font-medium">
                  contact@sabza.me
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
