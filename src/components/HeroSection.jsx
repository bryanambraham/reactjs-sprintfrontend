import { Check } from "lucide-react"

const HeroSection = ({
  title,
  description,
  subDescription,
  features = [],
  button,
  certifications = [],
  imageUrl = "/placeholder.svg",
  imageAlt = "Hero Image",
  backgroundPattern = true,
  className = "",
}) => {
  return (
    <section className={`relative bg-secondary overflow-hidden ${className}`}>
      {/* Background circles */}
      {backgroundPattern && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -bottom-1/4 w-2/3 h-2/3 bg-accent rounded-full opacity-10" />
          <div className="absolute -right-1/3 -top-1/4 w-2/3 h-2/3 bg-accent rounded-full opacity-10" />
        </div>
      )}

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-24">
          <div className="text-text-primary space-y-6" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>

            <div className="space-y-4">
              <p className="text-lg md:text-xl">{description}</p>
              {subDescription && <p className="font-semibold">{subDescription}</p>}
            </div>

            {features.length > 0 && (
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2" data-aos="fade-up" data-aos-delay={index * 100}>
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            )}

            {button && (
              <a
                href={button.href}
                className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {button.text}
              </a>
            )}

            {certifications.length > 0 && (
              <div className="flex items-center gap-4 pt-8" data-aos="fade-up" data-aos-delay="400">
                {certifications.map((cert, index) => (
                  <img key={index} src={cert.imageUrl || "/placeholder.svg"} alt={cert.alt} className="w-52 h-auto" />
                ))}
              </div>
            )}
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="aspect-square rounded-full overflow-hidden">
              <img src={imageUrl || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

