import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export function BottomCta() {
  return (
    <section className="px-5 py-16 text-center md:py-24">
      <div className="mx-auto max-w-md">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">
          准备好了吗？
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          免费创建，看看效果
        </p>
        <Button size="lg" asChild className="mt-6">
          <Link href="/trial" className="!rounded-xl !px-8 !py-3 !text-base">
            开始创建 →
          </Link>
        </Button>
      </div>
    </section>
  )
}
