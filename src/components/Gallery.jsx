import config from '../config'

function GalleryImage({ img, className = '' }) {
  return (
    <div className={`relative overflow-hidden group cursor-pointer ${className}`}>
      <img
        src={img.url}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: img.position || 'center' }}
      />
      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/55 transition-colors duration-500 hidden md:flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 border border-gold/60 px-6 py-3">
          <span className="text-[10px] tracking-[0.35em] uppercase font-montserrat text-off-white">
            Ansehen
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const imgs = config.galleryImages

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Unsere Arbeit
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Galerie
          </h2>
        </div>

        {/* Asymmetric 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Row 1: wide (2 cols) + narrow */}
          {imgs[0] && (
            <GalleryImage img={imgs[0]} className="sm:col-span-2 h-72 sm:h-96" />
          )}
          {imgs[1] && (
            <GalleryImage img={imgs[1]} className="h-72 sm:h-96" />
          )}

          {/* Row 2: narrow + wide (2 cols) */}
          {imgs[2] && (
            <GalleryImage img={imgs[2]} className="h-64 sm:h-72" />
          )}
          {imgs[3] && (
            <GalleryImage img={imgs[3]} className="sm:col-span-2 h-64 sm:h-72" />
          )}
        </div>
      </div>
    </section>
  )
}
