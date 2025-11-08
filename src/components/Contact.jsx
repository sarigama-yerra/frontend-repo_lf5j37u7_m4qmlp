import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      // Frontend template environment: simulate API success
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      form.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="contact-title" className="text-2xl sm:text-3xl font-semibold text-[#0F101D]">Contact Us</h2>
          <p className="mt-3 text-[#414141]">Tell us about your goals and challenges. We’ll respond within one business day.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-[#0F101D]" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#0670CB] focus:ring-[#0670CB]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F101D]" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#0670CB] focus:ring-[#0670CB]" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-[#0F101D]" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#0670CB] focus:ring-[#0670CB]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F101D]" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#0670CB] focus:ring-[#0670CB]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F101D]" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#0670CB] focus:ring-[#0670CB]"></textarea>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-[#004987] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0670CB] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0670CB]"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              <a href="mailto:hello@maksab.id" className="text-sm font-medium text-[#0670CB] hover:text-[#004987]">Or email us directly</a>
            </div>
            {status === 'success' && (
              <p role="status" className="text-sm text-green-600">Thanks—we’ll be in touch shortly.</p>
            )}
            {status === 'error' && (
              <p role="status" className="text-sm text-red-600">Something went wrong. Please try again or use email.</p>
            )}
          </form>

          <div className="rounded-2xl bg-[#0F101D] text-white p-6">
            <h3 className="text-lg font-semibold">Our Office</h3>
            <p className="mt-2 text-sm text-gray-300">Jakarta, Indonesia</p>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              <li>Phone: +62 812-3456-7890</li>
              <li>Email: <a className="underline" href="mailto:hello@maksab.id">hello@maksab.id</a></li>
            </ul>
            <div className="mt-6 h-56 w-full rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
              <span className="text-xs text-gray-300">Map placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
