"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

const PartnerCarousel = ({ className = "" }) => {
  const [slidesPerView, setSlidesPerView] = useState(5)

  // Adjust slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(2)
      } else if (window.innerWidth < 768) {
        setSlidesPerView(3)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(4)
      } else {
        setSlidesPerView(5)
      }
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Sample partner companies - replace with your actual partners
  const partners = [
    {
      id: 1,
      name: "Shopee Express",
      logo: "/spx.png?height=80&width=150",
    },
    // {
    //   id: 2,
    //   name: "SiCepat",
    //   logo: "/sicepat.png?height=80&width=150",
    // },
    // {
    //   id: 3,
    //   name: "Company Three",
    //   logo: "/placeholder.svg?height=80&width=150",
    // },
    // {
    //   id: 4,
    //   name: "Company Four",
    //   logo: "/placeholder.svg?height=80&width=150",
    // },
    // {
    //   id: 5,
    //   name: "Company Five",
    //   logo: "/placeholder.svg?height=80&width=150",
    // },
    // {
    //   id: 6,
    //   name: "Company Six",
    //   logo: "/placeholder.svg?height=80&width=150",
    // },
    // {
    //   id: 7,
    //   name: "Company Seven",
    //   logo: "/placeholder.svg?height=80&width=150",
    // },
    // {
    //   id: 8,
    //   name: "Company Eight",
    //   logo: "/placeholder.svg?height=80&width=150",
    // },
  ]

  return (
    <section className={`py-12 bg-secondary ${className}`} data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Our Trusted Partners</h2>
          <p className="text-text-secondary">Bekerja sama dengan perusahaan terkemuka di Indonesia</p>
        </div>

        <div className="relative px-10" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // ini biar partner ketengah (kalau dikit)
            centeredSlides={true}
            className="partner-carousel"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="flex items-center justify-center p-4 bg-transparent rounded-lg h-24 transition-transform hover:scale-105">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !text-primary !w-8 !h-8 !bg-accent rounded-full flex items-center justify-center !left-0">
            <span className="sr-only">Previous</span>
          </div>
          <div className="swiper-button-next !text-primary !w-8 !h-8 !bg-accent rounded-full flex items-center justify-center !right-0">
            <span className="sr-only">Next</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerCarousel

