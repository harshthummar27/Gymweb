'use client'

import { useState } from 'react'

export default function DietPlanForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    goal: '',
    dietaryPreference: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Diet Plan Form submitted:', formData)
    alert('Thank you! Your diet plan will be sent to your email within seconds.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: '',
      weight: '',
      height: '',
      activityLevel: '',
      goal: '',
      dietaryPreference: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-[#9fcc2e] to-[#295135] text-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
            Get Your Diet Plan in Quick Seconds
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-white mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Fill out the form below and receive your personalized diet plan instantly via email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 space-y-4 md:space-y-5">
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white placeholder-white/70"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white placeholder-white/70"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white placeholder-white/70"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="1"
                max="120"
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white placeholder-white/70"
                placeholder="25"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
              >
                <option value="" className="bg-gray-800 text-white">Select Gender</option>
                <option value="male" className="bg-gray-800 text-white">Male</option>
                <option value="female" className="bg-gray-800 text-white">Female</option>
                <option value="other" className="bg-gray-800 text-white">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="weight" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Weight (kg) *
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                min="1"
                step="0.1"
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white placeholder-white/70"
                placeholder="70"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Height (cm) *
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white placeholder-white/70"
                placeholder="175"
              />
            </div>
            <div>
              <label htmlFor="activityLevel" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Activity Level *
              </label>
              <select
                id="activityLevel"
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
              >
                <option value="" className="bg-gray-800 text-white">Select Activity Level</option>
                <option value="sedentary" className="bg-gray-800 text-white">Sedentary</option>
                <option value="light" className="bg-gray-800 text-white">Light Exercise</option>
                <option value="moderate" className="bg-gray-800 text-white">Moderate Exercise</option>
                <option value="active" className="bg-gray-800 text-white">Very Active</option>
                <option value="very-active" className="bg-gray-800 text-white">Extremely Active</option>
              </select>
            </div>
            <div>
              <label htmlFor="goal" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Fitness Goal *
              </label>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
              >
                <option value="" className="bg-gray-800 text-white">Select Goal</option>
                <option value="weight-loss" className="bg-gray-800 text-white">Weight Loss</option>
                <option value="weight-gain" className="bg-gray-800 text-white">Weight Gain</option>
                <option value="muscle-building" className="bg-gray-800 text-white">Muscle Building</option>
                <option value="maintenance" className="bg-gray-800 text-white">Maintenance</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="dietaryPreference" className="block text-xs sm:text-sm font-medium mb-1 md:mb-1.5">
                Dietary Preference *
              </label>
              <select
                id="dietaryPreference"
                name="dietaryPreference"
                value={formData.dietaryPreference}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-white/20 text-white border border-white/30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
              >
                <option value="" className="bg-gray-800 text-white">Select Preference</option>
                <option value="vegetarian" className="bg-gray-800 text-white">Vegetarian</option>
                <option value="non-vegetarian" className="bg-gray-800 text-white">Non-Vegetarian</option>
                <option value="vegan" className="bg-gray-800 text-white">Vegan</option>
                <option value="no-preference" className="bg-gray-800 text-white">No Preference</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-[#295135] font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Form Now
          </button>
        </form>
      </div>
    </section>
  )
}

