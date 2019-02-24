import React from 'react';
import PropTypes from 'prop-types';
import ParticlesDisplay from '../ParticlesDisplay';

const container = {
  color: 'white'
}

function InterestsInfo(props){
  return (
    <div>
    <ParticlesDisplay/>
    <div class="container">
      <h3>{props.day} - {props.location}</h3>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
      </div>
    </div>
  );
}

InterestsInfo.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default InterestsInfo;
