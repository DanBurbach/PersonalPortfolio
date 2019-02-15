import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){


  return (
    <div>
      <Link to="/projectslist">Projects</Link>
      <Link to="/educationlist">Education</Link>
      <Link to="/interestslist">Interests</Link>
      <Link to="/personallist">Personal</Link>
    </div>

  );
}

export default Navigation;
