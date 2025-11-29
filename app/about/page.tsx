import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - FitZone Gym | Your Fitness Journey Starts Here',
  description: 'Learn about FitZone Gym - your premier fitness destination. State-of-the-art equipment, certified trainers, and a supportive community dedicated to helping you achieve your fitness goals.',
  keywords: 'about fitzone gym, fitness center, gym information, fitness community, certified trainers',
  openGraph: {
    title: 'About Us - FitZone Gym',
    description: 'Your premier fitness destination with state-of-the-art equipment and expert trainers.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </main>
  )
}

