import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import config from '../config'

const categoryLabels = {
  herren: 'Herren',
  bart: 'Bart & Rasur',
  pflege: 'Pflege & Detail',
  paket: 'Paket',
}

function ServiceRows({ services }) {
  return (
    <div className="flex flex-col">
      {services.map((service, i) => (
        <div
          key={i}
          className="flex items-baseline justify-between py-3 gap-4 border-b border-white/5"
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
  )
}

export default function Services() {
  const categories = config.serviceCategories
  const [openCategory, setOpenCategory] = useState(null)

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

        {/* Accordion — same layout on all screen sizes */}
        <div className="max-w-3xl mx-auto">
          {Object.entries(categories).map(([key, services]) => {
            const isOpen = openCategory === key
            return (
              <div key={key} className="border-b border-white/5">
                <button
                  onClick={() => setOpenCategory(isOpen ? null : key)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-xs tracking-[0.4em] uppercase font-montserrat text-gold">
                    {categoryLabels[key] ?? key}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-6">
                    <ServiceRows services={services} />
                  </div>
                )}
              </div>
            )
          })}
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
