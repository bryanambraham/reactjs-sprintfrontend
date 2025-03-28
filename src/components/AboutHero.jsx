import { Facebook, Twitter, Rss } from "lucide-react"

const AboutHero = () => {
  const stats = [
    {
      number: "5.000+",
      label: "TELAH MELAYANI LEBIH DARI",
      sublabel: "CUSTOMER",
    },
    {
      number: "34",
      label: "TELAH MENJANGKAU PENGIRIMAN KE",
      sublabel: "PROVINSI DI INDONESIA",
    },
    {
      number: "200+",
      label: "TELAH MENGIRIMKAN LEBIH DARI",
      sublabel: "TON PERBULAN",
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
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">Tentang Kami</h1>

          <p className="text-lg md:text-xl text-text-primary mb-8 leading-relaxed">
            PT. Cargonesia Utama Trans atau dikenal dengan brand Cargonesia Express merupakan perusahaan kargo/logistik
            yang sudah berdiri sejak 2014 di Jakarta yang telah dipercaya ribuan customer untuk mengirimkan berbagai
            macam barang ke seluruh pelosok negeri.
          </p>

          {/* Social Media Buttons */}
          <div className="flex gap-4 mb-16">
            <a
              href="#"
              className="bg-[#3b5998] text-text-primary px-6 py-2 rounded flex items-center gap-2 hover:bg-[#4c70ba] transition-colors"
            >
              <Facebook size={20} />
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

