import config from '../config'

const { reviews } = config

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  )
}

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Was Kunden sagen
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Google Bewertungen
          </h2>
        </div>

        {/* Overall rating */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16">
          <span className="font-cormorant text-7xl font-semibold text-gold leading-none">
            {reviews.rating.toFixed(1)}
          </span>
          <div className="flex flex-col gap-2">
            <Stars count={5} />
            <p className="font-montserrat text-xs text-off-white/40 tracking-widest uppercase">
              {reviews.count > 0
                ? `${reviews.count} Bewertungen auf ${reviews.platform}`
                : `Basierend auf ${reviews.platform} Bewertungen`}
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.items.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-sm"
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              {/* Reviewer header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)' }}
                >
                  <span className="font-montserrat text-xs font-semibold text-gold">
                    {getInitials(review.name)}
                  </span>
                </div>
                <div>
                  <p className="font-montserrat text-sm font-semibold text-off-white leading-tight">
                    {review.name}
                  </p>
                  <p className="font-montserrat text-xs text-off-white/35 mt-0.5">
                    {review.date}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <Stars count={review.rating} />

              {/* Text */}
              <p className="font-cormorant text-lg italic text-off-white/80 leading-relaxed mt-4">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
