import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Services - FitZone Gym | Personal Training, Group Classes & More',
  description: 'Discover FitZone Gym services including personal training, group fitness classes, cardio equipment, strength training, nutrition counseling, and more. Find the perfect fitness solution for you.',
  keywords: 'gym services, personal training, group fitness classes, cardio equipment, strength training, nutrition counseling, fitness services',
  openGraph: {
    title: 'Our Services - FitZone Gym',
    description: 'Comprehensive fitness services to help you achieve your goals.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Services />
      <Footer />
    </main>
  )
}

