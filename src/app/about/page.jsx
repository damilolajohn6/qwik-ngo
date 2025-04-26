import AboutHero from '@/components/AboutHero'
import MissionVisionSection from '@/components/MissionVisionImageSection'
import OurValue from '@/components/OurValue'
import StatisticsSection from '@/components/StatisticSection'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div>
      <AboutHero />
      <MissionVisionSection />
      <StatisticsSection />
      <OurValue />
    </div>
  )
}

export default AboutUsPage