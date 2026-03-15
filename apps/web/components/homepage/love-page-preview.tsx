export function LovePagePreview() {
  return (
    <section className="px-5 pb-16 md:pb-24">
      <div className="mx-auto max-w-md">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2d1a1e] to-[#3a2028] p-6 shadow-2xl shadow-primary/10">
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(224,96,96,0.6), transparent 70%)",
            }}
          />

          {/* Music indicator */}
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-full bg-white/10 text-sm">
              🎵
            </div>
            <span className="text-xs text-white/40">
              周杰伦 - 告白气球
            </span>
            {/* Animated bars */}
            <div className="ml-auto flex items-end gap-0.5">
              {[0.6, 1, 0.4, 0.8, 0.5].map((h, i) => (
                <div
                  key={i}
                  className="w-0.5 rounded-full bg-primary/60"
                  style={{
                    height: `${h * 16}px`,
                    animation: `pulse 1.2s ease-in-out ${i * 0.15}s infinite alternate`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Couple names */}
          <div className="mb-1 text-center">
            <p className="text-xl font-light tracking-wide text-white/90">
              小明 & 小红
            </p>
            <p className="mt-1 text-xs text-white/35">
              在一起 1,234 天 ❤️
            </p>
          </div>

          {/* Photo thumbnails */}
          <div className="mt-5 flex justify-center gap-1.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="size-12 rounded-lg bg-white/[0.07]"
              />
            ))}
            <div className="flex size-12 items-center justify-center rounded-lg bg-white/[0.05] text-[10px] text-white/30">
              +12
            </div>
          </div>

          {/* Label */}
          <p className="mt-5 text-center text-[11px] text-white/25">
            ↑ 你的页面大概长这样
          </p>
        </div>
      </div>
    </section>
  )
}
