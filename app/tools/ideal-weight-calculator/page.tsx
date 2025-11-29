import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import IdealWeightCalculator from '@/components/IdealWeightCalculator'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ideal Weight Calculator - Calculate Your Target Weight | FitZone Gym',
  description: 'Calculate your ideal body weight based on height, gender, and body frame. Get personalized weight goals for your fitness journey.',
  keywords: 'ideal weight calculator, target weight, healthy weight calculator, body weight calculator, fitness goals',
  openGraph: {
    title: 'Ideal Weight Calculator - FitZone Gym',
    description: 'Calculate your ideal body weight for optimal health.',
    type: 'website',
  },
}

export default function IdealWeightCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <IdealWeightCalculator />
      <Footer />
    </main>
  )
}

