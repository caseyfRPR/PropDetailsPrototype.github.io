
$(document).ready(function () {
       $(window).scroll(function () {
           if ($(this).scrollTop() > 400) {
               $('a#backToTop').fadeIn();
           } else {
               $('a#backToTop').fadeOut();
           }
       });
       $('.scrollup').click(function () {
           $("html, body").animate({
               scrollTop: 0
           }, 600);
           return false;
       });
   });
