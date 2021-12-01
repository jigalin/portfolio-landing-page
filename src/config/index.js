module.exports = {
  particles: {
    particles: {
      number: { value: 20 },
      color: { value: ['#cc892b', '#1cd6b1', '#8c4ec7', '#8bc74e'] },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        bounce: true,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      // activate
      events: {
        onhover: {
          enable: true,
          mode: ['bubble'],
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 12,
          duration: 1,
          opacity: 0.8,
          speed: 2,
        },
      },
    },
    retina_detect: true,
  },
}
