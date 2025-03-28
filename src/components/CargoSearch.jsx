"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const CargoSearch = () => {
  const [cargoData, setCargoData] = useState([])
  const [type, setType] = useState("darat")
  const [destination, setDestination] = useState("")
  const [selectedDestination, setSelectedDestination] = useState("")
  const [allDestinations, setAllDestinations] = useState([])
  const [filteredDestinations, setFilteredDestinations] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const inputRef = useRef(null)
  const dropdownRef = useRef(null)
  const [portalContainer, setPortalContainer] = useState(null)

  // Set up portal container
  useEffect(() => {
    const div = document.createElement("div")
    div.style.position = "fixed"
    div.style.top = "0"
    div.style.left = "0"
    div.style.width = "100%"
    div.style.height = "0"
    div.style.overflow = "visible"
    div.style.zIndex = "9999"
    document.body.appendChild(div)
    setPortalContainer(div)

    return () => {
      document.body.removeChild(div)
    }
  }, [])

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

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Reset data jika type berubah
  const handleTypeChange = (newType) => {
    setType(newType)
    setDestination("")
    setSelectedDestination("")
    setCargoData([])
    setShowDropdown(false)
  }

  // Fungsi untuk menangani perubahan input pencarian
  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase()
    setDestination(input)
    setSelectedDestination("")

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
    setSelectedDestination(selected)
    setShowDropdown(false)
  }

  // Fungsi untuk mencari cargo berdasarkan tujuan yang dipilih
  const searchCargo = async () => {
    if (!destination.trim() || destination !== selectedDestination) {
      setCargoData([])
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

  // Calculate dropdown position
  const getDropdownPosition = () => {
    if (!inputRef.current) return { top: 0, left: 0, width: 0 }

    const rect = inputRef.current.getBoundingClientRect()
    return {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    }
  }

  return (
    <div className="w-full flex justify-center" id="cargo-search">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md px-4">
        {/* Header */}
        <div className="bg-secondary text-text-primary text-center py-4 rounded-t-lg mt-4">
          <h1 className="text-xl font-semibold">Butuh Info Ongkos Kirim Cargo?</h1>
        </div>

        {/* Tabs Pilihan Transportasi */}
        <div className="flex justify-center bg-secondary/80 py-3 rounded-b-lg">
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
            ref={inputRef}
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Masukkan Tujuan..."
            value={destination}
            onChange={handleInputChange}
            onClick={() => {
              if (destination.length > 0 && filteredDestinations.length > 0) {
                setShowDropdown(true)
              }
            }}
          />
          <button onClick={searchCargo} className="absolute right-2 top-2 text-gray-600">
            🔍
          </button>

          {/* Dropdown hasil autocomplete - rendered in portal */}
          {showDropdown &&
            filteredDestinations.length > 0 &&
            portalContainer &&
            createPortal(
              <div
                ref={dropdownRef}
                style={{
                  position: "absolute",
                  top: `${getDropdownPosition().top}px`,
                  left: `${getDropdownPosition().left}px`,
                  width: `${getDropdownPosition().width}px`,
                  zIndex: 9999,
                }}
              >
                <ul className="bg-white border rounded-md shadow-lg max-h-40 overflow-y-auto">
                  {filteredDestinations.map((dest, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                      onClick={() => handleSelectDestination(dest)}
                    >
                      {dest}
                    </li>
                  ))}
                </ul>
              </div>,
              portalContainer,
            )}
        </div>

        {/* Hasil Pencarian */}
        {cargoData.length > 0 ? (
          <div className="mt-6 bg-secondary/80 rounded-lg shadow-md">
            <div className="bg-primary-dark text-text-secondary p-3 text-lg font-semibold flex justify-between">
              <span>JAKARTA ➡️ {cargoData[0].tujuan.toUpperCase()}</span>
            </div>
            <div className="bg-white p-4 text-text-dark">
              <p className="font-semibold">
                Minimum Charge: <span>{cargoData[0].min_charge || "N/A"}</span>
              </p>
              <p className="font-semibold">
                Estimasi: <span>{cargoData[0].estimasi} </span>Hari
              </p>
              <p className="font-semibold">
                Tarif: <span>{cargoData[0].tarif || "N/A"} </span>
              </p>
              <p className="font-semibold">
                CDE: <span>{cargoData[0].cde || " N/A"}</span>
              </p>
              <p className="font-semibold">
                CDD: <span>{cargoData[0].cdd || " N/A"}</span>
              </p>
              <p className="font-semibold">
                CDD Long: <span>{cargoData[0].cdd_long || "N/A"}</span>
              </p>
            </div>

            {/* Tombol WhatsApp */}
            <div className="relative flex flex-col justify-center items-center mt-6 pb-4">
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
          <p className="text-center text-text-dark/70 mt-4 pb-4">No data found</p>
        )}
      </div>
    </div>
  )
}

export default CargoSearch

