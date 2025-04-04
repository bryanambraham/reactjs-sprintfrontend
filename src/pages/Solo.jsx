import DescriptionContent from "../components/DescriptionContent"
import DescriptionContentBot from "../components/DescriptionContentBot"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import CargoSearch from "../components/CargoSearch"
import { useScrollAnimation } from "../hooks/usescrollanimation"

function Solo() {
  // Initialize scroll animations
  useScrollAnimation()

  const descriptionItemsBot = [
    {
      content: [
        "Ekspedisi Jakarta ke Solo – Sprint Cargo menyediakan layanan pengiriman barang dari Jakarta ke Solo (Surakarta) dengan layanan cepat, aman, dan tarif terjangkau. Dengan pengalaman bertahun-tahun di industri logistik, kami menjadi pilihan utama untuk ekspedisi ke kota budaya ini.",
        "Proses pengiriman ke Solo dilakukan melalui jalur darat menggunakan armada trucking yang efisien dengan estimasi waktu pengiriman 1-2 hari. Kami melayani pengiriman ke seluruh area Solo, termasuk Kota Surakarta dan sekitarnya.",
        "Pengiriman dilakukan dari Jakarta menuju hub distribusi di Solo sebelum diteruskan ke alamat penerima. Sprint Cargo memastikan setiap pengiriman dilakukan dengan prosedur standar dan melewati tahap sortir untuk menjaga ketepatan dan keamanan barang.",
      ],
    },
  ]

  const descriptionItems = [
    {
      title: "Jasa Pengiriman Barang ke Solo Terbaik Pilihan Pelanggan",
      content: [
        "Sprint Cargo adalah pilihan terbaik untuk jasa ekspedisi dari Jakarta ke Solo dengan layanan profesional, tarif kompetitif, dan jaminan keamanan barang.",
        "Kami menawarkan berbagai metode pengiriman, mulai dari trucking reguler, cargo ekspres, hingga pengiriman khusus untuk kebutuhan pengiriman yang lebih cepat.",
        "Dengan jaringan distribusi yang luas, kami melayani pengiriman ke seluruh wilayah Solo, termasuk area pusat kota, kawasan industri, dan pedesaan.",
      ],
    },
    {
      title: "Rute Ekspedisi Jakarta ke Solo",
      content: [
        "Pengiriman dari Jakarta ke Solo menggunakan jalur darat melalui Tol Trans Jawa dengan sistem pengiriman reguler maupun ekspres.",
        "Barang dikirim dari Jakarta menuju hub distribusi di Solo sebelum didistribusikan ke alamat penerima di berbagai lokasi seperti Laweyan, Serengan, Pasar Kliwon, Jebres, Banjarsari, dan area lainnya.",
        "Setelah sampai di hub distribusi Solo, barang akan melalui tahap sortir sebelum dikirimkan ke alamat penerima dengan estimasi waktu yang cepat.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Darat ke Solo",
      content: [
        "Sprint Cargo menyediakan layanan trucking untuk pengiriman barang dari Jakarta ke Solo dengan harga terjangkau dan pengiriman tepat waktu.",
        "Kami menggunakan berbagai jenis armada, seperti truk CDD, CDE, truk wingbox, hingga fuso untuk memastikan fleksibilitas pengiriman sesuai kebutuhan pelanggan.",
        "Jalur darat menjadi pilihan utama karena lebih cepat, hemat biaya, dan bisa menjangkau seluruh area di Solo dan sekitarnya.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Ekspres ke Solo",
      content: [
        "Bagi pelanggan yang membutuhkan pengiriman cepat, Sprint Cargo menyediakan layanan cargo ekspres dari Jakarta ke Solo dengan estimasi pengiriman 1 hari.",
        "Layanan ini ideal untuk pengiriman dokumen penting, barang bernilai tinggi, atau kebutuhan mendesak lainnya.",
        "Kami menggunakan armada khusus untuk memastikan pengiriman ekspres tiba tepat waktu di tujuan.",
      ],
    },
    {
      title: "Jasa Ekspedisi Kirim Mobil ke Solo",
      content: [
        "Sprint Cargo menyediakan layanan pengiriman mobil dari Jakarta ke Solo dengan metode pengiriman yang aman dan terpercaya.",
        "Pilihan metode pengiriman mencakup car towing, car carrier, dan self drive untuk memastikan kendaraan tiba dalam kondisi prima.",
        "Kami juga menawarkan layanan door-to-door untuk kenyamanan pelanggan.",
      ],
    },
    {
      title: "Keunggulan Menggunakan Jasa Ekspedisi Sprint Cargo ke Solo",
      content: [
        <ol className="list-decimal pl-5 space-y-2 text-text-primary" key="keunggulan-list">
          <li>
            <strong>Gratis Jemput Barang</strong> – Tidak perlu repot mengantar barang ke gudang ekspedisi. Sprint Cargo
            menyediakan layanan penjemputan barang langsung dari lokasi Anda di Jakarta.
          </li>
          <li>
            <strong>Gratis Asuransi</strong> – Untuk pengiriman dengan nilai tertentu, Sprint Cargo memberikan asuransi
            gratis guna menjamin keamanan barang selama perjalanan.
          </li>
          <li>
            <strong>Estimasi Pengiriman Cepat</strong> – Dengan jalur darat yang optimal melalui Tol Trans Jawa,
            pengiriman ke Solo bisa dilakukan dalam waktu 1-2 hari dengan estimasi yang jelas.
          </li>
          <li>
            <strong>Berbagai Pilihan Pengiriman</strong> – Anda bisa memilih layanan pengiriman reguler, ekspres, atau
            kargo sesuai dengan kebutuhan dan anggaran.
          </li>
          <li>
            <strong>Dukungan Customer Service</strong> – Tim kami siap membantu Anda 24/7 untuk menjawab pertanyaan dan
            memberikan solusi terbaik terkait pengiriman barang.
          </li>
        </ol>,
      ],
    },
    {
      title: "Jenis Barang yang Sering Dikirim ke Solo",
      content: ["Sprint Cargo melayani pengiriman berbagai jenis barang dari Jakarta ke Solo, termasuk:"],
      list: [
        "Produk tekstil dan batik untuk distribusi",
        "Barang kerajinan dan oleh-oleh khas Solo",
        "Furniture dan peralatan rumah tangga",
        "Dokumen dan paket bisnis",
        "Makanan dan minuman kemasan",
        "Peralatan elektronik dan gadget",
        "Perlengkapan hotel dan penginapan",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-secondary">
      <HeroSection
        title="Jasa Ekspedisi Jakarta ke Solo Cepat dan Terpercaya"
        description="Sprint Cargo siap mengirim barang dari Jakarta ke Solo dengan layanan aman, cepat, dan harga terjangkau. Estimasi pengiriman 1-2 hari dengan jaminan barang sampai dengan aman."
        button={{
          text: "Hubungi CS Kami",
          href: "https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <section className="py-6 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" data-aos="fade-up">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none text-text-primary" />
        </div>
        <div className="py-8 mb-8" data-aos="fade-up" data-aos-delay="200">
          <CargoSearch />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" data-aos="fade-up" data-aos-delay="300">
          <DescriptionContentBot items={descriptionItemsBot} className="prose prose-lg max-w-none text-text-primary" />
        </div>
        <div className="flex justify-center mt-6" data-aos="zoom-in" data-aos-delay="400">
          <button className="my-4 max-w-3xl flex justify-center items-center text-xl p-3 bg-primary rounded-md text-white transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105 shadow-lg">
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

export default Solo

