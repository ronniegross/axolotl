// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    // let path = anime.path('#bubble1-path');

    // anime({
    // targets: '#bubble1',
    // translateX: path,
    // translateY: path,
    // rotate: path,
    // duration: 3000,
    // loop: true,
    // easing: 'linear'
    // });

    // anime({
    //     targets: 'path',
    //     opacity: 0,
    //     duration: 6000,
    //     loop: true,
    //     direction: 'alternate',
    //     easing: 'easeInOutExpo'
    //   });
    anime({
        targets: '#bubble1',
        translateY: [300, -300],
        // translateX: [-50, 100],
        // rotate: '2turn',
        direction: 'alternate',
        // scale: 1.5,
        loop: true,
        // delay: 200,
        duration: 5000
        
        
        // easing: "easeInElastic",
        // rotate: '1turn'
      });

    anime({
        targets: '#bubble2',
        translateY: [300, -300],
        // translateX: [-50, 100],
        // rotate: '2turn',
        direction: 'alternate',
        // scale: .8,
        loop: true,
        delay: 500,
        duration: 4000
        
        
        // easing: "easeInElastic",
        // rotate: '1turn'
      });

    anime({
        targets: '#bubble3',
        translateY: [300, -300],
        // translateX: [-50, 100],
        // rotate: '2turn',
        direction: 'alternate',
        // scale: 1.5,
        loop: true,
        delay: 200,
        duration: 4500
        
        
        // easing: "easeInElastic",
        // rotate: '1turn'
      });
    
    anime({
        targets: '#left-eye',
        opacity: 0,
        duration: 1000,
        delay: 700,
        loop: true

    });
    anime({
        targets: '#wink-left-eye',
        opacity: 1,
        duration: 1000,
        delay: 700,
        loop: true
        // duration: 3000
    });

    // anime({
    //     targets: '.thankYou',
    //     direction: 'alternate',
    //     translateX: [-700, 120],
    //     // translateX: [0, 20%],
    //     duration: 4000,
    //     loop: true
    //     // duration: 3000
    // });

    // anime({
    //     targets: '#right-eye',
    //     opacity: 0,
    //     duration: 1000,
    //     delay: 700,
    //     loop: true

    // });
    // anime({
    //     targets: '#wink-right-eye',
    //     opacity: 1,
    //     duration: 1000,
    //     delay: 700,
    //     loop: true
    //     // duration: 3000
    // });

    // anime({
    //     targets: '#tentacle-wavers',
    //     translateX: [-3, 1],
    //     duration: 2000,
        
    //     // width: {
    //     //     value: '-=20px', // 28 - 20 = '8px'
    //     //     duration: 1800,
    //     //     easing: 'easeInOutSine'
    //     //   },
    //     // rotate: {
    //     //     value: '+=2turn', // 0 * 2 = '2turn'
    //     //     duration: 1800,
    //     //     easing: 'easeInOutSine'
    //     // },
    //     // translateY: [-2, 2],
    //     // direction: 'alternate',
    //     // skew: '1deg',
    //     // scale: 1.01,
    //     // fill: '#3a3a3a',
    //     // loop: true
    //     // direction: 'alternate'
    // });
});