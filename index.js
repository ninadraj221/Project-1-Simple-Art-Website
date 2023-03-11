console.log("Index.js working");

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiper = new Swiper(".mySwiper", {
  // effect: "coverflow",
  // centeredSlides: true,

  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  // on: {
  //   autoplayTimeLeft(s, time, progress) {
  //     progressCircle.style.setProperty("--progress", 1 - progress);
  //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  //   },
  // },
});

//Function Currying

//Using closures
multiply = function (x) {
  return function (y) {
    return x * y;
  };
};

console.log(multiply(2)(3));

multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4));

//Using Bind Method
addd = function (x, y) {
  console.log(x + y);
};

add2 = addd.bind(this, 2);

add2(3);
