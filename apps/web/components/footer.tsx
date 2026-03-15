import Link from "next/link"

const footerLinks = [
  { label: "演示", href: "/demo" },
  { label: "价格", href: "/pricing" },
  { label: "免费试用", href: "/trial" },
  { label: "联系我们", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/" className="text-base font-bold text-foreground">
            我养你呀 💕
          </Link>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground/60">
            <span>微信联系: {process.env.NEXT_PUBLIC_WECHAT_ID}</span>
            <span>&copy; {new Date().getFullYear()} woyangnia.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
