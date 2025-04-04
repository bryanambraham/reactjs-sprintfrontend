"use client"

import { useState } from "react"
import { CreditCard, Package, MessageSquare, Play } from "lucide-react"

const ShippingSolution = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left side - Image and Video */}
          <div className="relative w-full" data-aos="fade-right">
            {/* Staff Image */}
            <img src="/staffsprint.jpg" alt="SprintCargo Staff" className="object-cover w-1/2 rounded-lg" />

            {/* Video Thumbnail / Player */}
            <div
              className="absolute bottom-[-40px] left-10 w-[350px] sm:w-[400px] rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {!isPlaying ? (
                <div className="relative w-full h-full">
                  <img
                    src={`https://img.youtube.com/vi/VKGQHTwB8p4/maxresdefault.jpg`}
                    alt="YouTube Thumbnail"
                    className="object-cover w-full h-full"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      onClick={handlePlayClick}
                    >
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </button>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={`https://www.youtube.com/embed/VKGQHTwB8p4?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-text-primary" data-aos="fade-left">
            <h2 className="text-4xl font-bold mb-12">
              Solusi Pengiriman Barang
              <br />
              Dengan 3S :
            </h2>

            <div className="space-y-12">
              {/* Efisien */}
              <div className="flex gap-6" data-aos="fade-up" data-aos-delay="100">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">EFISIEN</h3>
                  <p className="text-text-secondary">
                    SprintCargo menawarkan layanan pengiriman yang efisien dengan pilihan armada yang sesuai untuk memenuhi kebutuhan Anda.
                  </p>
                </div>
              </div>

              {/* Elegan */}
              <div className="flex gap-6" data-aos="fade-up" data-aos-delay="200">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">ELEGAN</h3>
                  <p className="text-text-secondary">
                    Nikmati pengalaman pengiriman barang yang elegan dan profesional. Kami memberikan layanan antar jemput barang tanpa biaya tambahan di DKI Jakarta.
                  </p>
                </div>
              </div>

              {/* Ekonomis */}
              <div className="flex gap-6" data-aos="fade-up" data-aos-delay="300">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">EKONOMIS</h3>
                  <p className="text-text-secondary">
                    Dengan SprintCargo, Anda dapat mengirimkan barang dengan harga yang ekonomis tanpa mengorbankan kualitas layanan.
                  </p>
                </div>
              </div>
            </div>


            {/* Contact Button */}
            <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="400">
              <a
                href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
                className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
              >
                HUBUNGI CS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShippingSolution

