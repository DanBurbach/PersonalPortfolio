import React from 'react';
import PropTypes from 'prop-types';
import ParticlesDisplay from '../../assets/styles/ParticlesDisplay';

const letters = {
  color: 'white'
};

function InterestInfo(props){
  return (
    <div>
      <ParticlesDisplay/>
      <div class="container">
        <div style={letters}>
          <br/>
          <h3>{props.interest}</h3>
          <p>{props.relax}</p>
          <p>{props.stimulate}</p>
          <p>{props.music}</p>
          <p>{props.motivate}</p>
          <p>{props.people}</p>
        </div>
      </div>
    </div>
  );
}

InterestInfo.propTypes = {
  interest: PropTypes.string.isRequired,
  relax: PropTypes.string.isRequired,
  stimulate: PropTypes.string.isRequired,
  music: PropTypes.string.isRequired,
  motivate: PropTypes.string.isRequired,
  people: PropTypes.string.isRequired
};

export default InterestInfo;
