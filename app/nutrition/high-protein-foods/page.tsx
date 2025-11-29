import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HighProteinFood from '@/components/HighProteinFood'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'High Protein Foods - Complete Protein Food Guide | FitZone Gym',
  description: 'Discover the best high protein foods for muscle building and weight loss. Complete guide to protein-rich foods with nutritional information.',
  keywords: 'high protein foods, protein rich foods, best protein sources, muscle building foods, protein diet, healthy protein foods',
  openGraph: {
    title: 'High Protein Foods Guide - FitZone Gym',
    description: 'Complete guide to high protein foods for optimal nutrition.',
    type: 'website',
  },
}

export default function HighProteinFoodsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HighProteinFood />
      <Footer />
    </main>
  )
}

