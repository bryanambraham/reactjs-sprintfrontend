const OfficeLocations = () => {
  const offices = [
    {
      name: "SprintCargo Jakarta",
      address: "Jl Pasar Kebayoran Lama No 20, Kebayoran Lama , Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12230",
      phone: "+62 852-8265-6556",
    },
    {
      name: "SprintCargo Jakarta",
      address: "Jl Pasar Kebayoran Lama No 20, Kebayoran Lama , Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12230",
      phone: "+62 852-8265-6556",
    },
  ]

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold text-text-primary">KANTOR & CABANG SPRINTCARGO</h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary -mb-2"></div>
          </div>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-accent rounded-lg shadow-lg p-8 flex flex-col items-center text-center space-y-4"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Logo */}
              <div className="w-48 h-24 relative">
                <img src="/sprintlogo.png" alt="SprintCargo Logo" className="object-contain w-full h-full" />
              </div>

              {/* Office Name */}
              <h3 className="text-xl font-semibold text-text-primary">{office.name}</h3>

              {/* Address */}
              <p className="text-text-secondary">{office.address}</p>

              {/* Phone */}
              <p className="text-primary font-semibold">
                <a href={`tel:${office.phone}`}>{office.phone}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficeLocations

