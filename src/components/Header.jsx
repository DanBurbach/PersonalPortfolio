import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h3><Link to="/">Home</Link></h3>
    </div>
  );
}

export default Header;
