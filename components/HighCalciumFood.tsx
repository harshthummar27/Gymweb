'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HighCalciumFood() {
  const [searchQuery, setSearchQuery] = useState('')

  const calciumFoods = [
    {
      id: 1,
      name: 'Milk',
      type: 'Veg',
      calcium: '300mg',
      serving: '250ml',
      protein: '8g',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
      description: 'Excellent source of calcium and vitamin D'
    },
    {
      id: 2,
      name: 'Yogurt',
      type: 'Veg',
      calcium: '200mg',
      serving: '200g',
      protein: '10g',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
      description: 'Probiotics and high calcium content'
    },
    {
      id: 3,
      name: 'Cheese',
      type: 'Veg',
      calcium: '721mg',
      serving: '100g',
      protein: '25g',
      image: 'https://images.unsplash.com/photo-1618164436249-4473940d1f5f?w=400&q=80',
      description: 'Highest calcium content in dairy'
    },
    {
      id: 4,
      name: 'Sardines',
      type: 'Non-veg',
      calcium: '382mg',
      serving: '100g',
      protein: '25g',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80',
      description: 'Fish with edible bones, rich in calcium'
    },
    {
      id: 5,
      name: 'Tofu',
      type: 'Veg',
      calcium: '350mg',
      serving: '100g',
      protein: '8g',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80',
      description: 'Plant-based calcium source'
    },
    {
      id: 6,
      name: 'Broccoli',
      type: 'Veg',
      calcium: '47mg',
      serving: '100g',
      protein: '3g',
      image: 'https://images.unsplash.com/photo-1584270354949-c26b1d162e46?w=400&q=80',
      description: 'Green vegetable with good calcium'
    },
    {
      id: 7,
      name: 'Almonds',
      type: 'Veg',
      calcium: '264mg',
      serving: '100g',
      protein: '21g',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
      description: 'Nuts high in calcium and healthy fats'
    },
    {
      id: 8,
      name: 'Paneer',
      type: 'Veg',
      calcium: '200mg',
      serving: '100g',
      protein: '18g',
      image: 'https://images.unsplash.com/photo-1618164436249-4473940d1f5f?w=400&q=80',
      description: 'Indian cheese, excellent calcium source'
    },
  ]

  const filteredFoods = calciumFoods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="high-calcium" className="py-8 md:py-12 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            High Calcium Food
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 mb-4">
            Calcium-rich foods for strong bones and teeth
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search high calcium foods..."
                className="w-full px-4 py-2.5 pl-10 pr-4 text-sm bg-white text-gray-900 rounded-lg shadow-md border border-gray-200 focus:outline-none focus:border-[#9fcc2e] focus:ring-2 focus:ring-[#9fcc2e]"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-3 sm:gap-4 md:gap-5 min-w-max md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredFoods.map((food) => (
              <div
                key={food.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 min-w-[200px] md:min-w-0"
              >
                {/* Image */}
                <div className="relative h-36 sm:h-40 md:h-48 w-full overflow-hidden">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 50vw, 20vw"
                  />
                  {/* Type Badge - Icon Only */}
                  <div className="absolute top-2 right-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      food.type === 'Non-veg' 
                        ? 'bg-red-600' 
                        : 'bg-green-600'
                    }`}>
                      {food.type === 'Non-veg' ? (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      ) : (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">
                    {food.name}
                  </h3>
                  
                  <div className="space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Calcium:</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#9fcc2e]">{food.calcium}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Serving:</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{food.serving}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Protein:</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{food.protein}</span>
                    </div>
                  </div>

                  {/* Buttons Row */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-1.5 md:py-2 px-2 md:px-3 text-xs sm:text-sm rounded-lg transition duration-300 transform hover:scale-105">
                      View Details →
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1.5 md:py-2 px-2 md:px-3 text-xs sm:text-sm rounded-lg transition duration-300">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

