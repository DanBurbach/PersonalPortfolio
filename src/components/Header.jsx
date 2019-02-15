import React from 'react';

function Header(){

  const HomeButton = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <div>
      <a class="waves-effect waves-light btn" href="/" style={HomeButton}>Home</a>
    </div>
  );
}

export default Header;
