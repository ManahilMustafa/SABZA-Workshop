
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
  <img src="/logo.jpg" alt="SABZA Logo" className="h-16 w-19" />
  
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
            <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfT-Kp_evyQJ62tSvSaty-0ru8qnWuNypw5XRkGvxxhYQNh5A/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
>
  Register Now
</a>

            {/* <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => setIsRegistrationOpen(true)}>
              Register Now
            </Button> */}
          </div>
        </div>
      </header>
      <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </>
  )
}
