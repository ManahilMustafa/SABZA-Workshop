

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Award, Users } from "lucide-react"
import { RegistrationModal } from "@/components/registration-modal"

export function CallToAction() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Limited Spots Available</h2>
          <p className="text-xl mb-2">Don't Miss the Region's Premier Tokenization Training</p>
          <p className="text-lg mb-8 opacity-90">8–9 August 2025 | Live + Hands-On Labs | USD $350</p>
<a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfT-Kp_evyQJ62tSvSaty-0ru8qnWuNypw5XRkGvxxhYQNh5A/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-white hover:bg-green-500 text-black px-4 py-2 rounded-md"
>
  Register Now
</a>

          {/* <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold"
            onClick={() => setIsRegistrationOpen(true)}
          >
            Register Now
          </Button> */}

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Early Bird Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Professional Certification</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Expert Instructors</span>
            </div>
          </div>
        </div>
      </section>
      <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </>
  )
}
