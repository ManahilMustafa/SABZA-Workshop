

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, Globe } from "lucide-react"
import { useState } from "react"
import { RegistrationModal } from "@/components/registration-modal"

export function HeroSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100 whitespace-pre-wrap">
            GCC's First Blockchain-Driven Carbon Tokenization Workshop
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            SABZA Workshop on
            <br />
            <span className="text-green-600">Tokenization of Carbon Credits</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            A 2-day immersive training for sustainability professionals, developers, and regulators to gain hands-on
            experience with carbon credit tokenization, MRV systems, smart contracts, and real-world case studies.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-black">
              <Calendar className="h-5 w-5 text-green-600" />
              <span className="font-semibold">25–26 July 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-black">
              <DollarSign className="h-5 w-5 text-green-600" />
              <span className="font-semibold">USD $350</span>
            </div>
            <div className="flex items-center space-x-2 text-black">
              <Globe className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Online + Hands-On Labs</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfT-Kp_evyQJ62tSvSaty-0ru8qnWuNypw5XRkGvxxhYQNh5A/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
>
  Register Now
</a>

            {/* <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={() => setIsRegistrationOpen(true)}
            >
              Register Now
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="text-xs border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
              onClick={() => setIsRegistrationOpen(true)}
            >
              Get Certified as Carbon Tokenization Associate
            </Button>
          </div>
        </div>
      </section>
      <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </>
  )
}
