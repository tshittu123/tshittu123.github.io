// SWIPER
const swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});
const lswiper = new Swiper(".lswiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector("#pleft").addEventListener("click", () => {
  swiper.slidePrev();
});
document.querySelector("#pright").addEventListener("click", () => {
  swiper.slideNext();
});

const image_popup = document.querySelector(".image_popup_holder");
// document.querySelector("#image_close").addEventListener("click", () => {
//   image_popup.style.display = "none";
// });
const closeModal = () => {
  image_popup.style.display = "none";
};

const slideTo = (x) => {
  image_popup.style.display = "block";
  lswiper.slideTo(x, 0, false);
};

// FAQS
const faqs = document.querySelectorAll(".faq_item");

faqs.forEach((el) => {
  el.addEventListener("click", (d) => {
    const ele = el.querySelector("p");
    let change = true;
    if (ele.style.display === "block") change = false;
    faqs.forEach((el) => {
      el.querySelector("p").style.display = "none";
      el.querySelector("img").src = "assets/images/adown.png";
    });
    if (change) {
      ele.style.display = "block";
      el.querySelector("img").src = "assets/images/aup.png";
    }
  });
});
