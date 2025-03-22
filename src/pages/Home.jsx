import AboutSection from "../components/AboutSection"
import OfficeLocations from "../components/OfficeLocations"
import HeroSection from "../components/HeroSection"
import ServicesGrid from "../components/ServicesGrid"

function Home() {
  return (
    <div className="bg-secondary">
      <HeroSection
        title="Layanan Pengiriman Barang dari Jakarta ke Seluruh Indonesia dengan SprintCargo"
        description="SprintCargo menyediakan layanan pengiriman barang antar pulau dengan jangkauan ke Kalimantan, Sumatera, Sulawesi, Nusa Tenggara, Maluku, dan Papua."
        subDescription="Jemput barang gratis di area DKI Jakarta dengan jaminan keamanan pengiriman!"
        features={[
          { text: "Pengiriman Barang Hemat Biaya" },
          { text: "Proses Pengiriman Tanpa Ribet" },
          { text: "Kirim Barang dengan Layanan Terbaik" },
        ]}
        button={{
          text: "CEK ONGKIR",
          href: "/cek-ongkir",
        }}
        certifications={[
          { imageUrl: "/placeholder.svg", alt: "ISO 9001:2015" },
          { imageUrl: "/placeholder.svg", alt: "TUV Certification" },
        ]}
        imageUrl="/staff.jpg"
        imageAlt="Cargo Staff"
      />

      <AboutSection />
      <ServicesGrid />
      <OfficeLocations />
    </div>
  )
}

export default Home

