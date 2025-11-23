export default function Services() {
  const services = [
    {
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers to help you achieve your specific fitness goals.',
      icon: '💪',
    },
    {
      title: 'Group Classes',
      description: 'Join our high-energy group fitness classes including yoga, spinning, and HIIT workouts.',
      icon: '👥',
    },
    {
      title: 'Cardio Zone',
      description: 'State-of-the-art cardio equipment including treadmills, ellipticals, and rowing machines.',
      icon: '🏃',
    },
    {
      title: 'Strength Training',
      description: 'Comprehensive weight training area with free weights, machines, and functional training equipment.',
      icon: '🏋️',
    },
    {
      title: 'Nutrition Counseling',
      description: 'Expert nutrition advice to complement your fitness journey and optimize your results.',
      icon: '🥗',
    },
    {
      title: 'Locker Rooms',
      description: 'Clean, spacious locker rooms with showers, sauna, and all amenities you need.',
      icon: '🚿',
    },
  ]

  return (
    <section id="services" className="py-8 md:py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Our Services
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Everything you need for a complete fitness experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

