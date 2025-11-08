import { MessagesSquare, Target, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Connect with an advisor',
    icon: MessagesSquare,
    copy: 'Start with a conversation to understand your goals and context.',
  },
  {
    title: 'Select the best strategy',
    icon: Target,
    copy: 'We tailor a pragmatic plan aligned to outcomes and constraints.',
  },
  {
    title: 'Deliver measurable results',
    icon: CheckCircle2,
    copy: 'Execute with discipline and track progress against KPIs.',
  },
]

export default function Process() {
  return (
    <section className="py-16 sm:py-24 bg-[#0F101D] text-white" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="process-title" className="text-2xl sm:text-3xl font-semibold">Our Process</h2>
          <p className="mt-3 text-gray-300">We listen deeply, tailor strategies, and deliver with measurable outcomes.</p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3" role="list">
          {steps.map(({ title, icon: Icon, copy }, idx) => (
            <li key={title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm text-gray-300">Step {idx + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
