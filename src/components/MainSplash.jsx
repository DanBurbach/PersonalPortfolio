import React from 'react';
import ParticlesDisplay from '../assets/styles/ParticlesDisplay';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Animated } from "react-animated-css";


function MainSplash() {
  return (
    <div>
      <ParticlesDisplay/>
      <ParallaxProvider>
      <div class = 'container'>
        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
            <img src='https://i.redd.it/kf8bmgns8ezz.jpg' height='400px' />
        </Parallax>
        </Animated>

        <div class="section transparent">
          <h2 className="header white-text">Welcome</h2>
          <p className="white-text text-darken-3 lighten-3"><em>The more I study, the more insatiable do I feel my genius for it to be. Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand. That brain of mine is something more than merely mortal; as time will show.  -- Ada Lovelace</em></p>
        </div>
        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
            <img src='https://t-ec.bstatic.com/images/hotel/max1024x768/246/24668000.jpg' height='400px' />
        </Parallax>
        </Animated>
      </div>
      </ParallaxProvider>
    </div>
  );
}

export default MainSplash;
