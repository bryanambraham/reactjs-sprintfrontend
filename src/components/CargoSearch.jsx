"use client"

import { useState, useEffect } from "react"

const CargoSearch = () => {
  const [cargoData, setCargoData] = useState([])
  const [type, setType] = useState("darat")
  const [destination, setDestination] = useState("")
  const [selectedDestination, setSelectedDestination] = useState("") // ✅ State tambahan
  const [allDestinations, setAllDestinations] = useState([])
  const [filteredDestinations, setFilteredDestinations] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)

  // Fetch daftar tujuan ketika komponen dimuat
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/getdestinations?type=${type}`)
        const data = await response.json()
        setAllDestinations(data)
      } catch (error) {
        console.error("Error fetching destinations:", error)
        setAllDestinations([])
      }
    }
    fetchDestinations()
  }, [type])

  // Reset data jika type berubah
  const handleTypeChange = (newType) => {
    setType(newType)
    setDestination("")
    setSelectedDestination("") // ✅ Reset selectedDestination
    setCargoData([])
    setShowDropdown(false)
  }

  // Fungsi untuk menangani perubahan input pencarian
  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase()
    setDestination(input)
    setSelectedDestination("") // ✅ Reset jika mengetik manual

    if (input.length > 0) {
      const filtered = allDestinations.filter((dest) => dest.toLowerCase().includes(input))
      setFilteredDestinations(filtered)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  // Fungsi untuk memilih tujuan dari dropdown
  const handleSelectDestination = (selected) => {
    setDestination(selected)
    setSelectedDestination(selected) // ✅ Menyimpan tujuan yang valid
    setShowDropdown(false)
  }

  // Fungsi untuk mencari cargo berdasarkan tujuan yang dipilih
  const searchCargo = async () => {
    if (!destination.trim() || destination !== selectedDestination) {
      // ✅ Validasi tambahan
      setCargoData([]) // Kosongkan data jika input tidak valid
      setShowDropdown(false)
      return
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/getcargo?type=${type}&destination=${destination}`)
      const data = await response.json()
      setCargoData(data)
      setShowDropdown(false)
    } catch (error) {
      console.error("Error fetching cargo data:", error)
      setCargoData([])
    }
  }

  return (
    <div className="w-full flex justify-center my-14" id="cargo-search">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md px-4">
        {/* Header */}
        <div className="mt-4 bg-secondary text-text-primary text-center py-4 rounded-t-lg">
          <h1 className="text-xl font-semibold">Butuh Info Ongkos Kirim Cargo?</h1>
        </div>

        {/* Tabs Pilihan Transportasi */}
        <div className="flex justify-center bg-secondary/70 py-3 rounded-b-lg">
          {["darat", "laut", "udara", "mobil", "ftl", "cargo", "reguler"].map((t) => (
            <button
              key={t}
              className={`px-6 py-2 mx-2 text-white font-semibold ${type === t ? "bg-primary-dark" : "bg-secondary"}`}
              onClick={() => handleTypeChange(t)}
            >
              {t === "darat"
                ? "🚛"
                : t === "laut"
                  ? "⛴️"
                  : t === "udara"
                    ? "✈️"
                    : t === "ftl"
                      ? "✈️"
                      : t === "cargo"
                        ? "✈️"
                        : t === "reguler"
                          ? "✈️"
                          : "🚗"}{" "}
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Input Pencarian dengan Autocomplete */}
        <div className="relative mt-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md text-text-dark"
            placeholder="Masukkan Tujuan..."
            value={destination}
            onChange={handleInputChange}
          />
          <button onClick={searchCargo} className="absolute right-2 top-2 text-gray-600">
            🔍
          </button>

          {/* Dropdown hasil autocomplete */}
          {showDropdown && filteredDestinations.length > 0 && (
            <ul className="absolute w-full bg-white border mt-1 max-h-40 overflow-y-auto shadow-lg rounded-md z-50">
              {filteredDestinations.map((dest, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer text-text-dark z-50"
                  onClick={() => handleSelectDestination(dest)}
                >
                  {dest}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hasil Pencarian */}
        {cargoData.length > 0 ? (
          <div className="mt-6 bg-secondary rounded-lg shadow-md">
            <div className="bg-secondary/80 text-text-primary p-3 text-lg font-bold flex justify-between">
              <span>JAKARTA ➡️ {cargoData[0].tujuan.toUpperCase()}</span>
            </div>
            <div className="bg-white p-4 text-text-dark">
              <p className="font-semibold">
                Minimum Charge: <span>{cargoData[0].min_charge || "-"}</span>
              </p>
              <p className="font-semibold">
                Estimasi: <span>{cargoData[0].estimasi} </span>Hari
              </p>
              <p className="font-semibold">
                Tarif: <span>{cargoData[0].tarif || "-"} </span>
              </p>
              <p className="font-semibold">
                CDE: <span>{cargoData[0].cde || " -"}</span>
              </p>
              <p className="font-semibold">
                CDD: <span>{cargoData[0].cdd || "-"}</span>
              </p>
              <p className="font-semibold">
                CDD Long: <span>{cargoData[0].cdd_long || "-"}</span>
              </p>
            </div>

            {/* Tombol WhatsApp */}
            <div className="relative flex flex-col justify-center items-center mt-6">
              {/* Tombol WhatsApp */}
              <a
                href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold flex items-center gap-2 hover:bg-green-600 transition-colors"
              >
                📞 Hubungi CS Kami
              </a>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">No data found</p>
        )}
      </div>
    </div>
  )
}

export default CargoSearch

