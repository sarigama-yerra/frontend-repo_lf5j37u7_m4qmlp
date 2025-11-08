import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur bg-white/80 shadow-sm py-2' : 'py-4'
      }`}
      aria-label="Primary navigation"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" role="navigation">
        <a href="#" className="flex items-center gap-2" aria-label="Maksab Trust International home">
          <img src="/logo.png" alt="Maksab Trust International" className="h-9 w-auto" />
          <span className="sr-only">Maksab Trust International</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#414141] hover:text-[#0670CB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0670CB] rounded"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-[#004987] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0670CB] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0670CB]"
          >
            Book a Free Consultation
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#414141] hover:text-[#0670CB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0670CB]"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-[#414141] hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 block rounded-xl bg-[#004987] px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0670CB]"
              onClick={() => setOpen(false)}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
