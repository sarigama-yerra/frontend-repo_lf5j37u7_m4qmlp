import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#414141]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <section className="py-12 sm:py-16 bg-[#0F101D] text-white" aria-label="Final call to action">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold">Start building your financial future today</h2>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-xl bg-[#004987] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0670CB] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              Book a Free Consultation
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
