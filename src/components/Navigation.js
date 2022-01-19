import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navigation.css';

function Navigation() {
	const [visible, setVisible] = useState('0');
	let prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			setVisible('0');
		} else {
			setVisible('-100px');
		}
		prevScrollpos = currentScrollPos;
	};
	return (
		<Navbar className="navbar" expand="lg" style={{ top: visible }}>
			<Container>
				<Navbar.Brand
					id="nav-title"
					href="#banner"
					style={{ color: 'rgb(246, 72, 87)', fontWeight: 'bold', fontSize: '2rem' }}
				>
					Portfolio
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					style={{ border: 'none', color: 'white' }}
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#about" style={{ color: 'white', fontSize: '1.4rem' }}>
							About
						</Nav.Link>
						<Nav.Link href="#education" style={{ color: 'white', fontSize: '1.4rem' }}>
							Education
						</Nav.Link>
						<Nav.Link href="#projects" style={{ color: 'white', fontSize: '1.4rem' }}>
							Projects
						</Nav.Link>
						<Nav.Link href="#contact" style={{ color: 'white', fontSize: '1.4rem' }}>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
