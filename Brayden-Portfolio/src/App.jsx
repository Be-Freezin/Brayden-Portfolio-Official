import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"

function App() {
  

  return (
    <div className="App">
      <div className="bg-skin-bg">
        <nav>
          <Navbar />
        </nav>
        <header className="h-screen">
          <Header />
        </header>
        <section>
          <About />
        </section>
      </div>
    </div>
  )
}

export default App
