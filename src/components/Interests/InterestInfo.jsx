import React from 'react';
import PropTypes from 'prop-types';

function InterestsInfo(props){
  return (
    <div>
      <h3>{props.day} - {props.location}</h3>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
      <hr/>
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
