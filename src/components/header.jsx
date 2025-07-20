
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"
import { RegistrationModal } from "@/components/registration-modal"
import { useState } from "react"

export function Header() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-black">SABZA</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-black hover:text-green-600 transition-colors">
                Overview
              </a>
              <a href="#agenda" className="text-black hover:text-green-600 transition-colors">
                Agenda
              </a>
              <a href="#certification" className="text-black hover:text-green-600 transition-colors">
                Certification
              </a>
              <a href="#contact" className="text-black hover:text-green-600 transition-colors">
                Contact
              </a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => setIsRegistrationOpen(true)}>
              Register Now
            </Button>
          </div>
        </div>
      </header>
      <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </>
  )
}
