'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // High-quality images - Replace these URLs with your actual images
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80',
      alt: 'Fitness and Nutrition'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80',
      alt: 'Healthy Food and Protein'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&q=80',
      alt: 'Nutrition and Minerals'
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="relative h-[50vh] min-h-[400px] sm:min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center w-full py-2 sm:py-4 md:py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-3 animate-fade-in">
          Transform Your Body
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#9fcc2e] mb-2 sm:mb-3 md:mb-4">
          Transform Your Life
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 sm:mb-3 md:mb-4 max-w-3xl mx-auto px-2">
          Join FitZone Gym and experience the ultimate fitness journey with state-of-the-art equipment, expert trainers, and a supportive community.
        </p>
        
        {/* Nutrition Text */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-white mb-0.5 sm:mb-1">
            Find protein, calcium and minerals in any food-fast
          </p>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto px-2">
            Discover the nutritional value of any food instantly with our advanced nutrition finder
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center px-2">
          <Link
            href="/contact"
            className="bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-1.5 px-4 sm:py-2 sm:px-5 md:py-2.5 md:px-6 rounded-lg text-xs sm:text-sm md:text-base transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </Link>
          <Link
            href="/about"
            className="bg-transparent border-2 border-white text-white font-semibold py-1.5 px-4 sm:py-2 sm:px-5 md:py-2.5 md:px-6 rounded-lg text-xs sm:text-sm md:text-base transition duration-300 hover:bg-white hover:text-gray-900"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-[#9fcc2e]'
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

