import React from 'react';
import ParticlesDisplay from './ParticlesDisplay';
import { Parallax } from 'react-materialize';

function MainSplash() {

  const mainSplashAnimate = {
    position: 'relative',
    transformOrigin: 'bottom',
    marginTop: '0%'
  };


  return (
    <div style = {mainSplashAnimate}>
      <ParticlesDisplay/>
      <div class = 'container'>
      <div>
       <Parallax imageSrc="https://ob9a8415roh4djoj110c31a1-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/alhambra-palace.jpg"/>
      </div>
      <div class="section transparent">
        <h2 className="header white-text">Welcome</h2>
        <p className="white-text text-darken-3 lighten-3"><em>The more I study, the more insatiable do I feel my genius for it to be. Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand. That brain of mine is something more than merely mortal; as time will show.  -- Ada Lovelace</em></p>
        </div>
      <div>
       <Parallax imageSrc="https://ob9a8415roh4djoj110c31a1-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/alhambra-palace.jpg"/>
      </div>
    </div>
    </div>
  );
}

export default MainSplash;
