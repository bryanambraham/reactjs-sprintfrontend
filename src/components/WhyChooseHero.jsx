import { Check } from "lucide-react"

const WhyChooseHero = ({ className = "" }) => {
  return (
    <section className={`relative bg-primary/40 overflow-hidden py-12 ${className}`}>
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -bottom-1/4 w-2/3 h-2/3 bg-primary-light rounded-full opacity-20" />
        <div className="absolute -right-1/3 -top-1/4 w-2/3 h-2/3 bg-white rounded-full opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold bg-secondary text-white p-4 mb-8 rounded-sm" data-aos="fade-down">
            Kenapa Harus Pilih Sprint Cargo?
          </h2>
          <hr className="border-t-4 border-white/20 mt-[-20] max-w-lg" />
          {/* Benefits List */}
          <div className="space-y-6 py-3 text-white">
            <div className="flex items-start gap-2" data-aos="fade-right" data-aos-delay="100">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Gratis Jemput Barang</span> Bikin Kamu Gausah Ribet Keluar Rumah Dan Lebih
                Hemat Budget.
              </div>
            </div>

            {/* <div className="flex items-start gap-2" data-aos="fade-right" data-aos-delay="200">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                Kirim Barang Makin Aman Dengan{" "}
                <a href="#" className="underline font-bold hover:text-gray-100">
                  Gratis Asuransi Untuk Barang Dibawah 50jt.
                </a>
              </div>
            </div> */}

            <div className="flex items-start gap-2" data-aos="fade-right" data-aos-delay="300">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <a href="#" className="underline font-bold hover:text-gray-100">
                  Legalitas Perusahaan Lengkap
                </a>{" "}
                Bikin Kamu Gak Khawatir Mau Kirim Bukan?
              </div>
            </div>

            <div className="flex items-start gap-2" data-aos="fade-right" data-aos-delay="400">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <a href="#" className="underline font-bold hover:text-gray-100">
                  Gudang Luas Dan Mudah Diakses
                </a>
                , Yuk Mampir!
              </div>
            </div>
          </div>

          {/* WhatsApp Button with Animated Arrows */}
          <div className="relative mt-12 flex justify-center items-center" data-aos="zoom-in" data-aos-delay="500">
            {/* Animated Arrows */}
            <div className="absolute -top-16">
              <div className="relative w-24 h-24">
                <img src="/arrow-down-animated.gif" alt="Arrow pointing to WhatsApp button" className="w-full h-full" />
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
              className="inline-flex mt-10 items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi CS Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseHero

