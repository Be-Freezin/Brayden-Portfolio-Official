import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="bg-skin-bg">
        <nav>
          <Navbar />
        </nav>
        <header className="h-screen">
          <Header />
        </header>
      </div>
    </div>
  )
}

export default App
