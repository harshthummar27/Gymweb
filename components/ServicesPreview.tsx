import Link from 'next/link'

export default function ServicesPreview() {
  const services = [
    {
      title: 'High Protein Diet',
      description: 'Customized meal plans for muscle building',
      icon: '💪',
    },
    {
      title: 'Weight Loss Diet',
      description: 'Structured plans for sustainable weight loss',
      icon: '⚖️',
    },
    {
      title: 'Weight Gain Diet',
      description: 'Healthy weight gain meal plans',
      icon: '📈',
    },
    {
      title: 'High Vitamin Diet',
      description: 'Nutrient-rich plans for optimal health',
      icon: '🥗',
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Our Diet Goals
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 mb-4">
            Personalized diet plans tailored to your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 text-center">{service.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-[#9fcc2e] hover:bg-[#295135] text-white font-bold py-3 px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}

