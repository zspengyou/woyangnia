"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"

const navLinks = [
  { label: "演示", href: "/demo" },
  { label: "价格", href: "/pricing" },
  { label: "联系我们", href: "/contact" },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          我养你呀{" "}
          <span className="text-primary" aria-hidden>
            💕
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/trial"
            className="ml-2 rounded-xl bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            免费试用
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent sm:hidden"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="transition-transform"
          >
            {menuOpen ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/50 transition-all duration-200 ease-out sm:hidden",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/trial"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            免费试用
          </Link>
        </div>
      </div>
    </nav>
  )
}
