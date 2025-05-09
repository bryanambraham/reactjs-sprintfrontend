"use client"

const ContactForm = () => {
  // Replace this with your actual Google Form URL
  const googleFormUrl = "https://forms.gle/GuMhP2iCpEXhWf8t6"

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold text-text-primary">DAFTAR AGEN SPRINT INDO</h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary -mb-2"></div>
          </div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Silakan isi formulir pendaftaran untuk menjadi Agen Sprint Indo. Kami akan menghubungi Anda setelah formulir
            disubmit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-accent rounded-lg shadow-lg overflow-hidden p-8" data-aos="fade-up">
          <div className="text-center mb-8">
            <p className="text-text-primary mb-6">
              Formulir pendaftaran kami memerlukan upload file, yang tidak dapat ditampilkan langsung di website.
              Silakan klik tombol di bawah untuk mengisi formulir pendaftaran.
            </p>

            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-lg"
            >
              Isi Formulir Pendaftaran
            </a>
          </div>

          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Informasi yang Dibutuhkan:</h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Data diri lengkap (nama, alamat, nomor telepon)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Pendidikan terakhir</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Pekerjaan saat ini</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Penghasilan per bulan</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Foto KTP (upload file)</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-secondary mb-4">
              Jika Anda mengalami kesulitan dalam mengisi formulir, silakan hubungi kami melalui:
            </p>
            <a
              href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20ingin%20mendaftar%20sebagai%20agen%20tapi%20mengalami%20kesulitan%20dengan%20formulir."
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
