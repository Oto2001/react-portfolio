import React from 'react';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Navigation />
			<Banner />
			<About />
			<Education />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
