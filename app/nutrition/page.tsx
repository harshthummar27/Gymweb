import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HighProteinFood from '@/components/HighProteinFood'
import HighCalorieFood from '@/components/HighCalorieFood'
import HighCalciumFood from '@/components/HighCalciumFood'
import HighVitaminFood from '@/components/HighVitaminFood'
import Footer from '@/components/Footer'
import ScrollToSection from '@/components/ScrollToSection'

export const metadata: Metadata = {
  title: 'Nutrition Guide - High Protein, Calorie, Calcium & Vitamin Foods | FitZone Gym',
  description: 'Discover high protein foods, high calorie foods, high calcium foods, and high vitamin foods. Complete nutrition guide with search functionality for eggs, paneer, banana, and more.',
  keywords: 'nutrition guide, high protein foods, high calorie foods, high calcium foods, high vitamin foods, healthy foods, nutrition facts',
  openGraph: {
    title: 'Nutrition Guide - FitZone Gym',
    description: 'Complete nutrition guide with high protein, calorie, calcium, and vitamin foods.',
    type: 'website',
  },
}

export default function NutritionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScrollToSection />
      <HighProteinFood />
      <HighCalorieFood />
      <HighCalciumFood />
      <HighVitaminFood />
      <Footer />
    </main>
  )
}

