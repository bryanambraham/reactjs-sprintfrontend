import AboutSection from "../components/AboutSection"
import OfficeLocations from "../components/OfficeLocations"
import HeroSection from "../components/HeroSection"
import ServicesGrid from "../components/ServicesGrid"
import { useScrollAnimation } from "../hooks/usescrollanimation"

function Home() {
  // Initialize scroll animations
  useScrollAnimation()

  return (
    <div className="bg-secondary">
      <HeroSection
        title="Layanan Pengiriman Barang dari Jakarta ke Seluruh Indonesia dengan Sprint Cargo"
        description="Sprint Cargo menyediakan layanan pengiriman barang antar pulau dengan jangkauan ke Kalimantan, Sumatera, Sulawesi, Nusa Tenggara, Maluku, dan Papua."
        subDescription="Jemput barang gratis di area DKI Jakarta dengan jaminan keamanan pengiriman!"
        features={[
          { text: "Pengiriman Barang Hemat Biaya" },
          { text: "Proses Pengiriman Tanpa Ribet" },
          { text: "Kirim Barang dengan Layanan Terbaik" },
        ]}
        button={{
          text: "CEK ONGKIR",
          href: "/ongkir",
        }}
        certifications={[
          { imageUrl: "/certif.png", alt: "Certification"},
          // { imageUrl: "/placeholder.svg", alt: "TUV Certification" },
        ]}
        imageUrl="/deliverbarang.jpg"
        imageAlt="Deliver"
      />

      <AboutSection />
      <ServicesGrid />
      <OfficeLocations />
    </div>
  )
}

export default Home

