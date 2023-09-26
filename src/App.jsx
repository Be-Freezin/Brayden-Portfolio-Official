import { useRef, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
	const childRef = useRef(null)

	return (
		<div className='App bg-skin-bg'>
			<Navbar />
			<Header forwardedRef={childRef} />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
