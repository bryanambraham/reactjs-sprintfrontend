import DescriptionContent from "../components/DescriptionContent"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import { useScrollAnimation } from "../hooks/usescrollanimation"


function Mobil() {
  // Initialize scroll animations
  useScrollAnimation()

  const descriptionItems = [
    {
      content: [
        "Hampir semua perusahaan ekspedisi saat ini menyediakan layanan pengiriman kendaraan bermotor seperti mobil, motor, hingga truk. Jangkauan pengirimannya pun luas—bukan hanya dalam kota, tapi juga antar provinsi hingga antar pulau di seluruh Indonesia.",
        "Layanan pengiriman mobil sering dibutuhkan dalam berbagai situasi, seperti saat pindah rumah, pindah tempat kerja, atau keperluan lainnya yang mengharuskan kendaraan ikut berpindah lokasi.",
        "Tren jual beli mobil secara online juga berperan besar dalam meningkatnya permintaan pengiriman kendaraan. Daripada harus menyetir sendiri, banyak orang kini memilih menggunakan jasa ekspedisi, terutama untuk pengiriman lintas pulau yang hanya bisa dilakukan melalui jalur cargo.",
      ],
    },
    {
      title: "Tarif Kirim Mobil Terjangkau Bersama Sprint Cargo",
      content: [
        "Sprint Cargo menawarkan layanan kirim mobil dengan harga yang kompetitif, mencakup pengiriman dalam kota, antar kota (contohnya dari Jakarta ke berbagai kota di Jawa), serta antar pulau ke luar Jawa.",
        "Tersedia berbagai pilihan moda transportasi seperti Car Carrier, Car Towing, dan Self Drive untuk pengiriman via darat. Sementara untuk pengiriman antarpulau, tersedia opsi menggunakan Kapal Roro maupun Container. Anda bebas memilih jenis layanan yang paling sesuai dengan kebutuhan Anda.",
      ],
    },
    {
      title: "1. Layanan Kirim Mobil dengan Car Towing",
      content: [
        "Layanan car towing dari Sprint Cargo dirancang untuk pengiriman mobil secara individu dengan waktu yang lebih cepat. Sangat cocok untuk mobil pribadi, mobil sport, atau kendaraan khusus lainnya.",
        "Karena tidak harus menunggu muatan lain, pengiriman bisa langsung dilakukan hanya dengan satu unit mobil, sehingga jauh lebih efisien.",
        "Selain cepat, metode ini juga lebih aman karena kendaraan tidak digabung dengan mobil lain. Sprint Cargo telah dipercaya oleh berbagai komunitas otomotif dan penyelenggara event kendaraan.",
      ],
    },
    {
      title: "2. Layanan Kirim Mobil via Car Carrier",
      content: [
        "Jika Anda ingin mengirimkan beberapa mobil sekaligus, car carrier bisa menjadi pilihan paling ekonomis. Armada ini menggunakan truk besar yang mampu membawa hingga 6 unit mobil dalam satu perjalanan.",
        "Layanan ini ideal untuk kebutuhan distribusi kendaraan dari dealer atau fleet perusahaan. Pengiriman dilakukan secara berkala sesuai jadwal keberangkatan dan kapasitas muatan.",
        "Seluruh proses loading hingga pengiriman ditangani dengan prosedur keamanan standar untuk menjaga kondisi mobil tetap optimal.",
      ],
    },
    {
      title: "3. Layanan Kirim Mobil dengan Self Drive",
      content: [
        "Metode Self Drive memberikan solusi pengiriman cepat di mana kendaraan Anda akan dikemudikan langsung oleh pengemudi profesional dari Sprint Cargo.",
        "Dengan metode ini, kendaraan dapat sampai ke lokasi tujuan tanpa perlu diangkut, membuat proses lebih fleksibel dan efisien. Cocok untuk semua jenis mobil: sedan, city car, LCGC, mobil niaga, dan lainnya.",
        "Seluruh driver kami berpengalaman dan terlatih dengan standar operasional yang ketat untuk memastikan keamanan dan kenyamanan selama perjalanan.",
      ],
    },
    {
      title: "4. Layanan Kirim Mobil via Kapal Roro",
      content: [
        "Sprint Cargo juga menawarkan pengiriman mobil melalui kapal Roro, yaitu kapal yang memungkinkan kendaraan langsung masuk dan keluar melalui jalur khusus.",
        "Kapal jenis ini sangat efisien untuk pengiriman antar pulau seperti ke Sumatera, Kalimantan, dan Sulawesi. Proses pemuatan cepat dan pengangkutan kendaraan dilakukan dengan standar keselamatan yang tinggi.",
      ],
    },
    {
      title: "5. Layanan Kirim Mobil dengan Container",
      content: [
        "Untuk pengiriman ke wilayah-wilayah yang tidak dijangkau kapal Roro atau membutuhkan perlindungan ekstra, pengiriman via container menjadi opsi terbaik.",
        "Dengan sistem pengiriman tertutup, mobil Anda terlindungi dari cuaca ekstrem dan potensi risiko lain selama perjalanan. Layanan ini banyak dipilih untuk pengiriman ke Indonesia Timur atau untuk kendaraan dengan nilai tinggi.",
      ],
    },
    {
      content: [
        <em key="uniqueKey" className="italic">
          <a href="/motor" className="text-primary">
            {" "}layanan pengiriman motor di Sprint Cargo.
          </a>
        </em>,
      ],
      imageURL: "/motorcycleship.jpg",
      imageAlt: "Motor",
    },
  ]

  return (
    <div className="min-h-screen bg-secondary">
      <HeroSection
        title="Jasa Pengiriman Mobil Murah & Terpercaya Di Jakarta"
        description="Kirim Mobil Aman, Murah & Terpercaya via Car Towing, Car Carrier, Self Drive, Roro & Container."
        button={{
          text: "Hubungi CS Kami",
          href: "/#",
        }}
        imageUrl="/mobil.jpg"
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

export default Mobil

