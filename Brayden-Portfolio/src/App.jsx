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
		<div className='App'>
			<div className='bg-skin-bg '>
				<Navbar />

				<header className='md:h-screen  '>
					<Header forwardedRef={childRef} />
				</header>
				<section  className=' '>
					<About />
				</section>
				<section className=''>
					<Skills />
				</section>
				<section className=''>
					<Projects />
				</section>
				<section>
					<Contact />
				</section>
				<footer className='border-t-2 border-bordermain py-6'>
					<Footer />
				</footer>
			</div>
		</div>
	)
}

export default App
