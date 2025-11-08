import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const DATA = [
  {
    quote:
      'Maksab gave us clarity on our cash flow and risk exposure. We made faster, better decisions and saw results in the first quarter.',
    author: 'COO, Regional Retailer',
  },
  {
    quote:
      'Their team balanced compliance and growth beautifully. We now have a clear roadmap for transformation.',
    author: 'CFO, Technology Company',
  },
  {
    quote:
      'Professional, pragmatic, and trustworthy. They delivered measurable outcomes across our transaction process.',
    author: 'Managing Partner, Investment Firm',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % DATA.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 id="testimonials-title" className="text-2xl sm:text-3xl font-semibold text-[#0F101D]">What clients say</h2>
        </Reveal>
        <div className="mt-8 overflow-hidden">
          <div className="relative">
            {DATA.map((t, i) => (
              <blockquote
                key={i}
                className={`transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
              >
                <Reveal>
                  <p className="text-xl sm:text-2xl font-medium text-[#0F101D]">“{t.quote}”</p>
                  <footer className="mt-4 text-sm text-[#414141]">— {t.author}</footer>
                </Reveal>
              </blockquote>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#004987]' : 'bg-gray-300'}`}
              />)
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
