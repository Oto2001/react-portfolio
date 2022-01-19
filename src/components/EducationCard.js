import React from 'react';

function EducationCard({ schoolName, faculty, duration, achievements }) {
	return (
		<div className="education-card">
			<h3 className="education-school">{schoolName}</h3>
			<h4 className="education-faculty">{faculty}</h4>
			<p className="education-duration">{duration}</p>
			<ul className="education-achievements">
				{achievements
					? achievements.map((achievement, key) => {
							return <li key={key}>{achievement}</li>;
					  })
					: null}
			</ul>
		</div>
	);
}

export default EducationCard;
