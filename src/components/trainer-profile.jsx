
import { LinkedinIcon } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function TrainerProfile() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        {" "}
        {/* Ensure container is centered */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center mb-12 text-black">
          Trainers Profile
        </h2>
        <div className="mx-auto max-w-4xl bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          {" "}
          {/* Softer shadow and rounded corners */}
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {" "}
            {/* Grid for image and text */}
            <div className="flex justify-center mr-2 md:justify-end">
              {" "}
              {/* Center image on small screens, right-align on medium */}
            <Avatar className="w-50 h-50 md:w-90 md:h-90 rounded-none">
  <AvatarImage src="/zafarfinal.png" alt="Zafar Imran" className="rounded-none" />
</Avatar>

            </div>
            <div className="space-y-4 text-center md:text-left">
              {" "}
              {/* Center text on small screens, left-align on medium */}
              <h3 className="text-2xl font-bold text-green-700">Zafar Imran - Master Trainer</h3>
             <a
  href="https://www.linkedin.com/in/zafar-imran-248b121/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
>
  <LinkedinIcon className="w-5 h-5" />
  LinkedIn Profile
</a>

              <p className="text-muted-foreground leading-relaxed">
                Zafar has 30+ years of global experience in consulting, training, and advisory. He has experience with
                large enterprise customers, including businesses and governments & international organisations. For the
                last 10 years, he has been focused on climate change initiatives and leading transformative programmes
                that redefine innovation by leveraging AI, blockchain & IOT technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over three years at SABZA, he has spearheaded global initiatives in climate change, digital
                transformation, and AI-driven solutions across multiple continents. His work emphasises sustainability,
                technology adoption, and strategic partnerships to tackle critical challenges like carbon reduction and
                capacity building for governments and corporations alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
