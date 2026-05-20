import React from 'react'

export default function Blog() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-6 py-10 sm:px-10">
      <section className="mx-auto max-w-6xl rounded-3xl bg-white p-10 shadow-lg shadow-slate-200/40">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Insights</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Latest thinking on product, design, and growth.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Read expert articles, practical guidance, and case studies that help teams move from concept to launch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 p-8">
              <p className="text-sm font-semibold text-indigo-700">Product strategy</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">How to align every page with business goals</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Practical guidance for turning stakeholder input into a clear roadmap that improves conversions and brand trust.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 p-8">
              <p className="text-sm font-semibold text-indigo-700">Design systems</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">Design once, scale across every screen</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Learn why consistency, accessibility, and modular components give teams a faster path to polish.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 p-8">
              <p className="text-sm font-semibold text-indigo-700">Launch stories</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">Create momentum with narrative-led product launches</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Case studies and launch tactics for building buzz, improving retention, and strengthening your market position.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 p-8">
              <p className="text-sm font-semibold text-indigo-700">Growth</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">Measure what matters with modern analytics</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Discover the metrics that matter for digital products so your team can make faster, smarter decisions.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
