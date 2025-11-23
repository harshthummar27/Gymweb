import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import HighProteinFood from '@/components/HighProteinFood'
import ProteinRequirementCalculator from '@/components/ProteinRequirementCalculator'
import BMICalculator from '@/components/BMICalculator'
import IdealWeightCalculator from '@/components/IdealWeightCalculator'
import CaloriesEstimateCalculator from '@/components/CaloriesEstimateCalculator'
import GymToolsHero from '@/components/GymToolsHero'
import About from '@/components/About'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <HighProteinFood />
      <ProteinRequirementCalculator />
      <BMICalculator />
      <IdealWeightCalculator />
      <CaloriesEstimateCalculator />
      <About />
      <Services />
      <Features />
      <GymToolsHero />
      <Contact />
      <Footer />  
    </main>
  )
}

