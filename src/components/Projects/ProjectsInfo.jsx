import React from 'react';
import PropTypes from 'prop-types';

function ProjectsInfo(props){
  return (
    <div>
      <h3>{props.day} - {props.location}</h3>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
      <hr/>
    </div>
  );
}

ProjectsInfo.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default ProjectsInfo;
