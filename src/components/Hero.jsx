import { Link } from 'react-router-dom'
import config from '../config'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${config.heroImageUrl})` }}
      />
      {/* Dark overlay — strong enough for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.45em] uppercase font-montserrat text-gold mb-8" style={{ whiteSpace: 'nowrap' }}>
          {config.tagline}
        </p>

        {/* Headline */}
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-off-white mb-6">
          Die Kunst der{' '}
          <em className="italic text-gold">Präzision</em>
        </h1>

        {/* Sub-heading */}
        <p className="font-cormorant text-xl sm:text-2xl text-off-white/65 font-light tracking-wide mb-12 max-w-md mx-auto">
          {config.shopName} &mdash; {config.city}
        </p>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gold/40" />
          <div className="w-1.5 h-1.5 border border-gold/60 rotate-45" />
          <div className="h-px w-16 bg-gold/40" />
        </div>

        {/* CTA */}
        {config.bookingEnabled ? (
          <Link
            to="/termin"
            className="inline-block bg-gold text-dark font-montserrat font-semibold text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-gold/90 transition-all duration-300"
          >
            Termin buchen
          </Link>
        ) : (
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-dark font-montserrat font-semibold text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-gold/90 transition-all duration-300"
          >
            Per WhatsApp buchen
          </a>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.35em] uppercase font-montserrat text-off-white/30">
          Scrollen
        </span>
        <div className="w-px h-10 bg-gold/30" />
      </div>
    </section>
  )
}
