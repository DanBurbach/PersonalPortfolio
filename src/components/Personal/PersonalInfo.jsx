import React from 'react';
import PropTypes from 'prop-types';
import ParticlesDisplay from '../ParticlesDisplay';

const container = {
  color: 'white'
}

function PersonalInfo(props){
  return (
    <div>
    <ParticlesDisplay/>
      <div class="container">
        <br/>
        <p><em>{props.who}</em></p>
        <p><em>{props.where}</em></p>
        <p><em>{props.thoughts}</em></p>
        <p><em>{props.creativity}</em></p>
        <p><em>{props.focus}</em></p>
      </div>
    </div>
  );
}

PersonalInfo.propTypes = {
  who: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  thoughts: PropTypes.string.isRequired,
  creativity: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired
};

export default PersonalInfo;
