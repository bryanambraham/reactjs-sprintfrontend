import { Ship, Truck, Plane, Bike, Car, Tractor } from "lucide-react"

const ServicesGrid = () => {
  const services = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Ekspedisi Muatan Kapal Laut",
      description: "Layanan Pengiriman Barang Via Kapal Pelni & Kapal Kargo, Melayani Pengiriman FCL & LCL.",
      color: "bg-primary",
      href: "/AlatBerat",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Ekspedisi Cargo Darat",
      description: "Layanan Pengiriman Barang Via Trucking, Melayani Sewa Truk CDE, CDD, Hingga FUSO.",
      color: "bg-primary",
      href: "/Barang",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Jasa Cargo Udara",
      description: "Layanan Kirim Barang Via Udara, Prioritas & Lebih Cepat Sampai Tujuan.",
      color: "bg-primary",
      href: "/Barang",
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Jasa Pengiriman Motor",
      description: "Jasa Kirim Motor Ke Berbagai Wilayah Indonesia Dengan Ongkir Murah.",
      color: "bg-primary",
      href: "/Motor",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Jasa Pengiriman Mobil",
      description: "Jasa Kirim Mobil Via Car Towing, Car Carrier, Self Drive, Kapal Roro & Container.",
      color: "bg-primary",
      href: "/Mobil",
    },
    {
      icon: <Tractor className="w-8 h-8" />,
      title: "Jasa Pengiriman Alat Berat",
      description: "Jasa Kirim Alat Berat Ke Berbagai Wilayah Indonesia Via Darat & Laut.",
      color: "bg-primary",
      href: "/AlatBerat",
    },
  ]

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold text-text-primary">LAYANAN EKSPEDISI SPRINTCARGO</h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary -mb-2"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <a key={index} href={service.href} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-accent rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className={`${service.color} p-4 rounded-full text-white`}>{service.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-text-primary">{service.title}</h3>

                  {/* Description */}
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            <span className="mr-2">HUBUNGI KAMI</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid

