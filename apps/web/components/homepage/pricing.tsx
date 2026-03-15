import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"

const plans = [
  {
    name: "1个月",
    price: "¥99",
    note: null,
    recommended: false,
  },
  {
    name: "1年",
    price: "¥520",
    note: "520 = 我爱你",
    recommended: true,
  },
  {
    name: "5年",
    price: "¥1314",
    note: "1314 = 一生一世",
    recommended: false,
  },
]

export function Pricing() {
  return (
    <section className="bg-secondary px-5 py-14 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-1.5 text-xl font-bold text-foreground md:text-2xl">
          多少钱？
        </h2>
        <p className="mb-8 text-sm text-muted-foreground">
          可以先免费试用，满意再付
        </p>

        <div className="flex flex-col gap-3">
          {plans.map((plan) => (
            <Link
              key={plan.name}
              href="/trial"
              className={cn(
                "relative flex items-center justify-between rounded-xl bg-card p-4 transition-shadow hover:shadow-md",
                plan.recommended &&
                  "ring-2 ring-primary shadow-sm"
              )}
            >
              {plan.recommended && (
                <span className="absolute -top-2.5 right-3 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-primary-foreground">
                  推荐 ⭐
                </span>
              )}
              <div>
                <span className="text-sm font-medium text-foreground">
                  {plan.name}
                </span>
                {plan.note && (
                  <span className="mt-0.5 block text-[11px] text-muted-foreground">
                    {plan.note}
                  </span>
                )}
              </div>
              <span className="text-xl font-bold text-primary">
                {plan.price}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
