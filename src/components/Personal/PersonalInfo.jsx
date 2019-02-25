import React from 'react';
import PropTypes from 'prop-types';
import ParticlesDisplay from '../ParticlesDisplay';

const letters = {
  color: 'white'
};

function PersonalInfo(props){
  return (
    <div>
      <ParticlesDisplay/>
      <div class="container">
        <div style={letters}>
          <br/>
          <h3>{props.title}</h3>
          <p><em>{props.who}</em></p>
          <p><em>{props.where}</em></p>
          <p><em>{props.thoughts}</em></p>
          <p><em>{props.creativity}</em></p>
          <p><em>{props.focus}</em></p>
          <br/>
          <p>- Daniel Burbach </p>
        </div>
      </div>
    </div>
  );
}

PersonalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  who: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  thoughts: PropTypes.string.isRequired,
  creativity: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired
};

export default PersonalInfo;
