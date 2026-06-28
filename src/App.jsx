import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Termin from './pages/Termin'

function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [hash])
  return null
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ScrollToHash />
            <Navbar />
            <main>
              <Hero />
              <Services />
              <Gallery />
              <Reviews />
              <Contact />
            </main>
            <Footer />
          </>
        }
      />
      <Route
        path="/termin"
        element={
          <>
            <Navbar />
            <main><Termin /></main>
            <Footer />
          </>
        }
      />
      <Route
        path="/impressum"
        element={
          <>
            <Navbar />
            <main><Impressum /></main>
            <Footer />
          </>
        }
      />
      <Route
        path="/datenschutz"
        element={
          <>
            <Navbar />
            <main><Datenschutz /></main>
            <Footer />
          </>
        }
      />
    </Routes>
  )
}
