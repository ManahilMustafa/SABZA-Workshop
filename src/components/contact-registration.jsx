import { Mail, Globe, Users, ExternalLink } from "lucide-react"

export function ContactRegistration() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Contact & Registration</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <Mail className="h-8 w-8 text-green-600" />
              <span className="font-semibold text-black">Email</span>
              <a href="mailto:contact@sabza.me" className="text-green-600 hover:underline">
                contact@sabza.me
              </a>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Globe className="h-8 w-8 text-green-600" />
              <span className="font-semibold text-black">Website</span>
              <a href="https://www.sabza.me" className="text-green-600 hover:underline flex items-center space-x-1">
                <span>www.sabza.me</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Users className="h-8 w-8 text-green-600" />
              <span className="font-semibold text-black">Discord Support</span>
              <a href="https://discord.gg/RScxqCBt" className="text-green-600 hover:underline">
                Join Support Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
