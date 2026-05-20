export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Studio One. Crafted for modern teams.</p>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-slate-900" href="/about">About</a>
          <a className="transition hover:text-slate-900" href="/blog">Blog</a>
          <a className="transition hover:text-slate-900" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
