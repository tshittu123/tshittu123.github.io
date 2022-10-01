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

document.querySelector("#pleft").addEventListener("click", () => {
  swiper.slidePrev();
});
document.querySelector("#pright").addEventListener("click", () => {
  swiper.slideNext();
});

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
