import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobsListing from '../components/JobsListing'
import ViewJobs from '../components/ViewJobs'
const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobsListing ishome={true} />
      <ViewJobs />
    </>
  )
}

export default Homepage
