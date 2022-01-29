import React from 'react';
import '../styles/contact.css';

function Contact() {
	return (
		<div className="blue-section" id="contact">
			<h2 className="section-title" style={{ color: 'white' }}>
				Contact Me
			</h2>
			<form className="contacts-form" action="submit">
				<div method="POST" className="contact-inputs">
					<div className="form-section left">
						<input
							type="text"
							id="input-name"
							placeholder="Name"
							required
							minLength="3"
						/>
						<input type="email" id="input-email" placeholder="Email address" required />
						<input
							type="text"
							id="input-subject"
							placeholder="Subject"
							required
							minLength="3"
						/>
					</div>
					<div className="form-section right">
						<textarea
							name="message"
							id="input-message"
							cols="30"
							rows="5"
							minLength="10"
							placeholder="Message..."
						></textarea>
					</div>
				</div>
				<input type="submit" value="Submit" id="input-submit" />
			</form>
		</div>
	);
}

export default Contact;
