import React from 'react';
import PropTypes from 'prop-types';
import ParticlesDisplay from '../ParticlesDisplay';

const letters = {
  color: 'white',

};

function EducationInfo(props){
  return (
    <div>
      <ParticlesDisplay/>
      <div class="container">
        <div style={letters}>
          <hr/>
          <h5>{props.school}</h5>
          <h6>{props.location}</h6>
          <p>{props.degree}</p>
          <p>{props.info}</p>
          <p>{props.focus}</p>
          <hr/>
        </div>
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
