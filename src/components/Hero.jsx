import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32" aria-label="Hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F101D]">
            We connect the dots so you can make smarter decisions
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-7 text-[#414141] max-w-xl">
            Maksab Trust International is your partner for credible financial and business advisory—focused on clarity, compliance, resilience, and long‑term value creation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#004987] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0670CB] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0670CB]"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-[#004987]/20 px-5 py-3 text-sm font-semibold text-[#004987] hover:bg-[#004987]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0670CB]"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden bg-white shadow-sm">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
