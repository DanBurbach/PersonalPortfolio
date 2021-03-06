import React from 'react';

function Bottom(){

  const main = {
    position: 'fixed',
    bottom: '0',
    width: '100%'
  };

  const footStyleMain = {
    backgroundColor: '#333333',
  };

  const footStyle = {
    backgroundColor: '#666666',
    color: 'white'
  };


  return (
    <div style={main}>
      <footer class="page-footer" style={footStyleMain}>
        <div class="footer-copyright" style={footStyle}>
          <div class="container">
            <p>Copyright © 2019 Daniel Burbach</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Bottom;
