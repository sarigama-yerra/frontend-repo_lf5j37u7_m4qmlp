import Reveal from './Reveal'

export default function ScrollSection({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-24 bg-white" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 id={`${id}-title`} className="text-2xl sm:text-3xl font-semibold text-[#0F101D]">{title}</h2>
            {subtitle && <p className="mt-3 text-[#414141]">{subtitle}</p>}
          </div>
        </Reveal>
        <div className="mt-10">
          <Reveal delay={0.05}>
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
