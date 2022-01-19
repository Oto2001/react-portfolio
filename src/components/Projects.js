import React from 'react';
import '../styles/projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
	return (
		<div className="projects-wrapper" id="projects">
			<div className="skewed-bg"></div>
			<div className="about-content">
				<h2 className="section-title">My Projects</h2>
				<div className="main-content">
					<ProjectCard
						name="PokemonCards App"
						description="Application processes POKEAPI RESTful API and creates pokemon cards with it's main components."
						technologies={[
							'Javascript/React',
							'HTML/CSS',
							'React-Router',
							'Reactstrap',
							'Axios',
						]}
						demoLink="https://nostalgic-panini-0bca9b.netlify.app"
						githubLink="https://github.com/Oto2001/LastReactHomework"
					/>
					<ProjectCard
						name="MovieCards App"
						description="Application processes RESTful API provided by MovieDB and creates cards of popular movies."
						technologies={[
							'Javascript/React',
							'HTML/CSS',
							'Reactstrap',
							'Axios',
							'FontAwesome',
						]}
						demoLink="https://gifted-lewin-7e1785.netlify.app"
						githubLink="https://github.com/Oto2001/react-movies"
					/>
					<ProjectCard
						name="Todo List"
						description="Standart todo application which saves data in local storage and provides some other features."
						technologies={['HTML/CSS', 'Javascript']}
						demoLink="https://otomamatsashvili.github.io/Todo-List/"
						githubLink="https://github.com/otomamatsashvili/Todo-List"
					/>
				</div>
			</div>
		</div>
	);
}

export default Projects;
