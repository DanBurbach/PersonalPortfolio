import React from 'react';
import PropTypes from 'prop-types';

function EducationInfo(props){
  return (
    <div>
      <div class="container">
        <h4>{props.school}</h4>
        <h5>{props.location}</h5>
        <p>{props.degree}</p>
        <p>{props.info}</p>
        <p>{props.focus}</p>
      </div>
    </div>
  );
}

EducationInfo.propTypes = {
  school: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired
};

export default EducationInfo;
