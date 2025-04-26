import AdvocateSection from '@/components/AdvocateSection'
import DonateSection from '@/components/DonateSection'
import EventsSection from '@/components/EventsSection'
import GetInvolvedIntro from '@/components/GetInvolvedIntro'
import InvolveHero from '@/components/InvolveHero'
import NewsletterSection from '@/components/NewsletterSection'
import PartnerSection from '@/components/PartnerSection'
import VolunteerSection from '@/components/VolunteerSection'
import WaysToImpactOverview from '@/components/WaysToImpactOverview'
import React from 'react'

const GetInvolvePage = () => {
  return (
    <div className='bg-gray-100'>
      <InvolveHero />
      <GetInvolvedIntro />
      <WaysToImpactOverview />
      <DonateSection />
      <VolunteerSection />
      <PartnerSection />
      <AdvocateSection />
      <EventsSection />
      <NewsletterSection />
    </div>
  )
}

export default GetInvolvePage
