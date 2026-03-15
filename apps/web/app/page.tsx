import { Nav } from "@/components/nav"
import { Hero } from "@/components/homepage/hero"
import { LovePagePreview } from "@/components/homepage/love-page-preview"
import { HowItWorks } from "@/components/homepage/how-it-works"
import { Features } from "@/components/homepage/features"
import { Pricing } from "@/components/homepage/pricing"
import { BottomCta } from "@/components/homepage/bottom-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LovePagePreview />
        <HowItWorks />
        <Features />
        <Pricing />
        <BottomCta />
      </main>
      <Footer />
    </>
  )
}
