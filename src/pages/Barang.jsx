import { DescriptionContent } from "../components/DescriptionContent"
import { HeroSection } from "../components/HeroSection"
import { WhyChooseHero } from "../components/WhyChooseHero"

function Barang() {
  const descriptionItems = [
    {
      title: "Layanan Jasa Ekspedisi Jakarta",
      content: [
        "Jasa ekspedisi pengiriman cargo murah di Jakarta saat ini bisa Anda temukan dengan pada layanan Cargonesia Express. Proses mudah, cepat dan jaminan keamanan akan Anda dapatkan pada layanan ini.",
        "Jasa ekspedisi cargo bisa Anda manfaatkan untuk pengiriman barang besar dan berat, seperti kendaraan motor dan mobil, alat berat, barang pindahan, mesin, hingga material proyek.",
      ],
    },
    {
      content: [
        "Pengiriman barang melalui Cargonesia Express memungkinkan Anda bisa mengirim barang tanpa terkendala, pasalnya Cargonesia Express merupakan perusahaan ekspedisi profesional sejak 2014 yang telah mengirim barang besar dan berat dari 10.000+ PT di Indonesia.",
        "Selain itu Cargonesia juga mendapatkan kepercayaan dari Kementrian dan BUMN guna mendukung pengiriman barang untuk proyek-proyek pemerintah.",
      ],
    },
    {
      title: "Jasa Ekspedisi Barang",
      content: [
        "Jasa ekspedisi barang merupakan layanan kirim barang yang sudah dijalankan selama puluhan tahun oleh perusahaan kami. Jenis barang yang dimaksud seperti barang dengan berat lebih dari 50-100 kg.",
        "Jenis barang besar dan berat memang membutuhkan penanganan khusus, misalnya mulai dari proses packing, proses muat, penyimpanan dan proses lainnya. Namun tim Cargonesia Express terdiri dari SDM profesional yang mendapatkan pelatihan khusus dan rutin terkait perlakuan barang besar dan berat.",
        "Bagi Anda yang mungkin baru pertama kali menggunakan jasa ekspedisi cargo, bisa menyimak informasi jenis barang yang bisa dikirim berikut ini.",
      ],
      list: [
        "Alat berat, crane, buldozer, forklift, excavator, crusher stone, wheel loader dsb",
        "Barang elektronik rumahan, kulkas, tv, radio",
        "Material kelistrikan, panel surya, tiang pancang, kabel optik, kabel habel",
        "Barang percetakan, mesin cetak, printer, mesin cetak banner, mesin sablon",
        "Barang kimia non flammable, cairan kimia, pupuk dsb",
        "Alat kesehatan, APD, mesin USG, obat medis, ranjang pasien, tabung oksigen dsb",
      ],
    },
    // ... rest of the descriptionItems array (truncated for brevity)
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Jasa Ekspedisi Murah Jakarta Ke Berbagai Wilayah Indonesia"
        description="Jasa ekspedisi murah di Jakarta untuk pengiriman cargo ke berbagai wilayah Indonesia."
        subDescription="Gratis Jemput Area DKI Jakarta & Barang Dijamin Aman!"
        features={[
          { text: "Ongkos kirim murah" },
          { text: "Lebih mudah karena barang bisa dijemput" },
          { text: "Didukung oleh tenaga profesional dan berpengalaman" },
          { text: "Barang sampai tepat waktu" },
        ]}
        button={{
          text: "Hubungi CS Kami",
          href: "/#",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none" />
        </div>
      </section>

      <WhyChooseHero />
    </div>
  )
}

export default Barang

