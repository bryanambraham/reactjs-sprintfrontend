import DescriptionContent  from "../components/DescriptionContent"
import DescriptionContentBot from "../components/DescriptionContentBot"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import CargoSearch from "../components/CargoSearch"

function Jawa() {
  const descriptionItemsBot = [
    {
      content: [
        "Ekspedisi Jakarta ke Jawa – Sprint Cargo melayani pengiriman barang dari Jakarta ke berbagai kota di Pulau Jawa dengan layanan cepat, aman, dan tarif terjangkau. Dengan pengalaman bertahun-tahun di industri logistik, kami menjadi pilihan utama untuk ekspedisi ke Jawa Barat, Jawa Tengah, dan Jawa Timur.",
        "Proses pengiriman ke Jawa umumnya dilakukan melalui jalur darat menggunakan armada trucking yang efisien dan kapal laut untuk tujuan tertentu. Kami melayani pengiriman ke berbagai kota besar seperti Bandung, Semarang, Yogyakarta, Surabaya, hingga ke kota-kota lainnya di seluruh Pulau Jawa.",
        "Pengiriman dilakukan dari Jakarta menuju titik distribusi di masing-masing provinsi sebelum diteruskan ke alamat penerima. Sprint Cargo memastikan setiap pengiriman dilakukan dengan prosedur standar dan melewati tahap sortir untuk menjaga ketepatan dan keamanan barang.",
      ],
    },
  ]

  const descriptionItems = [
    {
      title: "Jasa Pengiriman Barang ke Jawa Terbaik Pilihan Pelanggan",
      content: [
        "Sprint Cargo adalah pilihan terbaik untuk jasa ekspedisi dari Jakarta ke Jawa dengan layanan profesional, tarif kompetitif, dan jaminan keamanan barang.",
        "Kami menawarkan berbagai metode pengiriman, mulai dari trucking, cargo laut, hingga ekspedisi udara untuk kebutuhan pengiriman yang lebih cepat.",
        "Dengan jaringan distribusi yang luas, kami melayani pengiriman ke berbagai kota dan kabupaten di Jawa Barat, Jawa Tengah, dan Jawa Timur.",
      ],
    },
    // ... rest of the descriptionItems array (truncated for brevity)
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Jasa Ekspedisi Jakarta ke Jawa Cepat dan Terpercaya"
        description="Sprint Cargo siap mengirim barang dari Jakarta ke berbagai kota di Jawa Barat, Jawa Tengah, dan Jawa Timur, termasuk Bandung, Semarang, Yogyakarta, dan Surabaya dengan layanan aman, cepat, dan harga terjangkau."
        button={{
          text: "Hubungi CS Kami",
          href: "https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none" />
        </div>
        <div className="py-8 mb-8">
          <CargoSearch />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContentBot items={descriptionItemsBot} className="prose prose-lg max-w-none" />
        </div>
        <div className="flex justify-center mt-6">
          <button className="my-4 max-w-3xl flex justify-center items-center text-xl p-3 bg-red-600 rounded-md text-white transition duration-300 ease-in-out transform hover:bg-red-700 hover:scale-105 shadow-lg">
            <a href="/calculator" className="w-full h-full flex items-center justify-center">
              Calculator Cargo
            </a>
          </button>
        </div>
      </section>

      <WhyChooseHero />
    </div>
  )
}

export default Jawa

