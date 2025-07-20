import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Briefcase, GraduationCap, Calendar, DollarSign } from "lucide-react"


export function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    city: "",
    experience: "",
    background: "",
    expectations: "",
    dietaryRequirements: "",
    agreeTerms: false,
    agreeMarketing: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        country: "",
        city: "",
        experience: "",
        background: "",
        expectations: "",
        dietaryRequirements: "",
        agreeTerms: false,
        agreeMarketing: false,
      })
      onClose()
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md bg-white ">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Registration Successful!</h3>
            <p className="text-gray-600 mb-4">Thank you for registering for the SABZA Carbon Tokenization Workshop.</p>
            <p className="text-sm text-gray-500">
              You will receive a confirmation email shortly with workshop details and payment instructions.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-green-600" />
            <span>Workshop Registration</span>
          </DialogTitle>
          <DialogDescription>Register for the SABZA Carbon Tokenization Workshop - July 25-26, 2025</DialogDescription>
        </DialogHeader>

        {/* Workshop Summary */}
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-green-600" />
              <span className="font-semibold">July 25-26, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-green-600" />
              <span className="font-semibold">USD $350</span>
            </div>
            <Badge className="bg-green-600 text-white">Online + Hands-On Labs</Badge>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black flex items-center space-x-2">
              <User className="h-5 w-5 text-green-600" />
              <span>Personal Information</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your.email@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="+971 50 123 4567"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4 bg-white">
            <h3 className="text-lg font-semibold text-black flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-green-600" />
              <span>Professional Information</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required
                  placeholder="Your company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  required
                  placeholder="Your current position"
                />
              </div>
            </div>

            <div className="space-y-2 bg-white">
              <Label htmlFor="background">Professional Background *</Label>
              <Select onValueChange={(value) => handleInputChange("background", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your professional background" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="sustainability">Sustainability & ESG Consultant</SelectItem>
                  <SelectItem value="developer">Web3 Developer & Engineer</SelectItem>
                  <SelectItem value="policymaker">Policymaker & Environmental Regulator</SelectItem>
                  <SelectItem value="energy">MEP & Energy Manager</SelectItem>
                  <SelectItem value="carbon">Carbon Project Developer</SelectItem>
                  <SelectItem value="finance">Climate Finance Professional</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 bg-white">
              <Label htmlFor="experience">Experience Level *</Label>
              <Select onValueChange={(value) => handleInputChange("experience", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <span>Location</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="uae">United Arab Emirates</SelectItem>
                    <SelectItem value="saudi">Saudi Arabia</SelectItem>
                    <SelectItem value="qatar">Qatar</SelectItem>
                    <SelectItem value="kuwait">Kuwait</SelectItem>
                    <SelectItem value="bahrain">Bahrain</SelectItem>
                    <SelectItem value="oman">Oman</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                  placeholder="Your city"
                />
              </div>
            </div>
          </div>

          {/* Workshop Expectations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Workshop Expectations</h3>
            <div className="space-y-2">
              <Label htmlFor="expectations">What do you hope to achieve from this workshop?</Label>
              <Textarea
                id="expectations"
                value={formData.expectations}
                onChange={(e) => handleInputChange("expectations", e.target.value)}
                placeholder="Tell us about your goals and expectations..."
                rows={3}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Additional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="dietaryRequirements">Special Requirements or Notes</Label>
              <Textarea
                id="dietaryRequirements"
                value={formData.dietaryRequirements}
                onChange={(e) => handleInputChange("dietaryRequirements", e.target.value)}
                placeholder="Any special requirements, accessibility needs, or additional notes..."
                rows={2}
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                required
              />
              <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Privacy Policy
                </a>
                . I understand that payment is required to secure my spot. *
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeMarketing"
                checked={formData.agreeMarketing}
                onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked)}
              />
              <Label htmlFor="agreeMarketing" className="text-sm leading-relaxed">
                I would like to receive updates about future SABZA workshops and events.
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="submit"
              disabled={isSubmitting || !formData.agreeTerms}
              className="bg-green-600 hover:bg-green-700 text-white flex-1"
            >
              {isSubmitting ? "Processing Registration..." : "Complete Registration"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Cancel
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            After registration, you will receive payment instructions via email.
            <br />
            Workshop access will be provided upon payment confirmation.
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
