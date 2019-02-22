import React from 'react';
import { Parallax } from 'react-parallax';


function MainSplash() {

  const mainSplashAnimate = {
    position: 'relative',
    animation:'3s slide-up',
    marginTop: '0%'
  };


  return (
    <div style = {mainSplashAnimate}>
      <Parallax
        blur={0}
        bgImage= {require('../assets/images/SplashAlhambra1.jpg')}
        bgImageAlt="Alhambra"
        strength={900}
      >
        <div style={{ height: '400px' }} />
      </Parallax>
      <div class="section white">
        <div class="row container">
          <h2 class="header">Welcome</h2>
          <p class="grey-text text-darken-3 lighten-3">Here is just a little example of what I am working on. This is called a parrallax and it allows me to have two images on your monitor, display the content that I find that is most important to share with you, AND allow my images to still be shared without them losing their place.</p>
        </div>
      </div>

      <Parallax
        blur={0}
        bgImage={require('../assets/images/SplashBarcelona1.jpg')}
        bgImageAlt="Barcelona"
        strength={900}
      >
        <div style={{ height: '400px' }} />
      </Parallax>
      <div class="section white">
        <div class="row container">
          <p class="grey-text text-darken-3 lighten-3">Here is just a little example of what I am working on. This is called a parrallax and it allows me to have two images on your monitor, display the content that I find that is most important to share with you, AND allow my images to still be shared without them losing their place.</p>
        </div>
      </div>

      <Parallax
        blur={0}
        bgImage={require('../assets/images/SplashBarcelona1.jpg')}
        bgImageAlt="Barcelona"
        strength={900}
      >
        <div style={{ height: '400px' }} />
      </Parallax>
      <div class="section white">
        <div class="row container">
          <p class="grey-text text-darken-3 lighten-3">Here is just a little example of what I am working on. This is called a parrallax and it allows me to have two images on your monitor, display the content that I find that is most important to share with you, AND allow my images to still be shared without them losing their place.</p>
        </div>
      </div>

      <Parallax
        blur={0}
        bgImage={require('../assets/images/SplashBarcelona1.jpg')}
        bgImageAlt="Barcelona"
        strength={900}
      >
        <div style={{ height: '400px' }} />
      </Parallax>
    </div>
  );
}

export default MainSplash;
