import { Briefcase, LineChart, Shield, Layers, Receipt, Shuffle } from 'lucide-react'

const items = [
  {
    title: 'Financial Advisor',
    icon: LineChart,
    blurb: 'Clarity on capital, cash flow, and performance to guide smarter decisions.',
  },
  {
    title: 'Business Consulting',
    icon: Briefcase,
    blurb: 'Operational insight to unlock growth and build resilient organizations.',
  },
  {
    title: 'Risk Advisory',
    icon: Shield,
    blurb: 'Proactive frameworks to manage regulatory, market, and operational risks.',
  },
  {
    title: 'Digital Transformation',
    icon: Layers,
    blurb: 'Roadmaps that align technology investments with measurable outcomes.',
  },
  {
    title: 'Tax Advisory',
    icon: Receipt,
    blurb: 'Compliant, strategic tax planning that supports sustainable growth.',
  },
  {
    title: 'Transaction Advisory',
    icon: Shuffle,
    blurb: 'From diligence to integration—maximize deal value and reduce surprises.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="services-title" className="text-2xl sm:text-3xl font-semibold text-[#0F101D]">Key Offerings</h2>
          <p className="mt-3 text-[#414141]">Advisory services designed to drive better decisions, compliance, resilience, and value creation.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, icon: Icon, blurb }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#0670CB]">
              <Icon className="h-6 w-6 text-[#004987]" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-[#0F101D]">{title}</h3>
              <p className="mt-2 text-sm text-[#414141]">{blurb}</p>
              <a href="#contact" className="mt-4 inline-flex text-sm font-medium text-[#0670CB] hover:text-[#004987]">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
