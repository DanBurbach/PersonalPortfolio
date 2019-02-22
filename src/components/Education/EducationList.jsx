import React from 'react';
import EducationInfo from './EducationInfo';

const masterEducationList = [
  {
    school: 'Epicodus',
    location: 'Portland, OR',
    degree: 'Current Student',
    info: 'I am currently learning how to build web applications using Javascript, Ruby/Rails, HTML, and CSS. During this I am also learning how to break down problems/logic, find solutions, and increase my willingness and interest in learning new code every day.'
    'The best way I can describe it is climbing a mountain: The initial planning is essential, the kickoff can be amazingly exciting, the trek will be challenging and you might slip here and there but the team will pull through, and when you get to the top and are done you look around at the amazing view and feeling of accomplishment and think "Yeah, you are going to do this again.',
    focus: 'HTML, Ruby, Javascript, Angular, React, jQuery, Git, CSS, Angular, Ruby on Rails, pair programming'
  },
  {
    school: 'Portland State University',
    location: 'Portland, OR',
    degree: 'Project Management Certificate of Completion - 2016',
    info: 'The ability to create and lead successful projects is no longer left solely to professional project managers; these skills are now required by the vast majority of positions regardless of industry or title.'
    'This certificate program is intended for both new and experienced project managers who have little formal education in project management.',
    focus: 'Project Planning and Organization, Project Management Communications and Teamwork, Project Execution and Management, Project Leadership and Conflict Management'
  },
  {
    school: 'University of Oregon',
    location: 'Eugene, OR',
    degree: 'Bachelor of Science - 2005',
    info: 'Double degrees: Fine Art with a focus on graphic design, oil paint, and letter press - Political Science with a focus on political theory, political history, and change. Studying in both fields allowed me to merge them with my outside activites and taught me how to explain and communicate both visually and verbally.',
    focus: 'Ultimate Frisbee, Disc Golf, Alpha Phi Omega community service co-ed fraternity.'
  }
];

function EducationList() {
  return (
    <div>
      {masterEducationList.map((educationInfo, index) =>
        <EducationInfo school={educationInfo.school}
        location={educationInfo.location}
        degree={educationInfo.degree}
        info={educationInfo.info}
        focus={educationInfo.focus}
        key = {index}/>
    )}
    </div>
  );
}

export default EducationList;
