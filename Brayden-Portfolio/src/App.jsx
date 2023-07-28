import { useRef, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  const childRef = useRef(null)



  return (
    <div className="App">
      <div className="bg-skin-bg ">
        <nav className="sticky py-4 top-0 z-50 bg-skin-bg">
          <Navbar />
        </nav>
        <header className="md:h-screen  ">
          <Header forwardedRef={childRef} />
        </header>
        <section className=" ">
          <About />
        </section>
        <section className="pt-48">
          <Skills />
        </section>
        <section className="pt-48">
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
        <footer className="border-t-2 border-bordermain py-6">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
