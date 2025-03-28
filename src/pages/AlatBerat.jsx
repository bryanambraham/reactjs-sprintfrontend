import DescriptionContent from "../components/DescriptionContent"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"

function AlatBerat() {
  const descriptionItems = [
    {
      content: [
        "Jasa Kirim Alat Berat – Jika membahas alat berat mungkin kita langsung berkesimpulan bahwa alat ini berukuran besar, berat, mahal, dan pengoperasiannya membutuhkan keahlian khusus. Memang benar, tapi apakah kita tahu apa saja yang termasuk jenis alat berat dan apa kegunaan masing-masing alat tersebut?",
        "Saat ini pendistribusian alat berat ke luar pulau semakin marak. Sudah pasti ini berkaitan dengan berbagai bidang usaha seperti pertambangan, pembangunan real estate, pabrik, gedung bertingkat dan sejenisnya yang harus melibatkan alat berat.",
        "Di Indonesia penggunaan alat berat adalah hal biasa untuk mengerjakan pekerjaan yang tidak mampu diselesaikan oleh tenaga manusia. Dengan demikian tujuan penggunaan alat-alat ini sudah pasti untuk mempermudah pekerjaan, mengurangi tenaga manusia dan juga efisiensi waktu.",
      ],
    },
    {
      title: "Didesain untuk Mengerjakan Tugas Konstruksi",
      content: [
        "Secara spesifik alat berat merupakan mesin berukuran besar dan didesain khusus untuk mengerjakan tugas-tugas yang berkaitan dengan konstruksi, misalnya pemindahan bahan bangunan, earth-working atau pengerjaan tanah ataupun fungsi lainnya.",
        "Meskipun kadang digunakan untuk pengerjaan lain namun alat berat lebih identik dengan pekerjaan konstruksi. Kita ambil contoh misalnya pembangunan gedung bertingkat, proyek pengerjaan jalan, hingga pertambangan semua melibatkan alat berat untuk membantu pekerjaan, selain sumber tenaga manusia tentunya.",
        "Alat berat terkenal banyak diproduksi oleh perusahaan-perusahaan ternama dari Amerika, Jepang, Swedia, dan Korea Selatan. Merek alat berat dari masing-masing negara tersebut yaitu: Caterpillar, Komatsu, Hitachi, Volvo serta Doosan Inracore.",
      ],
    },
    {
      title: "Jenis-Jenis dan Fungsi Alat Berat",
      content: [
        "Sebelum membahas jasa pengiriman alat berat lebih lanjut, penting kita ketahui terlebih dulu jenis-jenis alat berat dan fungsinya.",
      ],
    },
    {
      content: [
        <em className="italic" key="uniqueKey">
          Selengkapnya tentang
          <a href="/mobil" className="text-primary">
            {" "}
            jasa pengiriman mobil.
          </a>
        </em>,
      ],
      imageURL: "/placeholder.svg",
      imageAlt: "Mobil",
    },
  ]

  return (
    <div className="min-h-screen bg-secondary">
      <HeroSection
        title="Jasa Pengiriman Alat Berat Murah di Jakarta"
        description=""
        button={{
          text: "Hubungi CS Kami",
          href: "/#",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none text-text-primary" />
        </div>
      </section>

      <WhyChooseHero />
    </div>
  )
}

export default AlatBerat

