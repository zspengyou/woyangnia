const steps = [
  {
    number: 1,
    title: "写上你们的故事",
    description: "名字、纪念日、照片、一首歌",
  },
  {
    number: 2,
    title: "微信扫码付款",
    description: "最低 ¥99 / 月",
  },
  {
    number: 3,
    title: "把链接发给 TA 💌",
    description: "ta.woyangnia.com 专属域名",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary px-5 py-14 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-xl font-bold text-foreground md:text-2xl">
          超简单，三步就好
        </h2>

        <div className="flex flex-col gap-5">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                {step.number}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
