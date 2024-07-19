var swiper = new Swiper(".mySwiper", {
// slidesPerView: 2,
loop: true,
centeredSlides: false,
spaceBetween: 0,
pagination: {
el: ".swiper-pagination",
type: "fraction",
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
breakpoints: {
  640: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
},
});

var swiper = new Swiper(".mySwiper6", {
  // slidesPerView: 2,
  loop: true,
  centeredSlides: false,
  spaceBetween: 0,
  pagination: {
  el: ".swiper-pagination",
  type: "fraction",
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
  });

var swiper = new Swiper(".mySwiper4", {
  // slidesPerView: 2,
  loop: true,
  centeredSlides: false,
  spaceBetween: 0,
  pagination: {
  el: ".swiper-pagination",
  type: "fraction",
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  });

var swiper2 = new Swiper(".mySwiper2", {
  // slidesPerView: 2,
  loop: true,
  spaceBetween: 0,
  pagination: {
  el: ".swiper-pagination",
  type: "fraction",
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    // slidesPerView: 1.5,
    loop: true,
    // spaceBetween: 10,
    pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
    });

    var swiper5 = new Swiper(".mySwiper5", {
      slidesPerView: 1,
      loop: true,
      delay: 6000,
      speed: 1500,
      autoplay: true,
      spaceBetween: 0,
      pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
      });

var appendNumber = 4;
var prependNumber = 1;
document
.querySelector(".prepend-2-slides")
.addEventListener("click", function (e) {
e.preventDefault();
swiper.prependSlide([
  '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
]);
});
document
.querySelector(".prepend-slide")
.addEventListener("click", function (e) {
e.preventDefault();
swiper.prependSlide(
  '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
);
});
document
.querySelector(".append-slide")
.addEventListener("click", function (e) {
e.preventDefault();
swiper.appendSlide(
  '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
);
});
document
.querySelector(".append-2-slides")
.addEventListener("click", function (e) {
e.preventDefault();
swiper.appendSlide([
  '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
]);
});

var appendNumber = 4;
var prependNumber = 1;
document
.querySelector(".prepend-2-slides")
.addEventListener("click", function (e) {
e.preventDefault();
swiper2.prependSlide([
  '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
  '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
]);
});
document
.querySelector(".prepend-slide")
.addEventListener("click", function (e) {
e.preventDefault();
swiper2.prependSlide(
  '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
);
});
document
.querySelector(".append-slide")
.addEventListener("click", function (e) {
e.preventDefault();
swiper2.appendSlide(
  '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
);
});
document
.querySelector(".append-2-slides")
.addEventListener("click", function (e) {
e.preventDefault();
swiper2.appendSlide([
  '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
  '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
]);
});