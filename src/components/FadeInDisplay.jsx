import React from 'react';

function FadeInDisplay() {
  return (
    <FadeIn
      style={{
        position: 'absolute',
        top: 0,
        width: '110%',
        height: '100%',
        zIndex: '-1',
        backgroundColor: '#080b1b',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      }}
      .fade-in{
        animation: animationFrames ease 1s;
        animation-iteration-count: 1;
        transform-origin: 50% 50%;
        animation-fill-mode:forwards; /*when the spec is finished*/
        -webkit-animation: animationFrames ease 1s;
        -webkit-animation-iteration-count: 1;
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-fill-mode:forwards; /*Chrome 16+, Safari 4+*/
        -moz-animation: animationFrames ease 1s;
        -moz-animation-iteration-count: 1;
        -moz-transform-origin: 50% 50%;
        -moz-animation-fill-mode:forwards; /*FF 5+*/
        -o-animation: animationFrames ease 1s;
        -o-animation-iteration-count: 1;
        -o-transform-origin: 50% 50%;
        -o-animation-fill-mode:forwards; /*Not implemented yet*/
        -ms-animation: animationFrames ease 1s;
        -ms-animation-iteration-count: 1;
        -ms-transform-origin: 50% 50%;
        -ms-animation-fill-mode:forwards; /*IE 10+*/
      }

      @keyframes animationFrames{
        0% {
          opacity:0;
          transform:  translate(0px,100px)  ;
        }
        100% {
          opacity:1;
          transform:  translate(0px,0px)  ;
        }
      }

      @-moz-keyframes animationFrames{
        0% {
          opacity:0;
          -moz-transform:  translate(0px,100px)  ;
        }
        100% {
          opacity:1;
          -moz-transform:  translate(0px,0px)  ;
        }
      }

      @-webkit-keyframes animationFrames {
        0% {
          opacity:0;
          -webkit-transform:  translate(0px,100px)  ;
        }
        100% {
          opacity:1;
          -webkit-transform:  translate(0px,0px)  ;
        }
      }

      @-o-keyframes animationFrames {
        0% {
          opacity:0;
          -o-transform:  translate(0px,100px)  ;
        }
        100% {
          opacity:1;
          -o-transform:  translate(0px,0px)  ;
        }
      }

      @-ms-keyframes animationFrames {
        0% {
          opacity:0;
          -ms-transform:  translate(0px,100px)  ;
        }
        100% {
          opacity:1;
          -ms-transform:  translate(0px,0px)  ;
        }
      }
export default FadeInDisplay;
