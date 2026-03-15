import { Figtree, Noto_Sans_SC } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-sc",
})

export const metadata = {
  title: "我养你呀 — 送给 TA 一个专属的爱情小窝",
  description:
    "创建一个只属于你们两个人的浪漫网页。记录照片、纪念日、还有你们的歌。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        figtree.variable,
        notoSansSC.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
