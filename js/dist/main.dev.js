"use strict";

// Author: Rusiru Ashan Kulathunga
// Website: https://www.rusiruofficial.com
// $(document).ready(function (e) {
//     $('#navbar').load('header.html');
//     $('#footer').load('footer.html');
// });
AOS.init({
  // offset: 200,
  easing: 'ease-in-out',
  duration: 2000,
  delay: 50
});
$("#ad-section .close-btn").click(function () {
  $("#ad-section img").hide();
  $("#ad-section .close-btn").hide();
  $("#ad-text").show();
});
jQuery(document).ready(function ($) {
  "use strict"; // CHECKOUT AREA 

  $('#devivery-form-submit').submit(function () {
    var f = $(this).find('.form-group'),
        ferror = false,
        phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i,
        creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
        emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    f.children('input').each(function () {
      // run all inputs
      var i = $(this); // current input

      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input

        var pos = rule.indexOf(':', 0);

        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }

            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }

            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }

            break;

          case 'phone':
            if (!phoneno.test(i.val())) {
              ferror = ierror = true;
            }

            break;

          case 'card':
            if (!creditCard.test(i.val())) {
              ferror = ierror = true;
            }

            break;
        }

        i.next('.validation').html(ierror ? i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input' : '').show('blind');
      }
    });
    if (ferror) return false;else var str = $(this).serialize();
    var action = $(this).attr('action');

    if (!action) {
      action = 'includes/checkout.inc.php';
    }

    var name = $('#name').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var city = $('#city').val();
    var zipCode = $('#zipCode').val();
    var state = $('#state').val();
    var holderName = $('#holderName').val();
    var city = $('#cvv').val();
    var cardNumber = $('#cardNumber').val();
    var cvv = $('#cvv').val();
    var expiredDate = $('#expiredDate').val();

    if (cvv.length == 3) {
      alert("dd");
    }

    $.ajax({
      type: "POST",
      url: action,
      data: {
        name: name,
        phone: phone,
        address: address,
        city: city,
        zipCode: zipCode,
        state: state,
        holderName: holderName,
        cvv: cvv,
        cardNumber: cardNumber,
        expiredDate: expiredDate,
        status: 'checkout'
      },
      success: function success(data) {
        if (data == 'ok') {
          $(".main-success-message").show();
          $(".main-success-message .text-succes-msg").text("Checkout Successfull");
        }
      }
    });
    return false;
  });
  $('.reset-btn').click(function () {
    $('#devivery-form-submit .form-group .validation').text('');
  }); // COUPON AREA 

  $('#coupon-form-submit').submit(function () {
    var f = $(this).find('.form-group'),
        ferror = false;
    f.children('input').each(function () {
      // run all inputs
      var i = $(this); // current input

      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input

        var pos = rule.indexOf(':', 0);

        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }

            break;
        }

        i.next('.validation').html(ierror ? i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input' : '').show('blind');
      }
    });
    if (ferror) return false;else var str = $(this).serialize();
    var action = $(this).attr('action');

    if (!action) {
      action = 'includes/checkout.inc.php';
    }

    var coupon = $('#coupon').val();
    $.ajax({
      type: "POST",
      url: action,
      data: {
        coupon: coupon,
        status: 'checkout'
      },
      success: function success(data) {}
    });
    return false;
  }); // TRACKING AREA 

  $('#tracking-form').submit(function () {
    var f = $(this).find('.form-group'),
        ferror = false;
    f.children('input').each(function () {
      // run all inputs
      var i = $(this); // current input

      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input

        var pos = rule.indexOf(':', 0);

        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }

            break;
        }

        i.next('.validation').html(ierror ? i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input' : '').show('blind');
      }
    });
    if (ferror) return false;else var str = $(this).serialize();
    var action = $(this).attr('action');

    if (!action) {
      action = 'includes/tracking.inc.php';
    }

    var trackingCode = $('#trackingCode').val();
    $.ajax({
      type: "POST",
      url: action,
      data: {
        trackingCode: trackingCode,
        status: 'tracking'
      },
      success: function success(data) {}
    });
    return false;
  });
});