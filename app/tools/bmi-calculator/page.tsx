import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import BMICalculator from '@/components/BMICalculator'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BMI Calculator - Free Body Mass Index Calculator | FitZone Gym',
  description: 'Calculate your Body Mass Index (BMI) for free with our accurate BMI calculator. Understand your body composition and get personalized health insights.',
  keywords: 'BMI calculator, body mass index, BMI tool, health calculator, fitness calculator, body composition',
  openGraph: {
    title: 'BMI Calculator - FitZone Gym',
    description: 'Calculate your Body Mass Index for free and get health insights.',
    type: 'website',
  },
}

export default function BMICalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BMICalculator />
      <Footer />
    </main>
  )
}

