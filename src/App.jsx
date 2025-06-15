import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Reward from "./components/reward"
import About from "./components/about us"
import Accounts from "./components/Accounts"
import Try from "./components/try"
import Footer from "./components/footer"
import './index.css'; // or wherever your custom CSS lives
import './App.css'; // or wherever your custom CSS lives

function App() {
 

  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <Reward/>
      <Payment/>
      <Deal/>
      <About/>
      <Accounts/>
      <Try/>
      <Footer/>
      
      
      
      
    </div>
    </>
    
  )
}
import Payment from "./components/payment"
import Deal from "./components/deal"

export default App
