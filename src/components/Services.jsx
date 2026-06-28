import config from '../config'

const categoryLabels = {
  herren: 'Herren',
  bart: 'Bart & Rasur',
  pflege: 'Pflege & Detail',
  paket: 'Paket',
}

export default function Services() {
  const categories = config.serviceCategories

  return (
    <section id="services" className="bg-dark-card py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-4">
            Unser Angebot
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-off-white">
            Leistungen
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {Object.entries(categories).map(([key, services]) => (
            <div key={key}>
              {/* Category header */}
              <p className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold mb-6">
                {categoryLabels[key] ?? key}
              </p>

              {/* Service rows */}
              <div className="flex flex-col">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between py-3 gap-4 border-b border-white/8"
                  >
                    <span className="font-montserrat text-sm text-off-white">
                      {service.name}
                    </span>
                    <span className="font-cormorant text-xl text-gold shrink-0">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {config.servicesNote && (
          <p className="text-center text-gold/70 italic font-cormorant text-base mt-12">
            {config.servicesNote}
          </p>
        )}
      </div>
    </section>
  )
}
