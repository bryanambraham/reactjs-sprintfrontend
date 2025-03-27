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
        "Hampir semua jasa ekspedisi menyediakan jasa pengiriman mobil, motor, truk dan berbagai kendaraan bermesin lainnya. Tujuan pengiriman pun tidak hanya terbatas satu wilayah (dalam kota) namun mencakup pengiriman antar provinsi dan antar pulau.",
        "Pengiriman mobil biasanya berkaitan dengan kepentingan lain misalnya pindah rumah, pindah kost atau pindah kantor. Dengan sendirinya kendaraan harus dibawa untuk menunjang aktivitas di tempat yang baru.",
        "Menjamurnya jual beli online juga mendorong maraknya aktivitas kirim mobil di Indonesia. Banyaknya opsi pengiriman membuat customer lebih banyak menggunakan jasa ekspedisi dibanding mengendarai mobil sendiri dari lokasi. Terlebih untuk pengiriman mobil antar pulau satu-satunya opsi hanya jasa ekspedisi.",
      ],
    },
    {
      title: "Tarif Kirim Mobil Murah Bersama SprintCargo",
      content: [
        "Kirim mobil murah merupakan salah satu layanan unggulan SprintCargo. Layanan ini mencakup pengiriman mobil dalam kota, antar kota (Jakarta ke kota lain di Pulau Jawa) dan antar pulau (Jakarta ke provinsi / kota / kabupaten di luar Pulau jawa).",
        "SprintCargo menyediakan opsi armada pengiriman beragam seperti : Car Carrier, Car Towing dan Self Drive. Selanjutnya ada Kapal Roro dan Cargo Container untuk pengiriman antar provinsi dan antar pulau. Customer bisa memilih mana moda transportasi yang cocok sesuai kebutuhan.",
      ],
    },
    {
      title: "1. Pengiriman Mobil via Car Carrier",
      content: [
        "Untuk pengiriman mobil antar kota, SprintCargo menyediakan layanan Car Carrier yaitu menggunakan truk trailer. Untuk sekali pengiriman bisa menampung 1-4 mobil atau bisa lebih.&nbsp;",
        "Tarif Car Carrier lebih murah dibanding jenis pengiriman mobil lainnya. Namun begitu estimasi waktu pengiriman bisa lebih lama. Mengapa bisa demikian? Umumnya truk trailer baru diberangkatkan jika kapasitas truk sudah terpenuhi sehingga untuk pengiriman yang sifatnya mendesak Car carrier bukan pilihan yang tepat. ",
      ],
    },
    {
      content: [
        <em key="uniqueKey" className="italic">
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
        title="Jasa Pengiriman Mobil Murah & Terpercaya Di Jakarta"
        description="Kirim Mobil Aman, Murah & Terpercaya via Car Towing, Car Carrier, Self Drive, Roro & Container."
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

export default Mobil

