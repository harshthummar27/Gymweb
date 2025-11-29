import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Shop by Category - FitZone Gym | Fitness Equipment & Accessories',
  description: 'Browse FitZone Gym categories including cardio equipment, strength training, protein supplements, yoga accessories, fitness apparel, nutrition plans, and more.',
  keywords: 'fitness equipment, gym equipment, cardio equipment, strength training, protein supplements, fitness accessories, workout gear',
  openGraph: {
    title: 'Shop by Category - FitZone Gym',
    description: 'Browse our wide range of fitness equipment and accessories.',
    type: 'website',
  },
}

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Categories />
      <Footer />
    </main>
  )
}

