import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ProteinRequirementCalculator from '@/components/ProteinRequirementCalculator'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Protein Requirement Calculator - Daily Protein Needs | FitZone Gym',
  description: 'Calculate your daily protein requirements based on your weight, activity level, and fitness goals. Get personalized protein intake recommendations.',
  keywords: 'protein calculator, daily protein needs, protein requirement, protein intake calculator, fitness nutrition, muscle building protein',
  openGraph: {
    title: 'Protein Requirement Calculator - FitZone Gym',
    description: 'Calculate your daily protein needs for optimal fitness results.',
    type: 'website',
  },
}

export default function ProteinCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProteinRequirementCalculator />
      <Footer />
    </main>
  )
}

