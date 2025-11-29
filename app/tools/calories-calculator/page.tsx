import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CaloriesEstimateCalculator from '@/components/CaloriesEstimateCalculator'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Calories Calculator - Daily Calorie Needs Calculator | FitZone Gym',
  description: 'Calculate your daily calorie requirements based on your age, gender, weight, height, and activity level. Get personalized calorie intake recommendations.',
  keywords: 'calorie calculator, daily calories, calorie needs, TDEE calculator, BMR calculator, weight loss calories, fitness nutrition',
  openGraph: {
    title: 'Calories Calculator - FitZone Gym',
    description: 'Calculate your daily calorie needs for weight management.',
    type: 'website',
  },
}

export default function CaloriesCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CaloriesEstimateCalculator />
      <Footer />
    </main>
  )
}

