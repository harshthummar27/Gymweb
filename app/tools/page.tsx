import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Fitness Tools & Calculators - Free Health Calculators | FitZone Gym',
  description: 'Access free fitness calculators including BMI calculator, protein requirement calculator, ideal weight calculator, and calories calculator. Get personalized health insights.',
  keywords: 'fitness calculators, BMI calculator, protein calculator, calorie calculator, weight calculator, health tools, fitness tools',
  openGraph: {
    title: 'Fitness Tools & Calculators - FitZone Gym',
    description: 'Free fitness calculators to help you achieve your health goals.',
    type: 'website',
  },
}

const tools = [
  {
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index to understand your body composition',
    href: '/tools/bmi-calculator',
    icon: '📊',
  },
  {
    name: 'Protein Requirement Calculator',
    description: 'Calculate your daily protein needs based on your fitness goals',
    href: '/tools/protein-requirement-calculator',
    icon: '💪',
  },
  {
    name: 'Ideal Weight Calculator',
    description: 'Determine your ideal body weight based on height and body frame',
    href: '/tools/ideal-weight-calculator',
    icon: '⚖️',
  },
  {
    name: 'Calories Calculator',
    description: 'Calculate your daily calorie requirements for weight management',
    href: '/tools/calories-calculator',
    icon: '🔥',
  },
]

export default function ToolsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fitness Tools & Calculators
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Free fitness calculators to help you track your progress and achieve your health goals
            </p>
            <div className="w-16 md:w-24 h-1 bg-[#9fcc2e] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="text-4xl md:text-5xl mb-4">{tool.icon}</div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#9fcc2e] transition-colors">
                    {tool.name}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-[#9fcc2e] font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Calculate Now</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

