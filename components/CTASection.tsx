import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#9fcc2e] to-[#295135] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of members who have transformed their lives with FitZone
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[#295135] hover:bg-gray-100 font-bold py-3 px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </Link>
          <Link
            href="/services"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#295135] font-bold py-3 px-6 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition duration-300"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}

