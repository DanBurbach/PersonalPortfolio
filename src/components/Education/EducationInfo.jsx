import React from 'react';
import PropTypes from 'prop-types';

function EducationInfo(props){
  return (
    <div>
      <h3>{props.school} - {props.location}</h3>
      <p><em>{props.degree}</em></p>
      <p><em>{props.info}</em></p>
      <p><em>{props.focus}</em></p>
      <hr/>
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
