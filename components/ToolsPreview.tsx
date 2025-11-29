import Link from 'next/link'

export default function ToolsPreview() {
  const tools = [
    {
      name: 'BMI Calculator',
      description: 'Calculate your Body Mass Index',
      icon: '📊',
      href: '/tools/bmi-calculator'
    },
    {
      name: 'Protein Calculator',
      description: 'Calculate daily protein needs',
      icon: '💪',
      href: '/tools/protein-requirement-calculator'
    },
    {
      name: 'Calorie Calculator',
      description: 'Calculate daily calories',
      icon: '🔥',
      href: '/tools/calories-calculator'
    },
    {
      name: 'Weight Calculator',
      description: 'Find your ideal weight',
      icon: '⚖️',
      href: '/tools/ideal-weight-calculator'
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Free Fitness Tools
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-[#9fcc2e] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 mb-4">
            Track your progress with our free fitness calculators
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="group bg-gray-50 hover:bg-[#9fcc2e] rounded-lg p-6 md:p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{tool.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/90 transition-colors">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tools"
            className="inline-block bg-[#9fcc2e] hover:bg-[#295135] text-white font-bold py-3 px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Tools →
          </Link>
        </div>
      </div>
    </section>
  )
}

