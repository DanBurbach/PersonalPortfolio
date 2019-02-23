import React from 'react';
import PropTypes from 'prop-types';

function PersonalInfo(props){
  return (
    <div>
      <div class="container">
        <h5>{props.who}</h5>
        <h5>{props.where}</h5>
        <p><em>{props.thoughts}</em></p>
        <p><em>{props.focus}</em></p>
      </div>
    </div>
  );
}

PersonalInfo.propTypes = {
  who: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  thoughts: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired
};

export default PersonalInfo;
