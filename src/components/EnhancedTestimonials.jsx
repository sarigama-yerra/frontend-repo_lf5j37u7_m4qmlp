import React from 'react'
import Reveal from './Reveal'

const testimonials = [
  {
    quote: 'Maksab transformed our financial reporting cadence and unlocked new growth levers within two quarters.',
    author: 'CFO, Nusantara Foods',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    case: 'Reduced monthly close from 15 to 5 days while improving forecast accuracy by 18%.',
  },
  {
    quote: 'A pragmatic partner. Clear frameworks, clean execution, and measurable impact.',
    author: 'Managing Director, Merdeka Capital',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    case: 'Delivered end-to-end transaction support across diligence and integration for a $45M acquisition.',
  },
  {
    quote: 'Their approach to risk and compliance gave us confidence to scale into two new markets.',
    author: 'CEO, Archipelago Tech',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/SVG_Logo.svg',
    case: 'Designed a risk framework and trained teams, reducing incidents by 32% YoY.',
  },
]

export default function EnhancedTestimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 id="testimonials-title" className="text-2xl sm:text-3xl font-semibold text-[#0F101D]">Trusted by operators and investors</h2>
            <p className="mt-3 text-[#414141]">Client quotes, partner logos, and real outcomes from our case work.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.author}>
              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <img src={t.logo} alt="Client logo" className="h-8 w-8 object-contain" />
                  <div className="text-sm text-[#414141]">{t.author}</div>
                </div>
                <blockquote className="mt-4 text-[#0F101D]">“{t.quote}”</blockquote>
                <p className="mt-3 text-sm text-[#414141]">{t.case}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
