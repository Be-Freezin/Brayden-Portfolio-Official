import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="bg-skin-bg">
        <nav>
          <Navbar />
        </nav>
      </div>
    </div>
  )
}

export default App
