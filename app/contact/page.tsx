import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - FitZone Gym | Get in Touch Today',
  description: 'Contact FitZone Gym today! Reach out for membership inquiries, personal training, group classes, or any questions. We are here to help you start your fitness journey.',
  keywords: 'contact fitzone gym, gym membership, fitness inquiry, personal training contact, gym location',
  openGraph: {
    title: 'Contact Us - FitZone Gym',
    description: 'Get in touch with FitZone Gym to start your fitness journey.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
}

