gsap.registerPlugin(ScrollTrigger);

gsap.from(".home__text", {
    duration: 2,
    opacity: 0, 
    delay: 0.5, 
    y: -30,
    stagger: 0.2,
    ease: "power2", 
    force3D: true,
    scrollTrigger: {
        trigger: '.home__text',
        toggleActions: 'restart none none none'
    },
  });

  gsap.from(".overview__title", {
    duration: 2,
    scrollTrigger: {
        trigger: '.overview__title',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    delay: 0.2,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".overview__text", {
    duration: 2,
    opacity: 0, 
    x: -100,
    delay: 0.3,
    stagger: 0.2,
    ease: "sine", 
    scrollTrigger: {
        trigger: '.overview__text',
        toggleActions: 'restart none none none'
    },
  });

  gsap.from(".key-facts__title", {
    duration: 1,
    scrollTrigger: {
        trigger: '.key-facts__title',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".key-facts__text", {
    duration: 1,
    scrollTrigger: {
        trigger: '.key-facts__text',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    delay: 0.1,
    x: 100,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".key-fact__item__text", {
    duration: 1,
    scrollTrigger: {
        trigger: '.key-fact__item__text',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    delay: 0.1,
    x: 100,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from('.key-facts__number', {
    textContent: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.key-facts__number',
      toggleActions: 'restart none none none'
  },
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  });

  gsap.from(".services__title", {
    duration: 1,
    scrollTrigger: {
        trigger: '.services__title',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".services__text", {
    duration: 1,
    scrollTrigger: {
        trigger: '.services__text',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    y: -30,
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".hfdm-services__title", {
    duration: 1,
    scrollTrigger: {
        trigger: '.hfdm-services__title',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".hfdm-services__text", {
    duration: 1,
    scrollTrigger: {
        trigger: '.hfdm-services__text',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    y: 30,
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".hfdm-services__item", {
    duration: 1,
    scrollTrigger: {
        trigger: '.hfdm-services__item',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    y: 30,
    delay: 0.5,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".gallery__title", {
    duration: 1,
    scrollTrigger: {
        trigger: '.gallery__title',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

  gsap.from(".contact__title", {
    duration: 1,
    scrollTrigger: {
        trigger: '.contact__title',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
  });

  gsap.from(".contact__text", {
    duration: 1,
    scrollTrigger: {
        trigger: '.contact__text',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    y: 30,
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });
  gsap.from(".contact__form", {
    duration: 1,
    scrollTrigger: {
        trigger: '.contact__form',
        toggleActions: 'restart none none none'
    },
    opacity: 0, 
    x: -60,
    delay: 0.1,
    stagger: 0.2,
    ease: "sine", 
    // force3D: true
  });

window.addEventListener('scroll', function (e) {
  const top = window.pageYOffset
  const sections = document.getElementsByTagName('section')
  const navs = document.getElementsByClassName('nav__item')

  const removeSelected = () => {
    for (let i of navs) {
      i.classList.remove('selected')
    }
  }
  let  index = 0
  for (let i of sections) {
    if (i.offsetTop - 500 <= top) {
      removeSelected()
      navs[index + 1].classList.add('selected')
    } else if (top < 700) {
      removeSelected()
      navs[0].classList.add('selected')
    }
    index++
  }
})

const mySplitText = document.getElementsByClassName('logo_item'),
    tl = new TimelineLite({
      scrollTrigger: {
        trigger: '.home__title',
        toggleActions: 'restart none none none'
    },
    }),
    numChars = mySplitText.length;

for(let i = 0; i < numChars; i++){
  //random value used as position parameter
  tl.from(mySplitText[i], 2, {opacity:0}, Math.random() * 2);
}

const mySplitText1 = document.getElementsByClassName('logo_bottom_item'),
    tl1 = new TimelineLite({
      scrollTrigger: {
        trigger: '.contact__logo',
        toggleActions: 'restart none none none'
    },
    }),
    numChars1 = mySplitText1.length;

for(let i = 0; i < numChars1; i++){
  //random value used as position parameter
  tl1.from(mySplitText1[i], 2, {opacity:0}, Math.random() * 2);
}