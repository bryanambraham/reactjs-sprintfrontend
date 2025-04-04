import DescriptionContent from "../components/DescriptionContent"
import DescriptionContentBot from "../components/DescriptionContentBot"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import CargoSearch from "../components/CargoSearch"
import { useScrollAnimation } from "../hooks/usescrollanimation"

function Surabaya() {
  // Initialize scroll animations
  useScrollAnimation()

  const descriptionItemsBot = [
    {
      content: [
        "Ekspedisi Jakarta ke Surabaya – Sprint Cargo menyediakan layanan pengiriman barang dari Jakarta ke Surabaya dengan layanan cepat, aman, dan tarif terjangkau. Dengan pengalaman bertahun-tahun di industri logistik, kami menjadi pilihan utama untuk ekspedisi ke kota terbesar kedua di Indonesia ini.",
        "Proses pengiriman ke Surabaya dilakukan melalui jalur darat menggunakan armada trucking yang efisien dengan estimasi waktu pengiriman 2-3 hari. Kami melayani pengiriman ke seluruh area Surabaya, termasuk Surabaya Pusat, Surabaya Timur, Surabaya Barat, Surabaya Utara, dan Surabaya Selatan.",
        "Pengiriman dilakukan dari Jakarta menuju hub distribusi di Surabaya sebelum diteruskan ke alamat penerima. Sprint Cargo memastikan setiap pengiriman dilakukan dengan prosedur standar dan melewati tahap sortir untuk menjaga ketepatan dan keamanan barang.",
      ],
    },
  ]

  const descriptionItems = [
    {
      title: "Jasa Pengiriman Barang ke Surabaya Terbaik Pilihan Pelanggan",
      content: [
        "Sprint Cargo adalah pilihan terbaik untuk jasa ekspedisi dari Jakarta ke Surabaya dengan layanan profesional, tarif kompetitif, dan jaminan keamanan barang.",
        "Kami menawarkan berbagai metode pengiriman, mulai dari trucking reguler, cargo laut, hingga ekspedisi udara untuk kebutuhan pengiriman yang lebih cepat.",
        "Dengan jaringan distribusi yang luas, kami melayani pengiriman ke seluruh wilayah Surabaya, termasuk area industri, pelabuhan, dan perumahan.",
      ],
    },
    {
      title: "Rute Ekspedisi Jakarta ke Surabaya",
      content: [
        "Pengiriman dari Jakarta ke Surabaya menggunakan jalur darat melalui Tol Trans Jawa dengan sistem pengiriman reguler maupun ekspres.",
        "Barang dikirim dari Jakarta menuju hub distribusi di Surabaya sebelum didistribusikan ke alamat penerima di berbagai lokasi seperti Tanjung Perak, Rungkut, Waru, Sidoarjo, dan area lainnya.",
        "Setelah sampai di hub distribusi Surabaya, barang akan melalui tahap sortir sebelum dikirimkan ke alamat penerima dengan estimasi waktu yang cepat.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Darat ke Surabaya",
      content: [
        "Sprint Cargo menyediakan layanan trucking untuk pengiriman barang dari Jakarta ke Surabaya dengan harga terjangkau dan pengiriman tepat waktu.",
        "Kami menggunakan berbagai jenis armada, seperti truk CDD, CDE, truk wingbox, hingga fuso untuk memastikan fleksibilitas pengiriman sesuai kebutuhan pelanggan.",
        "Jalur darat menjadi pilihan utama karena lebih hemat biaya dan bisa menjangkau seluruh area di Surabaya dan sekitarnya.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Laut ke Surabaya",
      content: [
        "Bagi pelanggan yang mengirimkan barang dalam jumlah besar, Sprint Cargo juga menyediakan layanan cargo laut dari Jakarta ke Pelabuhan Tanjung Perak Surabaya.",
        "Layanan ini ideal untuk pengiriman barang dengan volume besar atau alat berat yang tidak memungkinkan dikirim melalui jalur darat.",
        "Kami menggunakan kapal Roro dan kapal cargo untuk memastikan pengiriman efisien dan biaya lebih hemat.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Udara ke Surabaya",
      content: [
        "Sprint Cargo juga melayani ekspedisi cargo udara dari Jakarta ke Bandara Juanda Surabaya untuk pengiriman yang membutuhkan kecepatan.",
        "Layanan ini sangat cocok untuk barang bernilai tinggi atau kebutuhan pengiriman cepat dengan target waktu yang ketat.",
        "Kami bekerja sama dengan maskapai penerbangan terkemuka untuk memastikan setiap pengiriman mendapatkan prioritas.",
      ],
    },
    {
      title: "Jasa Ekspedisi Kirim Mobil ke Surabaya",
      content: [
        "Sprint Cargo menyediakan layanan pengiriman mobil dari Jakarta ke Surabaya dengan metode pengiriman yang aman dan terpercaya.",
        "Pilihan metode pengiriman mencakup car towing, car carrier, self drive, kapal Roro, dan container untuk memastikan kendaraan tiba dalam kondisi prima.",
        "Kami juga menawarkan layanan door-to-door untuk kenyamanan pelanggan.",
      ],
    },
    {
      title: "Keunggulan Menggunakan Jasa Ekspedisi Sprint Cargo ke Surabaya",
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
      title: "Jenis Barang yang Sering Dikirim ke Surabaya",
      content: ["Sprint Cargo melayani pengiriman berbagai jenis barang dari Jakarta ke Surabaya, termasuk:"],
      list: [
        "Barang industri dan manufaktur untuk kawasan industri Surabaya",
        "Peralatan elektronik dan gadget",
        "Furniture dan peralatan rumah tangga",
        "Dokumen dan paket bisnis",
        "Makanan dan minuman kemasan",
        "Sparepart kendaraan dan mesin",
        "Peralatan medis dan kesehatan",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-secondary">
      <HeroSection
        title="Jasa Ekspedisi Jakarta ke Surabaya Cepat dan Terpercaya"
        description="Sprint Cargo siap mengirim barang dari Jakarta ke Surabaya dengan layanan aman, cepat, dan harga terjangkau. Estimasi pengiriman 2-3 hari dengan jaminan barang sampai dengan aman."
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

export default Surabaya

