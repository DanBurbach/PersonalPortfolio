import React from 'react';
import PropTypes from 'prop-types';

function ProjectsInfo(props){
  return (
    <div>
      <div class="container">
        <h3>{props.projectname}</h3>
        <p><em>{props.description}</em></p>
        <img src={props.screenshot}/>
        <p><em>{props.language}</em></p>
        <p>{props.link}</p>
      </div>
    </div>
  );
}

ProjectsInfo.propTypes = {
  projectname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshot: PropTypes.element.isRequired,
  language: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ProjectsInfo;
