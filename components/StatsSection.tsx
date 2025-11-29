export default function StatsSection() {
  const stats = [
    {
      number: '10,000+',
      label: 'Active Members',
      icon: '👥'
    },
    {
      number: '50+',
      label: 'Expert Trainers',
      icon: '💪'
    },
    {
      number: '100+',
      label: 'Fitness Classes',
      icon: '🏋️'
    },
    {
      number: '24/7',
      label: 'Open Hours',
      icon: '⏰'
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
            Join Our Growing Community
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            >
              <div className="text-3xl md:text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9fcc2e] mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

