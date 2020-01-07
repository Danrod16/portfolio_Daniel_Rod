import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["I help change makers find and tell their story"],
    typeSpeed: 30,
    loop: true
  });
}

export { loadDynamicBannerText };
