import { useState } from 'react'
import config from '../config'

function getAllServices() {
  return Object.values(config.serviceCategories).flat()
}

function getNext14Days() {
  const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  const monthNames = [
    'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
    'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez',
  ]
  const days = []
  for (let i = 0; i < 14; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    days.push({
      key: d.toISOString().slice(0, 10),
      dayName: dayNames[d.getDay()],
      dayNum: d.getDate(),
      month: monthNames[d.getMonth()],
    })
  }
  return days
}

function getTimeSlots() {
  const slots = []
  for (let m = 9 * 60; m <= 18 * 60 + 30; m += 30) {
    const h = Math.floor(m / 60)
    const min = m % 60
    slots.push(`${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`)
  }
  return slots
}

const services = getAllServices()
const days = getNext14Days()
const timeSlots = getTimeSlots()

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function StepLabel({ number, label, done }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{
          border: '1px solid #C9A84C',
          background: done ? '#C9A84C' : 'transparent',
        }}
      >
        <span className="font-montserrat text-xs font-semibold" style={{ color: done ? '#0A0A0A' : '#C9A84C' }}>
          {number}
        </span>
      </div>
      <span className="font-montserrat text-xs tracking-[0.25em] uppercase text-off-white/70">
        {label}
      </span>
    </div>
  )
}

export default function Termin() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const allSelected = selectedService && selectedDay && selectedTime
  const whatsappLink = `https://wa.me/${config.whatsappNumber}`

  return (
    <div className="min-h-screen bg-dark pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-6">

        {/* Preview notice */}
        <div
          className="mb-12 px-5 py-3 text-center"
          style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.05)' }}
        >
          <p className="font-montserrat text-xs tracking-[0.15em] text-off-white/50">
            Vorschau eines zukünftigen Online-Buchungssystems
          </p>
        </div>

        {/* Headline */}
        <div className="mb-14 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-semibold text-off-white mb-4">
            Termin buchen
          </h1>
          <p className="font-cormorant text-xl text-off-white/55 font-light tracking-wide">
            Wähle deinen Service, Tag und Uhrzeit
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-12 bg-gold/30" />
            <div className="w-1.5 h-1.5 border border-gold/50 rotate-45" />
            <div className="h-px w-12 bg-gold/30" />
          </div>
        </div>

        {/* Step 1: Service */}
        <div className="mb-12">
          <StepLabel number="1" label="Service wählen" done={!!selectedService} />
          <div className="flex flex-col gap-2">
            {services.map((service) => {
              const active = selectedService?.name === service.name
              return (
                <button
                  key={service.name}
                  onClick={() => setSelectedService(service)}
                  className="flex items-center justify-between px-5 py-4 text-left transition-all duration-200"
                  style={{
                    border: active ? '1px solid #C9A84C' : '1px solid rgba(255,255,255,0.1)',
                    background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
                  }}
                >
                  <span className="font-montserrat text-sm text-off-white">
                    {service.name}
                  </span>
                  <span
                    className="font-cormorant text-lg"
                    style={{ color: '#C9A84C' }}
                  >
                    {service.price}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 2: Date */}
        <div className="mb-12">
          <StepLabel number="2" label="Datum wählen" done={!!selectedDay} />
          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => {
              const active = selectedDay?.key === day.key
              return (
                <button
                  key={day.key}
                  onClick={() => setSelectedDay(day)}
                  className="flex flex-col items-center py-3 px-1 transition-all duration-200"
                  style={{
                    border: active ? '1px solid #C9A84C' : '1px solid rgba(255,255,255,0.08)',
                    background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
                  }}
                >
                  <span
                    className="font-montserrat text-[10px] uppercase tracking-wider mb-1"
                    style={{ color: active ? '#C9A84C' : 'rgba(245,240,232,0.4)' }}
                  >
                    {day.dayName}
                  </span>
                  <span
                    className="font-playfair text-lg font-semibold"
                    style={{ color: active ? '#C9A84C' : '#F5F0E8' }}
                  >
                    {day.dayNum}
                  </span>
                  <span
                    className="font-montserrat text-[10px] mt-0.5"
                    style={{ color: active ? '#C9A84C' : 'rgba(245,240,232,0.35)' }}
                  >
                    {day.month}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 3: Time */}
        <div className="mb-14">
          <StepLabel number="3" label="Uhrzeit wählen" done={!!selectedTime} />
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
            {timeSlots.map((slot) => {
              const active = selectedTime === slot
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className="py-3 font-montserrat text-sm transition-all duration-200"
                  style={{
                    border: active ? '1px solid #C9A84C' : '1px solid rgba(255,255,255,0.08)',
                    background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
                    color: active ? '#C9A84C' : 'rgba(245,240,232,0.7)',
                  }}
                >
                  {slot}
                </button>
              )
            })}
          </div>
        </div>

        {/* Confirm button */}
        <button
          onClick={() => allSelected && setModalOpen(true)}
          className="w-full py-5 font-montserrat text-xs tracking-[0.3em] uppercase font-semibold transition-all duration-300"
          style={{
            border: '1px solid #C9A84C',
            background: allSelected ? '#C9A84C' : 'transparent',
            color: allSelected ? '#0A0A0A' : 'rgba(201,168,76,0.35)',
            cursor: allSelected ? 'pointer' : 'not-allowed',
          }}
        >
          Termin bestätigen
        </button>

        {allSelected && (
          <p className="text-center font-montserrat text-xs text-off-white/40 mt-4">
            {selectedService.name} · {selectedDay.dayName} {selectedDay.dayNum}. {selectedDay.month} · {selectedTime} Uhr
          </p>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-md p-10 relative"
            style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.3)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 font-montserrat text-xs tracking-widest text-off-white/40 hover:text-off-white transition-colors"
            >
              ✕
            </button>

            {/* Ornament */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gold/25" />
              <div className="w-1 h-1 border border-gold/50 rotate-45" />
              <div className="h-px flex-1 bg-gold/25" />
            </div>

            <h2 className="font-playfair text-2xl font-semibold text-off-white mb-4 text-center">
              Demo-Vorschau
            </h2>
            <p className="font-cormorant text-lg text-off-white/65 text-center leading-relaxed mb-8">
              Das Buchungssystem ist noch nicht aktiv. Bitte buche deinen Termin aktuell per WhatsApp oder Telefon.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 py-4 font-montserrat text-xs tracking-[0.2em] uppercase transition-all duration-300"
                style={{ border: '1px solid #C9A84C', background: '#C9A84C', color: '#0A0A0A' }}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href={`tel:${config.phone}`}
                className="flex-1 flex items-center justify-center gap-3 py-4 font-montserrat text-xs tracking-[0.2em] uppercase transition-all duration-300"
                style={{ border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C' }}
              >
                <PhoneIcon />
                Anrufen
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
