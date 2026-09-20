import FinalCTA from '../components/FinalCTA'
import Hero from '../components/Hero'
import SelectedWorks from '../components/SelectedWorks'
import StatsBar from '../components/StatsBar'
import TechStack from '../components/TechStack'
import WhyWorkWithMe from '../components/WhyWorkWithMe'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TechStack />
      <SelectedWorks />
      <WhyWorkWithMe />
      <FinalCTA />
    </>
  )
}
