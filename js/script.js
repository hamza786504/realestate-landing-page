function showContent(contentId) {
  const buttons = document.querySelectorAll(".toggle-button");
  buttons.forEach((button) => button.classList.remove("active"));

  const contentItems = document.querySelectorAll(".gallery-item");
  contentItems.forEach((item) => item.classList.remove("active"));

  const activeButton = document.querySelector(
    `button[onclick="showContent('${contentId}')"]`
  );
  activeButton.classList.add("active");

  const activeContent = document.getElementById(contentId);
  activeContent.classList.add("active");
}

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     items: 6,
//     autoplay: true,
//     slideTransition: 'linear',
//     autoplaySpeed: 6000,
//     smartSpeed: 6000,
//     center: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

jQuery(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  slideTransition: "linear",
  autoplaySpeed: 6000,
  dots: false,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    744: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

jQuery(".owl-carousel").trigger("play.owl.autoplay", [2000]);

function setSpeed() {
  jQuery(".owl-carousel").trigger("play.owl.autoplay", [6000]);
}

setTimeout(setSpeed, 1000);
