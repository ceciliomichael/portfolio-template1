import { Navigation } from "@/components/ui/navigation"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  )
}