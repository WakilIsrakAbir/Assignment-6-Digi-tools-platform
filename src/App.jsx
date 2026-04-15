import './App.css'
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
    </>
  )
}

export default App
