import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
  return (
    <div>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
      <Link to="/interests">Interests</Link>
      <Link to="/personal">Personal</Link>
    </div>
  );
}

export default Navigation;
