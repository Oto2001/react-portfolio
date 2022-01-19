import React from 'react';
import '../styles/footer.css';
import profile from '../images/profile-picture.png';
import '../styles/banner.css';
import github from '../images/github2.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';

function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<h3>Sections</h3>
				<nav>
					<ul>
						<li>
							<a className="footer-nav-link" href="#banner">
								Banner
							</a>
						</li>
						<li>
							<a className="footer-nav-link" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="footer-nav-link" href="#education">
								Education
							</a>
						</li>
						<li>
							<a className="footer-nav-link" href="#projects">
								Projects
							</a>
						</li>
						<li>
							<a className="footer-nav-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="footer-social">
				<a href="https://github.com/Oto2001" target="_blank" rel="noreferrer">
					<img className="footer-link" src={github} alt="github" />
				</a>

				<a
					href="https://www.linkedin.com/in/otar-mamatsashvili/"
					target="_blank"
					rel="noreferrer"
				>
					<img className="footer-link" src={linkedin} alt="linkedin" />
				</a>
				<a
					href="https://www.instagram.com/oto_mamatsashvili/"
					target="_blank"
					rel="noreferrer"
				>
					<img className="footer-link" src={instagram} alt="instagram" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
