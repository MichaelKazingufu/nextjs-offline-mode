import React from 'react'

export default function About() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-6 py-10 sm:px-10">
      <section className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-3xl bg-white p-10 shadow-lg shadow-slate-200/40">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">About us</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">A collaborative studio for teams who value quality and clarity.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We partner with ambitious founders, agencies, and in-house teams to create digital experiences that feel premium, perform reliably, and clearly communicate the value behind every brand.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
            <h2 className="text-xl font-semibold text-slate-950">Our Passion</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              We care deeply about thoughtful design, clean code, and business outcomes. Every project is an opportunity to raise the bar.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
            <h2 className="text-xl font-semibold text-slate-950">Our Approach</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              We listen first, define clear outcomes, and deliver with structure. That means fewer revisions and more confidence at launch.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/40">
            <h2 className="text-xl font-semibold text-slate-950">Our Commitment</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Reliability, polished execution, and easy collaboration are non-negotiable. We make work feel professional and enjoyable.
            </p>
          </article>
        </div>

        <div className="rounded-3xl bg-white p-10 shadow-lg shadow-slate-200/40">
          <h2 className="text-2xl font-semibold text-slate-950">What we deliver</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Design systems</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Scalable design foundations that keep your brand consistent and speed up every future update.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Performance websites</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Fast, accessible pages built to convert and retain visitors across devices.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Content strategy</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Messaging that reflects your positioning and connects with customers clearly.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Ongoing support</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Responsive collaboration beyond launch so your product keeps evolving smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
