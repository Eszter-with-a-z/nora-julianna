"use client"

import Link from "next/link"
import { useState } from "react"
import { projects } from "@/lib/projects"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "/" },
    ...projects.map((project) => ({
      label: project.title,
      href: `/projects/${project.slug}`,
    })),
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-56 bg-white border-r border-gray-200 p-8 transform transition-transform duration-300 ease-in-out z-40 md:relative md:transform-none md:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav className="space-y-8 mt-16 md:mt-0">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest mb-2">Portfolio</h2>
            <p className="text-sm text-gray-600">Nora Julianna</p>
          </div>

          {/* Navigation Items */}
          <ol className="space-y-4 text-sm">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block hover:font-bold transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-gray-400 group-hover:text-gray-600">{String(index).padStart(2, "0")}.</span>{" "}
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
