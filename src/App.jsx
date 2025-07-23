import { AboutSection } from "./components/about-section";
import { CallToAction } from "./components/call-to-action";
import { CaseStudies } from "./components/case-studies";
import { ContactRegistration } from "./components/contact-registration";
import { Footer } from "./components/footer";
import { HandsOnLabs } from "./components/hands-on-labs";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { InvestmentCertification } from "./components/investment-certification";
import WebinarTeaser from "./components/webinar-teaser";
import { WorkshopAgenda } from "./components/workshop-agenda";
import { WorkshopOverview } from "./components/workshop-overview";


export default function SabzaWorkshopLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkshopOverview />
      <WorkshopAgenda />
      <CaseStudies />
      <HandsOnLabs />
      <InvestmentCertification />
       <WebinarTeaser />
      <ContactRegistration />
      <CallToAction />
      <Footer />
    </div>
  )
}
