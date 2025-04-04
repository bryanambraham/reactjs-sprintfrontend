import DescriptionContent from "../components/DescriptionContent"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"

function AlatBerat() {
  const descriptionItems = [
    {
      content: [
        "Jasa Kirim Alat Berat – Saat mendengar istilah 'alat berat', kita pasti membayangkan mesin besar, mahal, dan memiliki bobot luar biasa yang hanya bisa dioperasikan oleh tenaga ahli. Hal ini tidak salah, namun tahukah Anda apa saja jenis alat berat yang sering digunakan dan apa saja fungsinya di lapangan?",
        "Saat ini pengiriman alat berat ke berbagai daerah, terutama luar pulau, semakin meningkat. Hal ini tidak lepas dari pesatnya pembangunan di sektor industri, pertambangan, infrastruktur, real estate, serta proyek-proyek besar pemerintah dan swasta yang membutuhkan dukungan logistik alat berat.",
        "Alat berat dirancang untuk mengatasi pekerjaan yang tidak mungkin dilakukan oleh tenaga manusia secara manual. Penggunaannya sangat penting untuk mempercepat pekerjaan, meningkatkan efisiensi, serta menekan biaya operasional jangka panjang. Oleh karena itu, pengiriman alat berat menjadi salah satu kebutuhan vital dalam mendukung pertumbuhan proyek di Indonesia.",
      ],
    },
    {
      title: "Alat Berat untuk Proyek Konstruksi dan Industri",
      content: [
        "Secara umum, alat berat adalah mesin bertenaga tinggi yang dirancang khusus untuk membantu pekerjaan konstruksi, manufaktur, hingga pertambangan. Fungsi utamanya meliputi pemindahan material, perataan tanah, penggalian, pengangkutan, dan pekerjaan berat lainnya.",
        "Dalam proyek konstruksi seperti pembangunan gedung bertingkat, jembatan, jalan tol, maupun kawasan industri, keberadaan alat berat sangat diperlukan untuk mencapai target waktu pengerjaan. Selain itu, proyek tambang dan pabrik juga menggunakan alat berat untuk aktivitas produksi dan eksplorasi.",
        "Beberapa merek alat berat ternama di dunia yang sering ditemukan di lapangan antara lain: Caterpillar (Amerika Serikat), Komatsu dan Hitachi (Jepang), Volvo (Swedia), serta Doosan Infracore (Korea Selatan). Merek-merek ini dikenal karena kekuatan, daya tahan, serta teknologi mutakhir yang digunakan.",
      ],
    },
    {
      title: "Jenis-Jenis dan Fungsi Alat Berat",
      content: [
        "Sebelum membahas layanan pengiriman, penting untuk mengenal berbagai jenis alat berat yang umum digunakan di Indonesia, beserta fungsinya:",
      ],
      list: [
        <span className="text-gray-500"><strong>Excavator</strong>: Digunakan untuk menggali tanah, membuat parit, atau menghancurkan struktur bangunan.</span>,
        <span className="text-gray-500"><strong>Bulldozer</strong>: Untuk meratakan permukaan tanah, mendorong material, dan membersihkan lahan.</span>,
        <span className="text-gray-500"><strong>Crane</strong>: Untuk mengangkat dan memindahkan material berat ke tempat yang lebih tinggi.</span>,
        <span className="text-gray-500"><strong>Dump Truck</strong>: Mengangkut material seperti pasir, batu, tanah, dan bahan bangunan lainnya.</span>,
        <span className="text-gray-500"><strong>Wheel Loader</strong>: Untuk mengangkat dan memindahkan material dalam volume besar.</span>,
        <span className="text-gray-500"><strong>Grader</strong>: Meratakan permukaan tanah terutama untuk konstruksi jalan.</span>,
        <span className="text-gray-500"><strong>Vibratory Roller</strong>: Memadatkan tanah, aspal, atau material lainnya.</span>,
        <span className="text-gray-500"><strong>Forklift</strong> dan <strong>Pallet Mover</strong>: Untuk pengangkutan barang di dalam gudang atau pabrik.</span>,
        <span className="text-gray-500">Setiap alat berat memiliki spesifikasi dan fungsi masing-masing, dan pemilihannya sangat tergantung pada jenis proyek yang sedang dijalankan.</span>,
      ],
    },
    {
      content: [
        <em className="italic" key="uniqueKey">
          Pelajari juga
          <a href="/mobil" className="text-primary">
            {" "}layanan pengiriman mobil dari Sprint Cargo.
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

