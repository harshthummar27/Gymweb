import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import ServicesPreview from '@/components/ServicesPreview'
import NutritionSection from '@/components/NutritionSection'
import ToolsPreview from '@/components/ToolsPreview'
import Features from '@/components/Features'
import StatsSection from '@/components/StatsSection'
import GymToolsHero from '@/components/GymToolsHero'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FitZone Gym - Transform Your Body, Transform Your Life',
  description: 'Join FitZone Gym for the ultimate fitness experience. State-of-the-art equipment, expert trainers, and a supportive community. Calculate BMI, protein needs, calories, and more with our free fitness tools.',
  keywords: 'gym, fitness center, workout, exercise, personal training, fitness tools, BMI calculator, protein calculator, calorie calculator, fitness community',
  openGraph: {
    title: 'FitZone Gym - Transform Your Body, Transform Your Life',
    description: 'Join FitZone Gym for the ultimate fitness experience with state-of-the-art equipment and expert trainers.',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <ServicesPreview />
      <NutritionSection />
      <ToolsPreview />
      <Features />
      <StatsSection />
      <GymToolsHero />
      <CTASection />
      <Footer />  
    </main>
  )
}

