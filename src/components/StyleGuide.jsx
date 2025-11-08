import React from 'react'
import { Rocket, Star } from 'lucide-react'
import Reveal from './Reveal'
import AIHeroImages from './AIHeroImages'

const BrandSwatch = ({ hex, name }) => (
  <div className="flex items-center gap-3">
    <div className="h-12 w-12 rounded-md border" style={{ backgroundColor: hex }} />
    <div className="text-sm"><div className="font-medium">{name}</div><div className="text-gray-500">{hex}</div></div>
  </div>
)

export default function StyleGuide() {
  return (
    <section className="pb-24" aria-label="Style guide">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F101D]">Style Guide</h1>
            <p className="mt-2 text-[#414141] max-w-2xl">Design tokens, typography, colors, button variants, and component examples used across the Maksab website.</p>
          </header>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-10">
          <Reveal>
            <section aria-labelledby="colors-title" className="rounded-2xl border border-gray-200 p-6">
              <h2 id="colors-title" className="text-xl font-semibold text-[#0F101D]">Colors</h2>
              <div className="mt-4 space-y-4">
                <BrandSwatch hex="#004987" name="Primary" />
                <BrandSwatch hex="#99994B" name="Accent" />
                <BrandSwatch hex="#0F101D" name="Ink" />
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section aria-labelledby="type-title" className="rounded-2xl border border-gray-200 p-6">
              <h2 id="type-title" className="text-xl font-semibold text-[#0F101D]">Typography</h2>
              <div className="mt-4 space-y-3">
                <p className="text-4xl font-bold text-[#0F101D]">Display / 40px — Bold</p>
                <p className="text-2xl font-semibold text-[#0F101D]">Heading / 24px — Semibold</p>
                <p className="text-base text-[#414141]">Body / 16px — Regular. Clear and readable for long-form content.</p>
                <p className="text-sm text-[#414141]">Caption / 14px — Supporting details, metadata, and labels.</p>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section aria-labelledby="buttons-title" className="rounded-2xl border border-gray-200 p-6">
              <h2 id="buttons-title" className="text-xl font-semibold text-[#0F101D]">Buttons</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-[#004987] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0670CB]"><Rocket className="h-4 w-4"/>Primary</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-[#004987]/20 px-4 py-2 text-sm font-semibold text-[#004987] hover:bg-[#004987]/5">Outline</a>
                <button className="inline-flex items-center gap-2 rounded-xl bg-[#99994B] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"><Star className="h-4 w-4"/>Accent</button>
              </div>
            </section>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <section aria-labelledby="components-title" className="mt-10 rounded-2xl border border-gray-200 p-6">
            <h2 id="components-title" className="text-xl font-semibold text-[#0F101D]">Components</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border p-4">
                <h3 className="font-semibold text-[#0F101D]">Card</h3>
                <p className="mt-2 text-sm text-[#414141]">Compact container with border, shadow, and hover state.</p>
                <div className="mt-4 rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition">
                  <p className="text-sm text-[#0F101D]">Example card content</p>
                </div>
              </div>
              <div className="rounded-xl border p-4">
                <h3 className="font-semibold text-[#0F101D]">Badge</h3>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <span className="inline-flex items-center rounded-full bg-[#004987]/10 px-2.5 py-1 text-xs font-medium text-[#004987]">Primary</span>
                  <span className="inline-flex items-center rounded-full bg-[#99994B]/10 px-2.5 py-1 text-xs font-medium text-[#99994B]">Accent</span>
                  <span className="inline-flex items-center rounded-full bg-[#0F101D]/10 px-2.5 py-1 text-xs font-medium text-[#0F101D]">Ink</span>
                </div>
              </div>
            </div>

            <AIHeroImages />
          </section>
        </Reveal>
      </div>
    </section>
  )
}
