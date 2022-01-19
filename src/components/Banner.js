import React from 'react';
import profilePicture from '../images/profile-picture.png';
import '../styles/banner.css';
import github from '../images/github2.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';

function Banner() {
	return (
		<div className="banner" id="banner">
			<div className="banner-main">
				<h1 className="banner-title">
					Hello, I'm <span className="author-name">Otar !</span> Welcome to my World.
				</h1>
				<div className="banner-social-wrapper">
					<a href="https://github.com/Oto2001" target="_blank" rel="noreferrer">
						<img className="banner-link" src={github} alt="github" />
					</a>

					<a
						href="https://www.linkedin.com/in/otar-mamatsashvili/"
						target="_blank"
						rel="noreferrer"
					>
						<img className="banner-link" src={linkedin} alt="linkedin" />
					</a>
					<a
						href="https://www.instagram.com/oto_mamatsashvili/"
						target="_blank"
						rel="noreferrer"
					>
						<img className="banner-link" src={instagram} alt="instagram" />
					</a>
				</div>
			</div>
			<img className="banner-profile" src={profilePicture} alt="profile" />
		</div>
	);
}

export default Banner;
