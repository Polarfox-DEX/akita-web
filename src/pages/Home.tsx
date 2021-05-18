import '../App.css'
import { Blog } from '../components/blog/Blog'
import { HowToBuy } from '../components/HowToBuy'
import { Banner } from '../components/banner/Banner'
import { FirstTime } from '../components/first-time/FirstTime'

function Home() {
  return (
    <>
      <Banner />
      <Blog />
      <HowToBuy />
      <FirstTime />
    </>
  )
}

export default Home
