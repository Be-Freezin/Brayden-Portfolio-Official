import { useRef, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

function App() {
  const childRef = useRef(null)

  // useEffect(() => {
  //   console.log(childRef.current)
  // }, [])

  return (
    <div className="App">
      <div className="bg-skin-bg">
        <nav>
          <Navbar />
        </nav>
        <header className="h-screen">
          <Header forwardedRef={childRef} />
        </header>
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
