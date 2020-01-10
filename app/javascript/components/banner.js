import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["I help change makers find and tell their story", "I also build trendy web applications", "I'm some kind of self-learner junky", "I love Tacos!"],
    typeSpeed: 30,
    loop: true
  });
}

export { loadDynamicBannerText };
