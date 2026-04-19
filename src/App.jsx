import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import ExploreOption from './Components/ExploreOption/ExploreOption'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import MiddlePart from './Components/Hero/MiddlePart'
import Navbar from './Components/Navbar/Navbar'
import PriceingSection from './Components/PriceingSection/PriceingSection'
import Steps from './Components/Steps/Steps'
import Tools from './Components/Tools/Tools'
import Tabs from './Components/Tools/Tabs'
import ToolsHeading from './Components/Tools/ToolsHeading'


const getTools = async () => {
  const res = await fetch("/Tools.json")
  return res.json()
}

const toolPromise = getTools();

function App() {
  const [activeTab, setActiveTab] = useState("Tools");
  const [cards, setCards] = useState([]);
  // console.log(cards);

  return (
    <>
      <Navbar cards={cards}></Navbar>
      <Hero></Hero>
      <MiddlePart></MiddlePart>
      <ToolsHeading></ToolsHeading>

      <div className="">
        <Tabs setActiveTab={setActiveTab} cards={cards}></Tabs>
      </div>

      {activeTab === "Tools" ? (
        <Tools
          toolPromise={toolPromise}
          cards={cards}
          setCards={setCards}
        ></Tools>
      ) : null}

      {activeTab === "Card" ? (
        <Card cards={cards} setCards={setCards}></Card>
      ) : null}

      <Steps></Steps>
      <PriceingSection></PriceingSection>
      <ExploreOption></ExploreOption>
      <Footer></Footer>
    </>
  );
}

export default App
