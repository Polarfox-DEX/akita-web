import React from 'react'
import '../App.css'
import { Blog } from '../components/blog/Blog'
import { HowToBuy } from '../components/HowToBuy'
import { Banner } from '../components/banner/Banner'
import { FirstTime } from '../components/first-time/FirstTime'

function Home() {
  return (
    <div>
      <Banner />
      <Blog className="mt-24" />
      <HowToBuy />
      <FirstTime className="mt-24" />
    </div>
  )
}

export default Home
