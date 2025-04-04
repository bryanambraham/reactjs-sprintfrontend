import DescriptionContent from "../components/DescriptionContent"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import { useScrollAnimation } from "../hooks/usescrollanimation"

function Motor() {
  // Initialize scroll animations
  useScrollAnimation()

  const descriptionItems = [
    {
      content: [
        "Praktis, cepat, dan aman—tiga alasan utama kenapa banyak orang memilih jasa ekspedisi untuk kebutuhan pengiriman sepeda motor. Selain itu, tarif yang terjangkau, khususnya untuk rute luar kota atau antar provinsi, membuat layanan ini semakin diminati.",
        "Mayoritas penyedia jasa ekspedisi juga menyediakan layanan packing motor. Ini penting karena bagian luar motor cenderung rentan terhadap benturan atau lecet. Dengan bantuan tim profesional, proses pengemasan menjadi lebih rapi dan aman dibandingkan jika dilakukan sendiri.",
        "Tak kalah penting, hampir semua perusahaan ekspedisi kini menyediakan opsi asuransi untuk pengiriman motor. Dengan adanya asuransi, kekhawatiran terkait risiko kerusakan atau kehilangan bisa diminimalisir. Biaya premi biasanya berbeda di tiap ekspedisi, jadi Anda bisa memilih yang paling sesuai dan terpercaya.",
      ],
    },
    {
      title: "Layanan Kirim Motor Murah dari Sprint Cargo",
      content: [
        "Selain spesialisasi di pengiriman mobil, Sprint Cargo juga melayani pengiriman sepeda motor untuk area dalam kota Jakarta maupun daerah sekitarnya seperti Depok, Bekasi, Tangerang, Bandung, dan kota lainnya di Pulau Jawa.",
        "Kami juga menangani pengiriman motor antar provinsi ke berbagai kota dan kabupaten di seluruh Indonesia. Estimasi waktu pengiriman tergantung dari jarak dan lokasi tujuan, yang secara otomatis juga memengaruhi besarnya biaya kirim.",
        "Tersedia juga layanan asuransi opsional dengan premi sebesar 0,25% dari nilai kendaraan. Besaran ini berlaku untuk semua jenis dan kapasitas motor, dari motor bebek hingga motor sport.",
        "Sebagai nilai tambah, Sprint Cargo menyediakan layanan jemput motor secara gratis khusus untuk area Jabodetabek. Fasilitas ini memudahkan pelanggan yang tidak punya waktu untuk mengantar langsung ke kantor kami.",
      ],
    },
    {
      title: "Simulasi Biaya Pengiriman Motor ke Berbagai Daerah",
      content: [
        "Perhitungan ongkos kirim motor sebenarnya cukup simpel dan transparan. Tarif biasanya dihitung per unit, dan disesuaikan dengan kapasitas mesin (cc) kendaraan.",
        "Semakin besar cc motor Anda, umumnya biaya pengiriman juga akan lebih tinggi. Ini karena ukuran dan bobot yang lebih besar memerlukan penanganan serta ruang lebih dalam pengangkutan.",
        "Sprint Cargo dan berbagai jasa pengiriman lainnya menetapkan tarif berdasarkan kriteria-kriteria seperti berat, dimensi, jenis motor, dan jarak tujuan.",
      ],
    },
    {
      content: [
        <em key="uniqueKey" className="italic">
          Info lebih lanjut tentang
          <a href="/mobil" className="text-primary">
            {" "}layanan pengiriman mobil di Sprint Cargo.
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
        title="Jasa Pengiriman Motor Murah & Aman"
        description="Kirim Paket Motor Ke Luar Kota Hingga Ke Luar Pulau Via Trucking, Kapal, Container."
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

export default Motor

