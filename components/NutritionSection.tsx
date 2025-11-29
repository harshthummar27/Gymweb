'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NutritionSection() {
  const nutritionCards = [
    { 
      id: 'high-protein', 
      label: 'High Protein', 
      description: 'Build muscle with protein-rich foods',
      icon: '💪',
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80',
      color: 'from-blue-500 to-blue-600',
      href: '/nutrition#high-protein'
    },
    { 
      id: 'high-calorie', 
      label: 'High Calorie', 
      description: 'Energy-dense foods for weight gain',
      icon: '🔥',
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80',
      color: 'from-orange-500 to-orange-600',
      href: '/nutrition#high-calorie'
    },
    { 
      id: 'high-calcium', 
      label: 'High Calcium', 
      description: 'Strengthen bones and teeth',
      icon: '🦴',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
      color: 'from-green-500 to-green-600',
      href: '/nutrition#high-calcium'
    },
    { 
      id: 'high-vitamin', 
      label: 'High Vitamin', 
      description: 'Boost immunity and health',
      icon: '🥗',
      image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f4?w=400&q=80',
      color: 'from-purple-500 to-purple-600',
      href: '/nutrition#high-vitamin'
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Nutrition Finder
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 mb-4">
            Find foods by nutritional value - Protein, Calories, Calcium, and Vitamins
          </p>
          <Link 
            href="/nutrition" 
            className="inline-block bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            View All Nutrition Guide →
          </Link>
        </div>

        {/* Nutrition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {nutritionCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
            >
              <div className="relative h-48 sm:h-56 w-full">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white z-10">
                  <div className="text-4xl md:text-5xl mb-2">{card.icon}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2 text-center">
                    {card.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-center text-white/90">
                    {card.description}
                  </p>
                  <div className="mt-3 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold">
                    Click to View →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

