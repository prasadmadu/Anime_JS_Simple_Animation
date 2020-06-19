var anim1 = anime({
  targets: '.one',
  translateX: 500,
  direction: 'alternate',
  backgroundColor: 'rgb(233, 119, 119)',
  scale: 2,
  rotate: '1440deg',
  borderRadius: ['0%', '50%'],
  endDelay: 200,
  loop: true,
  autoplay: false,
  easing: 'easeInOutSine'
});
document.querySelector('.one').onclick = anim1.play;

var animation = anime({
  targets: 'input',
  value: [0, 10000],
  round: 1,
  easing: 'easeInSine',
  direction: 'alternate',
  loop: true,
  delay: 3000,
  endDelay: 3000
});

var anim3 = anime({
  targets: '.three',
  direction: 'alternate',
  autoplay: false,
  loop: true,
  translateX:{
    value: 360,
    duration: 500,
    easing: 'easeInOutSine'
  },
  rotate:{
    value: 360,
    duration: 500,
    delay: 500,
    easing: 'easeInOutSine'
  },
  scale:{
    value: 2,
    duration: 500,
    delay: 1000,
    easing: 'easeInOutSine'
  },
  translateY:{
    value: 100,
    duration: 500,
    delay: 1500,
    easing: 'easeInOutSine'
  },
  backgroundColor:{
    value: '#fff',
    duration: 500,
    delay: 2000,
    easing: 'easeInOutSine'
  }
});
document.querySelector('.three').onclick = anim3.play;