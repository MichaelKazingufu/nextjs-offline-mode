"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBar() {
    const pathname = usePathname()

    const links = [
        {name: 'Home', href: '/'},
        {name: 'Blog', href: '/blog'},
        {name: 'About', href: '/about'},
        {name: 'Contact', href: '/contact'},
    ]

    return (
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm shadow-slate-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
            Studio One
          </Link>
          <div className="flex items-center gap-2 rounded-full bg-slate-100 p-1">
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === link.href ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-950'}`}>
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    )
}
