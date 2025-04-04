import DescriptionContent from "../components/DescriptionContent"
import DescriptionContentBot from "../components/DescriptionContentBot"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import CargoSearch from "../components/CargoSearch"
import { useScrollAnimation } from "../hooks/usescrollanimation"

function Karangasem() {
  // Initialize scroll animations
  useScrollAnimation()

  const descriptionItemsBot = [
    {
      content: [
        "Ekspedisi Jakarta ke Karangasem – Sprint Cargo menyediakan layanan pengiriman barang dari Jakarta ke Karangasem dengan layanan cepat, aman, dan tarif terjangkau. Dengan pengalaman bertahun-tahun di industri logistik, kami menjadi pilihan utama untuk ekspedisi ke kawasan timur Bali ini.",
        "Proses pengiriman ke Karangasem dilakukan melalui jalur darat dan laut, dengan armada trucking yang efisien dari Jakarta menuju Pelabuhan Ketapang, dilanjutkan dengan kapal ferry ke Pelabuhan Gilimanuk, dan akhirnya ke Karangasem. Estimasi waktu pengiriman adalah 3-5 hari. Kami melayani pengiriman ke seluruh area Karangasem, termasuk Amlapura, Candidasa, Amed, dan sekitarnya.",
        "Pengiriman dilakukan dari Jakarta menuju hub distribusi di Bali sebelum diteruskan ke alamat penerima di Karangasem. Sprint Cargo memastikan setiap pengiriman dilakukan dengan prosedur standar dan melewati tahap sortir untuk menjaga ketepatan dan keamanan barang.",
      ],
    },
  ]

  const descriptionItems = [
    {
      title: "Jasa Pengiriman Barang ke Karangasem Terbaik Pilihan Pelanggan",
      content: [
        "Sprint Cargo adalah pilihan terbaik untuk jasa ekspedisi dari Jakarta ke Karangasem dengan layanan profesional, tarif kompetitif, dan jaminan keamanan barang.",
        "Kami menawarkan berbagai metode pengiriman, mulai dari trucking dan kapal laut, hingga ekspedisi udara untuk kebutuhan pengiriman yang lebih cepat.",
        "Dengan jaringan distribusi yang luas, kami melayani pengiriman ke seluruh wilayah Karangasem, termasuk area wisata, kawasan pertanian, dan pedesaan.",
      ],
    },
    {
      title: "Rute Ekspedisi Jakarta ke Karangasem",
      content: [
        "Pengiriman dari Jakarta ke Karangasem menggunakan kombinasi jalur darat dan laut. Barang dikirim dari Jakarta menuju Pelabuhan Ketapang (Banyuwangi) menggunakan truk, kemudian menyeberang ke Pelabuhan Gilimanuk menggunakan kapal ferry, dan dilanjutkan ke Karangasem.",
        "Barang dikirim dari Jakarta menuju hub distribusi di Bali sebelum didistribusikan ke alamat penerima di berbagai lokasi di Karangasem seperti Amlapura, Candidasa, Amed, Tulamben, dan area lainnya.",
        "Setelah sampai di hub distribusi, barang akan melalui tahap sortir sebelum dikirimkan ke alamat penerima dengan estimasi waktu yang cepat.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Laut ke Karangasem",
      content: [
        "Sprint Cargo menyediakan layanan cargo laut untuk pengiriman barang dari Jakarta ke Karangasem dengan harga terjangkau dan pengiriman tepat waktu.",
        "Kami menggunakan kapal Roro dan kapal cargo untuk memastikan pengiriman efisien dan biaya lebih hemat, terutama untuk barang dengan volume besar.",
        "Jalur laut menjadi pilihan utama karena lebih hemat biaya dan bisa mengangkut berbagai jenis barang, termasuk kendaraan dan alat berat.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Udara ke Karangasem",
      content: [
        "Bagi pelanggan yang membutuhkan pengiriman cepat, Sprint Cargo menyediakan layanan cargo udara dari Jakarta ke Bandara Ngurah Rai, dilanjutkan dengan pengiriman darat ke Karangasem.",
        "Layanan ini ideal untuk pengiriman dokumen penting, barang bernilai tinggi, atau kebutuhan mendesak lainnya dengan estimasi pengiriman 1-2 hari.",
        "Kami bekerja sama dengan maskapai penerbangan terkemuka untuk memastikan setiap pengiriman mendapatkan prioritas.",
      ],
    },
    {
      title: "Keunggulan Menggunakan Jasa Ekspedisi Sprint Cargo ke Karangasem",
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
            <strong>Estimasi Pengiriman Jelas</strong> – Dengan berbagai pilihan jalur pengiriman, kami memberikan
            estimasi waktu yang jelas sesuai dengan metode pengiriman yang dipilih.
          </li>
          <li>
            <strong>Berbagai Pilihan Pengiriman</strong> – Anda bisa memilih layanan pengiriman darat, laut, udara, atau
            ekspres sesuai dengan kebutuhan dan anggaran.
          </li>
          <li>
            <strong>Dukungan Customer Service</strong> – Tim kami siap membantu Anda 24/7 untuk menjawab pertanyaan dan
            memberikan solusi terbaik terkait pengiriman barang.
          </li>
        </ol>,
      ],
    },
    {
      title: "Jenis Barang yang Sering Dikirim ke Karangasem",
      content: ["Sprint Cargo melayani pengiriman berbagai jenis barang dari Jakarta ke Karangasem, termasuk:"],
      list: [
        "Perlengkapan hotel dan villa",
        "Peralatan diving dan snorkeling",
        "Peralatan elektronik dan gadget",
        "Furniture dan peralatan rumah tangga",
        "Dokumen dan paket bisnis",
        "Makanan dan minuman kemasan",
        "Perlengkapan pertanian dan perkebunan",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-secondary">
      <HeroSection
        title="Jasa Ekspedisi Jakarta ke Karangasem Cepat dan Terpercaya"
        description="Sprint Cargo siap mengirim barang dari Jakarta ke Karangasem dengan layanan aman, cepat, dan harga terjangkau. Estimasi pengiriman 3-5 hari dengan jaminan barang sampai dengan aman."
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

export default Karangasem

