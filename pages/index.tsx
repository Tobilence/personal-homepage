import type { NextPage } from 'next'
import About from '../src/components/sections/About/About'
import Contact from '../src/components/sections/Contact/Contact'
import Interests from '../src/components/sections/Interests/Interests'
import LandingPage from '../src/components/sections/LandingPage/LandingPage'
import Skills from '../src/components/sections/Skills/Skills'

const Home: NextPage = () => {
	return (
		<div>
			<LandingPage />
			<About />
			<Interests />
			<Skills />
			<Contact />
		</div>
	)
}

export default Home
