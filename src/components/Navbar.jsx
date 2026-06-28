import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import config from '../config'

const navLinks = [
  { label: 'Leistungen', hash: 'services' },
  { label: 'Galerie', hash: 'gallery' },
  { label: 'Kontakt', hash: 'contact' },
]

function NavHashLink({ hash, label, onClick }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const handleClick = (e) => {
    if (isHome) {
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
    onClick?.()
  }

  return (
    <Link
      to={`/#${hash}`}
      onClick={handleClick}
      className="text-xs tracking-[0.2em] uppercase font-montserrat text-off-white/60 hover:text-gold transition-colors duration-300"
    >
      {label}
    </Link>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-sm border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-playfair text-xl font-semibold tracking-wider text-off-white"
          >
            {config.shopName}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <NavHashLink hash={link.hash} label={link.label} />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          {config.bookingEnabled ? (
            <Link
              to="/termin"
              className="hidden lg:block bg-gold text-dark text-xs tracking-[0.3em] uppercase font-montserrat px-7 py-3 hover:bg-gold/90 transition-all duration-300"
            >
              Termin buchen
            </Link>
          ) : (
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-gold text-dark text-xs tracking-[0.3em] uppercase font-montserrat px-7 py-3 hover:bg-gold/90 transition-all duration-300"
            >
              WhatsApp
            </a>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center gap-[6px] w-8 h-8"
            aria-label="Menü öffnen"
          >
            <span className="block w-6 h-px bg-off-white" />
            <span className="block w-6 h-px bg-off-white" />
            <span className="block w-6 h-px bg-off-white" />
          </button>
        </nav>
      </header>

      {/* Mobile menu — full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-dark flex flex-col lg:hidden overflow-hidden">
          {/* Menu header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-white/5 shrink-0">
            <Link
              to="/"
              onClick={closeMenu}
              className="font-playfair text-xl font-semibold tracking-wider text-off-white"
            >
              {config.shopName}
            </Link>
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-off-white/60 hover:text-off-white transition-colors"
              aria-label="Menü schließen"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu links — centered */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <NavHashLink
                key={link.hash}
                hash={link.hash}
                label={link.label}
                onClick={closeMenu}
              />
            ))}

            <div className="h-px w-12 bg-gold/30 my-2" />

            {config.bookingEnabled ? (
              <Link
                to="/termin"
                onClick={closeMenu}
                className="bg-gold text-dark text-xs tracking-[0.3em] uppercase font-montserrat px-8 py-4 hover:bg-gold/90 transition-all duration-300"
              >
                Termin buchen
              </Link>
            ) : (
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="bg-gold text-dark text-xs tracking-[0.3em] uppercase font-montserrat px-8 py-4 hover:bg-gold/90 transition-all duration-300"
              >
                Per WhatsApp anfragen
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
