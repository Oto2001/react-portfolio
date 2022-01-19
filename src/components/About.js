import React from 'react';
import '../styles/about.css';
import programmerGif from '../images/programmer-at-desck.png';

function About() {
	return (
		<section className="about-wrapper" id="about">
			<div className="skewed-bg"></div>
			<div className="about-content">
				<h2 className="section-title">About Me</h2>
				<div className="main-content">
					<img className="about-svg" src={programmerGif} alt="programmer" />
					<p>
						My name is Otar Mamatsashvili. I am 3rd year student and learning on faculty
						of information technologies. I am going to become full-stack web developer
						in future but currently I am more focused on front-end development with
						React.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
