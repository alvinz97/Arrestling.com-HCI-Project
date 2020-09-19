"use strict";

// $(document).ready(function (e) {
//     $('#navbar').load('header.html');
//     $('#footer').load('footer.html');
// });
$("#ad-section .close-btn").click(function () {
  $("#ad-section img").hide();
  $("#ad-section .close-btn").hide();
  $("#ad-text").show();
});