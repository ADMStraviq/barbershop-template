import { useState } from 'react'
import { Link } from 'react-router-dom'

// Google Maps lädt erst nach Klick auf „Karte laden“, vorher entsteht keine
// Verbindung zu Google. Die Entscheidung gilt nur für diese Browser-Sitzung.
const STORAGE_KEY = 'maps-consent'

function hasConsent() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export default function MapConsent({ mapsUrl, children }) {
  const [loaded, setLoaded] = useState(hasConsent)

  if (loaded) return children

  function load() {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* sessionStorage nicht verfügbar — Karte trotzdem laden */
    }
    setLoaded(true)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 text-center bg-dark-card">
      <p className="font-montserrat text-sm leading-relaxed max-w-sm text-off-white/70">
        Karte von Google Maps. Mit dem Laden der Karte werden Daten an Google übertragen. Mehr dazu in der{' '}
        <Link to="/datenschutz" className="underline underline-offset-4 text-gold hover:text-gold/80">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
        <button
          type="button"
          onClick={load}
          className="inline-block bg-gold text-dark font-montserrat text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-gold/90 transition-all duration-300"
        >
          Karte laden
        </button>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat text-xs tracking-[0.2em] uppercase underline underline-offset-4 text-gold hover:text-gold/80"
        >
          In Google Maps öffnen
        </a>
      </div>
    </div>
  )
}
