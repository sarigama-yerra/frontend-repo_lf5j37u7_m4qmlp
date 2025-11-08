export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-gray-200 bg-[#0F101D] text-white" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Maksab Trust International" className="h-9 w-auto" />
            <span className="font-semibold">Maksab Trust International</span>
          </div>
          <p className="mt-4 text-sm text-gray-300 max-w-md">Trusted financial and business advisory focused on clarity, compliance, and long‑term value.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>Jakarta, Indonesia</li>
            <li>+62 812-3456-7890</li>
            <li><a href="mailto:hello@maksab.id" className="hover:text-white">hello@maksab.id</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Follow</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a></li>
            <li><a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-gray-400">© {year} Maksab Trust International. All rights reserved.</div>
      </div>
    </footer>
  )
}
