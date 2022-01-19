import React from 'react';
import '../styles/education.css';
import EducationCard from './EducationCard';

function Education() {
	return (
		<div className="blue-section" id="education">
			<h2 className="section-title" style={{ color: 'white' }}>
				Education
			</h2>
			<div className="main-content">
				<EducationCard
					schoolName="BTU-Business And Technology University"
					faculty="Information Technology"
					duration="October 2019-Present"
					achievements={['100% Scholarship', '94 Average Score']}
				/>
				<EducationCard
					schoolName="GITA-Georgian Innovation And Technology Agency"
					faculty="Python Programming For Begginers"
					duration="June 2017-Avgust 2017"
					achievements={['Successful finish']}
				/>
				<EducationCard
					schoolName="Kaspi II Public School"
					duration="September 2007-May 2019"
					achievements={['Gold Medal', 'Lapthop in 9th class']}
				/>
			</div>
		</div>
	);
}

export default Education;
