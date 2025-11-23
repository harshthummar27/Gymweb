import Image from 'next/image'

export default function HighProteinFood() {
  const proteinFoods = [
    {
      id: 1,
      name: 'Chicken Breast',
      type: 'Non-veg',
      protein: '200g',
      proteinAmount: '62g',
      calories: '335',
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80',
      description: 'Lean protein source, perfect for muscle building'
    },
    {
      id: 2,
      name: 'Salmon',
      type: 'Non-veg',
      protein: '200g',
      proteinAmount: '40g',
      calories: '412',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
      description: 'Rich in omega-3 and high-quality protein'
    },
    {
      id: 3,
      name: 'Eggs',
      type: 'Non-veg',
      protein: '200g',
      proteinAmount: '26g',
      calories: '310',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80',
      description: 'Complete protein with all essential amino acids'
    },
    {
      id: 4,
      name: 'Greek Yogurt',
      type: 'Veg',
      protein: '200g',
      proteinAmount: '20g',
      calories: '130',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
      description: 'High protein dairy, great for recovery'
    },
    {
      id: 5,
      name: 'Tofu',
      type: 'Veg',
      protein: '200g',
      proteinAmount: '16g',
      calories: '144',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80',
      description: 'Plant-based protein, perfect for vegetarians'
    },
    {
      id: 6,
      name: 'Lentils',
      type: 'Veg',
      protein: '200g',
      proteinAmount: '18g',
      calories: '230',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80',
      description: 'High fiber and protein, budget-friendly'
    },
    {
      id: 7,
      name: 'Turkey',
      type: 'Non-veg',
      protein: '200g',
      proteinAmount: '58g',
      calories: '331',
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80',
      description: 'Lean meat, excellent protein source'
    },
    {
      id: 8,
      name: 'Cottage Cheese',
      type: 'Veg',
      protein: '200g',
      proteinAmount: '28g',
      calories: '206',
      image: 'https://images.unsplash.com/photo-1618164436249-4473940d1f5f?w=400&q=80',
      description: 'High casein protein, slow-digesting'
    },
    {
      id: 9,
      name: 'Tuna',
      type: 'Non-veg',
      protein: '200g',
      proteinAmount: '50g',
      calories: '232',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80',
      description: 'Low fat, high protein fish'
    },
    {
      id: 10,
      name: 'Chickpeas',
      type: 'Veg',
      protein: '200g',
      proteinAmount: '19g',
      calories: '364',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
      description: 'Plant protein with fiber and nutrients'
    }
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            High Protein Food
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Discover protein-rich foods to fuel your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {proteinFoods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-36 sm:h-40 md:h-48 w-full overflow-hidden">
                <Image
                  src={food.image}
                  alt={food.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                {/* Type Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    food.type === 'Non-veg' 
                      ? 'bg-[#295135] text-white' 
                      : 'bg-[#0e402d] text-white'
                  }`}>
                    {food.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">
                  {food.name}
                </h3>
                
                <div className="space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Protein:</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">{food.protein}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Amount:</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#9fcc2e]">{food.proteinAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Calories:</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">{food.calories} kcal</span>
                  </div>
                </div>

                {/* View More Details Button */}
                <button className="w-full bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-1.5 md:py-2 px-3 md:px-4 text-xs sm:text-sm rounded-lg transition duration-300 transform hover:scale-105">
                  View More Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

