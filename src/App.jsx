import './App.css'
import ExploreOption from './Components/ExploreOption/ExploreOption'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import MiddlePart from './Components/Hero/MiddlePart'
import Navbar from './Components/Navbar/Navbar'
import PriceingSection from './Components/PriceingSection/PriceingSection'
import Steps from './Components/Steps/Steps'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <MiddlePart></MiddlePart>
      <Steps></Steps>
      <PriceingSection></PriceingSection>
      <ExploreOption></ExploreOption>
      <Footer></Footer>
    </>
  )
}

export default App
