import DescriptionContent from "../components/DescriptionContent"
import DescriptionContentBot from "../components/DescriptionContentBot"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import CargoSearch from "../components/CargoSearch"

function Kalimantan() {
  const descriptionItemsBot = [
    {
      content: [
        "Ekspedisi Jakarta ke Kalimantan – Sejak didirikan pada tahun 2010, Kalimantan menjadi pulau kedua yang menjadi tujuan pengiriman Sprint Cargo setelah Pulau Jawa. Sebelum memperluas layanan ke berbagai wilayah lain seperti Sumatera, Bali, Sulawesi, Maluku, dan Papua, Sprint Cargo sudah lebih dulu membangun jaringan pengiriman yang kuat di Pulau Kalimantan.",
        "Proses pengiriman ke Kalimantan umumnya menggunakan jalur laut, mencakup seluruh provinsi di pulau ini, yaitu: Kalimantan Timur, Kalimantan Selatan, Kalimantan Barat, Kalimantan Tengah, dan Kalimantan Utara.",
        "Barang dikirim dari Jakarta menuju pelabuhan tujuan yang telah ditentukan. Sebelum sampai ke alamat penerima, barang akan melewati beberapa tahapan, termasuk proses sortir dan perpindahan pengiriman menggunakan armada trucking untuk distribusi akhir.",
      ],
    },
  ]

  const descriptionItems = [
    {
      content: [
        "Ekspedisi Jakarta ke Kalimantan – Sejak berdiri pada tahun 2010, Kalimantan menjadi pulau kedua yang menjadi tujuan utama pengiriman Sprint Cargo setelah Pulau Jawa. Sebelum layanan kami menjangkau seluruh Indonesia seperti Sumatera, Bali, Sulawesi, Maluku, Papua, dan wilayah lainnya, Sprint Cargo sudah lebih dulu membangun jaringan logistik yang kuat di Kalimantan.",
        "Proses pengiriman ke Kalimantan sebagian besar menggunakan jalur laut dan mencakup semua provinsi, yaitu: Kalimantan Timur, Kalimantan Selatan, Kalimantan Barat, Kalimantan Tengah, dan Kalimantan Utara.",
        "Barang dikirim dari Jakarta menuju pelabuhan yang ditunjuk, sebelum kemudian didistribusikan ke alamat penerima. Sebelum sampai tujuan, barang akan melalui beberapa tahapan seperti proses sortir dan perpindahan menggunakan armada trucking.",
      ],
    },
    // ... rest of the descriptionItems array (truncated for brevity)
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Ekspedisi Jakarta ke Kalimantan Murah dan Cepat"
        description="Sprint Cargo melayani pengiriman dari Jakarta ke Balikpapan, Banjarmasin, Pontianak, Sampit, dan Tarakan dengan tarif hemat dan pengiriman tepat waktu."
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

export default Kalimantan

