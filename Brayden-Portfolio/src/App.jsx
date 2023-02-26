import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"

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
        <section>
          <Skills />
        </section>
      </div>
    </div>
  )
}

export default App
