import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navigation.css';

function Navigation() {
	const [visible, setVisible] = useState('0');
	const [toggleIcon, setToggleIcon] = useState(0);
	let prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			setVisible('0');
		} else {
			setVisible('-400px');
			setToggleIcon(0);
		}
		prevScrollpos = currentScrollPos;
	};

	return (
		<nav className="navbar" style={{ top: visible }}>
			<div className="container">
				<a href="#banner" className="logo">
					Portfolio
				</a>
				<ul className={toggleIcon ? 'active' : ''}>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#education">Education</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
				<div
					className="toggle-button"
					onClick={(e) => (toggleIcon ? setToggleIcon(0) : setToggleIcon(1))}
				>
					<i className={toggleIcon ? 'fa fa-times' : 'fa fa-bars'}></i>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
