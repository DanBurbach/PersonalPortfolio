import React from 'react';

function Header(){

  const homeButton = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <div>
      <a class="waves-effect waves-light btn" href="/" style={homeButton}>Home</a>
    </div>
  );
}

export default Header;
