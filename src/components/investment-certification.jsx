import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, CheckCircle, Award } from "lucide-react"

export function InvestmentCertification() {
  return (
    <section id="certification" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Investment & Certification</h2>
            <p className="text-lg text-gray-700">Comprehensive training package with professional certification</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200 text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-black">Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">$350</div>
                <p className="text-gray-700">USD per participant</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-black">Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>2-day live training</li>
                  <li>Professional certification</li>
                  <li>Toolkit access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-black">Certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Certified Carbon Tokenization Associate</span>
                  <br />
                  GCC Edition
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
