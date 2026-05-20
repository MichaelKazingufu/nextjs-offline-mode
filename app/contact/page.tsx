import React from 'react'

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-6 py-10 sm:px-10">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg shadow-slate-200/40">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Contact</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Let’s talk about your next digital project.</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Whether you need a fresh website, a product refresh, or content strategy guidance, we’re ready to support your team with professional execution and clear direction.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Email</p>
            <p className="mt-3 text-lg font-semibold text-slate-950">hello@yourstudio.com</p>
            <p className="mt-6 text-sm leading-6 text-slate-600">
              Expect a response within one business day. We prioritize thoughtful proposals and clear next steps.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Office</p>
            <p className="mt-3 text-lg font-semibold text-slate-950">Remote-first collaboration</p>
            <p className="mt-6 text-sm leading-6 text-slate-600">
              We work with clients around the world and tailor communication rhythms to your preferred workflow.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40">
          <label className="space-y-2 text-sm text-slate-700">
            <span>Name</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" placeholder="Your name" />
          </label>
          <label className="space-y-2 text-sm text-slate-700">
            <span>Email</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" placeholder="you@example.com" />
          </label>
          <label className="space-y-2 text-sm text-slate-700">
            <span>Project details</span>
            <textarea className="min-h-[140px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" placeholder="Share a few details about your goals." />
          </label>
          <button className="inline-flex items-center justify-center rounded-2xl bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">
            Send a message
          </button>
        </div>
      </section>
    </main>
  )
}
