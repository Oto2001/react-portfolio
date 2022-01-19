import React from 'react';
import githubLogo from '../images/github.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ name, description, technologies, demoLink, githubLink }) {
	return (
		<div className="project-card">
			<h3 className="project-name">{name}</h3>
			<p className="project-description">{description}</p>
			<ul className="education-achievements">
				{technologies
					? technologies.map((technology, key) => {
							return <li key={key}>{technology}</li>;
					  })
					: null}
			</ul>
			<div className="project-addresses">
				<a className="github-link" target="_blank" rel="noreferrer" href={githubLink}>
					<img src={githubLogo} alt="github" />
				</a>
				<a className="demo-link" target="_blank" rel="noreferrer" href={demoLink}>
					DEMO <FontAwesomeIcon icon={faArrowRight} />
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
