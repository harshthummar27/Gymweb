'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center w-full py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 animate-fade-in">
          Transform Your Body
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#9fcc2e] mb-4 md:mb-6">
          Transform Your Life
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-5 max-w-3xl mx-auto px-2">
          Join FitZone Gym and experience the ultimate fitness journey with state-of-the-art equipment, expert trainers, and a supportive community.
        </p>
        
        {/* Nutrition Text */}
        <div className="mb-6 md:mb-8">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
            Find protein, calcium and minerals in any food-fast
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-2">
            Discover the nutritional value of any food instantly with our advanced nutrition finder
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-2">
          <a
            href="#contact"
            className="bg-[#9fcc2e] hover:bg-[#295135] text-white font-semibold py-2.5 px-5 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
          <a
            href="#about"
            className="bg-transparent border-2 border-white text-white font-semibold py-2.5 px-5 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base transition duration-300 hover:bg-white hover:text-gray-900"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition duration-300"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:gap-3">
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
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

