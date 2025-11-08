import React from 'react'
import Reveal from './Reveal'

function AIImage({ prompt, title }) {
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`
  return (
    <figure className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
      <img src={url} alt={title} className="w-full h-64 object-cover" loading="lazy" />
      <figcaption className="p-4 text-sm text-[#414141]"><span className="font-medium text-[#0F101D]">{title}:</span> {prompt}</figcaption>
    </figure>
  )
}

export default function AIHeroImages() {
  const base = 'professional photography, minimal, premium business consulting, diverse team, clean negative space, subtle depth of field, high contrast, brand colors #004987, #99994B, #0F101D'
  const prompts = [
    { title: 'Homepage Hero', prompt: `${base}, executive boardroom perspective, city skyline reflections, confident leadership, modern charts hologram` },
    { title: 'Services — Financial Advisory', prompt: `${base}, financial analyst reviewing dashboards, cash flow graphs, calm blue tones with gold accent` },
    { title: 'Services — Risk Advisory', prompt: `${base}, risk heatmap on glass wall, security and governance motif, sharp geometric shadows` },
  ]

  return (
    <section aria-label="AI Hero Images" className="mt-10">
      <Reveal>
        <h2 className="text-xl font-semibold text-[#0F101D]">AI‑Generated Hero Images</h2>
        <p className="mt-2 text-sm text-[#414141]">Live images generated from descriptive prompts using an open AI image service. Prompts are tuned to match the Maksab brand palette and consulting themes.</p>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((p) => (
          <Reveal key={p.title}>
            <AIImage {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
