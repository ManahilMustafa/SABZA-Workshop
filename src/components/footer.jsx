import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">SABZA</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600">© 2025 SABZA. All rights reserved.</p>
            <p className="text-gray-600 text-sm mt-1">Empowering Climate Finance Through Technology</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
