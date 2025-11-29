import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fitzone-gym.com'), // Update with your actual domain
  title: {
    default: 'FitZone Gym - Transform Your Body, Transform Your Life',
    template: '%s | FitZone Gym',
  },
  description: 'Join FitZone Gym for the ultimate fitness experience. State-of-the-art equipment, expert trainers, and a supportive community. Free fitness calculators and nutrition guides.',
  keywords: ['gym', 'fitness', 'workout', 'exercise', 'personal training', 'fitness center', 'BMI calculator', 'protein calculator', 'calorie calculator'],
  authors: [{ name: 'FitZone Gym' }],
  creator: 'FitZone Gym',
  publisher: 'FitZone Gym',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fitzone-gym.com',
    siteName: 'FitZone Gym',
    title: 'FitZone Gym - Transform Your Body, Transform Your Life',
    description: 'Join FitZone Gym for the ultimate fitness experience with state-of-the-art equipment and expert trainers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitZone Gym - Transform Your Body, Transform Your Life',
    description: 'Join FitZone Gym for the ultimate fitness experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

