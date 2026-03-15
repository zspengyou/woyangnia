const features = [
  {
    emoji: "📸",
    title: "照片轮播",
    description: "不限数量，自动压缩",
  },
  {
    emoji: "🎵",
    title: "背景音乐",
    description: "支持网易云音乐链接",
  },
  {
    emoji: "💑",
    title: "在一起 XX 天",
    description: "实时计数，每天都在涨",
  },
  {
    emoji: "🌹",
    title: "浪漫主题",
    description: "玫瑰花瓣飘落动画",
  },
]

export function Features() {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-xl font-bold text-foreground md:text-2xl">
          你的页面会有
        </h2>

        <div className="grid gap-3 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3.5 rounded-xl bg-secondary p-4"
            >
              <span className="text-2xl" aria-hidden>
                {feature.emoji}
              </span>
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
