"use strict";

// $(document).ready(function (e) {
//     $('#navbar').load('header.html');
//     $('#footer').load('footer.html');
// });
AOS.init({
  // offset: 200,
  // easing: 'ease-in-sine',
  duration: 2000,
  delay: 50
});
$("#ad-section .close-btn").click(function () {
  $("#ad-section img").hide();
  $("#ad-section .close-btn").hide();
  $("#ad-text").show();
});