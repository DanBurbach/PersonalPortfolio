import React from 'react';
import PropTypes from 'prop-types';
import ParticlesDisplay from '../ParticlesDisplay';

const letters = {
  color: 'white'
};

function ProjectsInfo(props){
  return (
    <div>
      <ParticlesDisplay/>
      <div class="container">
        <div style={letters}>
          <h4>{props.projectname}</h4>
          <p><em>{props.description}</em></p>
          <img src= {props.screenimage}/>
          <p><em>{props.language}</em></p>
          <a href={props.link}>Link To Project</a>
        </div>
      </div>
    </div>
  );
}

ProjectsInfo.propTypes = {
  projectname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenimage: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ProjectsInfo;
