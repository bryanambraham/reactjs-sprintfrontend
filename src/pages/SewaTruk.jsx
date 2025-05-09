import DescriptionContent from "../components/DescriptionContent"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import { useScrollAnimation } from "../hooks/usescrollanimation"

function SewaTruk() {
  // Initialize scroll animations
  useScrollAnimation()

  const descriptionItems = [
    {
      content: [
        "Selain jasa ekspedisi, SprintCargo Express juga merupakan perusahaan jasa sewa truk di Jakarta dengan harga terjangkau. Sama seperti layanan ekspedisi, jasa rental truk ini mencakup area dalam kota dan luar kota hingga antar provinsi.",
        "Customer bisa mendapatkan banyak kemudahan terkait layanan sewa truk SprintCargo. Booking bisa dilakukan lebih praktis via smartphone atau gadget lainnya. Persyaratannya juga sangat mudah disamping harga sewa juga lebih murah.",
        "Jasa sewa truk SprintCargo Express lebih fleksibel. Anda bisa memilih apakah ingin mengoperasikan truk sendiri atau memakai sopir yang disediakan. ",
      ],
    },
    {
      title: "Mengapa harus Sewa Truk? Mengapa Tidak Membeli Truk Sendiri?",
      content: [
        "Truk bukan termasuk kebutuhan transportasi harian, kecuali bagi mereka yang memang bergantung pada kendaraan ini dalam pekerjaannya . Artinya truk hanya dibutuhkan sesekali untuk mendistribusikan barang dalam jumlah relatif besar. Misalnya pindah rumah, pindah kantor, mengangkut hasil pertanian atau pekerjaan lain yang tidak bisa dihandle kendaraan kecil.",
        "Secara umum mari kita simak manfaat sewa truk di SprintCargo berikut ini.",
      ],
    },
    {
      title: "1. Pilihan dan Ukuran Kapasitas Truk",
      content: [
        "SprintCargo Express menyediakan truk dengan berbagai ukuran dan kapasitas, mulai dari pickup hingga tronton. Hal ini mempermudah customer untuk memilih mana jenis kendaraan yang harus digunakan sesuai kebutuhan. ",
        "Harus diketahui bahwa harga sewa truk tergantung dari jenis, ukuran, serta kapasitas truk itu sendiri. Semakin besar ukuran dan kapasitasnya sudah pasti semakin tinggi harga sewanya.",
        "Misalnya ingin mendistribusikan barang dengan berat 5 ton. Idealnya truk yang disewa harus berkapasitas 5 ton, seperti misalnya Fuso atau Colt Diesel Double. Bukan truk berukuran lebih besar atau lebih kecil. Dengan demikian Customer sudah bisa mengkalkulasi kisaran berapa biaya yang harus dikeluarkan. ",
      ],
    },
    {
      title: "2. Lebih Efisien untuk Satu Kali Perjalanan",
      content: [
        "Sewa truk di SprintCargo Express juga lebih efisien dalam hal SDM, waktu, dan biaya. Mengapa bisa demikian?",
        "Satu contoh misalnya customer memilih menggunakan truk dari perusahaan sendiri untuk mendistribusikan barang produksi tujuan jarak jauh. Besar kemungkinan truk tidak membawa apapun (kosong) pada saat kembali ke lokasi. Resikonya biaya operasional kemungkinan besar akan membengkak.",
        "Nah, sewa truk bisa menjadi solusi pada kondisi dimana rute pendistribusian serta manajemen logistiknya kurang diperhitungkan seperti contoh tadi.",
      ],
    },
    {
      content: [
        <em className="italic" key="uniqueKey">
          Selengkapnya tentang
          <a href="/Mobil" className="text-primary">
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
        title="Jasa Sewa Truk Murah di Jakarta"
        description=""
        button={{
          text: "Hubungi CS Kami",
          href: "/#",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" data-aos="fade-up">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none text-text-primary" />
        </div>
      </section>

      <WhyChooseHero />
    </div>
  )
}

export default SewaTruk

