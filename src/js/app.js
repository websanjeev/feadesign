import Swiper from "swiper";
import debounce from "lodash/debounce";

/**
 * Beneficiary slider
 */
const swiper = new Swiper("#beneficiary-slider", {
  freeMode: true,
  slidesPerView: "auto",
  breakpoints: {
    0: {
      spaceBetween: 16,
    },
    786: {
      spaceBetween: 60,
    },
  },
});

/**
 * Latest news slider
 */
(function () {
  let swiper = null;

  function init() {
    swiper = new Swiper("#latest-news-slider", {
      freeMode: true,
      slidesPerView: "auto",
      spaceBetween: 0,
      enabled: false,
    });
  }

  function enable() {
    if (!swiper) {
      init();
    }
    swiper.enable();
  }

  function disable() {
    swiper.disable();
  }

  let width = window.innerWidth;
  const breakpoint = 786;

  if (width < breakpoint) {
    enable();
  }

  window.onresize = debounce(() => {
    width = window.innerWidth;
    if (width < breakpoint) {
      enable();
    } else {
      disable();
    }
  }, 300);
})();

/**
 * Gallery Slider
 */
(function () {
  let swiper = null;

  function init() {
    swiper = new Swiper("#gallery-slider", {
      freeMode: true,
      slidesPerView: "auto",
      spaceBetween: 0,
      enabled: false,
    });
  }

  function enable() {
    if (!swiper) {
      init();
    }
    swiper.enable();
  }

  function disable() {
    swiper.disable();
  }

  let width = window.innerWidth;
  const breakpoint = 786;

  if (width < breakpoint) {
    enable();
  }

  window.onresize = debounce(() => {
    width = window.innerWidth;
    if (width < breakpoint) {
      enable();
    } else {
      disable();
    }
  }, 300);
})();
