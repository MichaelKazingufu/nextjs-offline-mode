export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-6 py-10 sm:px-10">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/40">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
              Product-led digital services
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Build a confident brand experience for modern teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We design polished websites, landing pages, and strategic content for ambitious companies that want a clean, modern online presence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-slate-800"
              >
                Start a project
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/60">
            <h2 className="text-xl font-semibold text-slate-950">Strategy First</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Every page is crafted around your audience, goals, and growth plan to deliver measurable results.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/60">
            <h2 className="text-xl font-semibold text-slate-950">Elevated Design</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Clean layouts, premium typography, and thoughtful interactions create a memorable, professional presence.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/60">
            <h2 className="text-xl font-semibold text-slate-950">Fast Delivery</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Launch confidently with a streamlined process that keeps timelines clear, communication tight, and quality high.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
