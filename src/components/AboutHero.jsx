import { Facebook, Twitter, Rss, Instagram } from "lucide-react"

const AboutHero = () => {
  const stats = [
    {
      number: "3500+",
      label: "Melayani lebih dari",
      sublabel: "pelanggan setia",
    },
    {
      number: "34",
      label: "Mencapai pengiriman ke",
      sublabel: "provinsi di Indonesia",
    },
    {
      number: "150+",
      label: "Mengirimkan lebih dari",
      sublabel: "ton barang setiap bulan",
    },
  ]

  return (
    <section className="relative min-h-[600px] flex items-center" data-aos="zoom-in">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/backgroundabout.jpg" alt="Shipping Port" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-secondary/80" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 relative z-10 py-20">
        <div className="max-w-4xl md:px-20">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">Tentang Kami</h1>

          <p className="text-lg md:text-xl text-text-primary mb-8 leading-relaxed">
          Sprint Cargo merupakan perusahaan kargo/logistik yang berbasis di Jakarta, yang telah mendapatkan kepercayaan ribuan pelanggan untuk mengirimkan berbagai jenis barang ke seluruh penjuru Indonesia dengan layanan yang cepat dan aman.
          </p>

          {/* Social Media Buttons */}
          <div className="flex gap-4 mb-16">
            <a
              href="https://www.instagram.com/sprintcargo.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="bg-[#ff6abe] text-text-primary px-6 py-2 rounded flex items-center gap-2 hover:bg-[#ca5598] transition-colors"
            >
              <Instagram size={20} />
              Follow
            </a>
            <a
              href="#"
              className="bg-[#1DA1F2] text-text-primary px-6 py-2 rounded flex items-center gap-2 hover:bg-[#1a91da] transition-colors"
            >
              <Twitter size={20} />
              Follow
            </a>
            <a
              href="#"
              className="bg-primary text-text-primary px-6 py-2 rounded flex items-center gap-2 hover:bg-primary-dark transition-colors"
            >
              <Rss size={20} />
              Follow
            </a>
            
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-primary text-text-primary p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

