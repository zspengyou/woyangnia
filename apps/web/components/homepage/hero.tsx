import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export function Hero() {
  return (
    <section className="px-5 pb-12 pt-16 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-medium text-primary">
          给你的另一半一个惊喜 ✨
        </p>

        <h1 className="text-3xl font-bold leading-snug tracking-tight text-foreground md:text-5xl md:leading-tight">
          送给 TA
          <br />
          一个专属的
          <br />
          <span className="text-primary">爱情小窝</span>
        </h1>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          一个只属于你们两个人的网页
          <br />
          记录照片、纪念日、还有你们的歌
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Button size="lg" asChild>
            <Link href="/trial" className="!rounded-xl !px-7 !py-3 !text-base">
              免费试试看
            </Link>
          </Button>
          <span className="text-sm text-muted-foreground">不需要下载 App</span>
        </div>
      </div>
    </section>
  )
}
