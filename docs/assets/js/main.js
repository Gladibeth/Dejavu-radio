
/* -------------------------
   ----- Offcanvas -----
   ------------------------- */
$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
    $('.welcome').toggleClass('offcanvas-expanded')
  })
})

/* -------------------------
   ----- Menú -----
   ------------------------- */
$(".hamburger").on("click", function () {
  $(this).toggleClass("is-active");
});

/* -------------------------
   ----- Sidebar-----
   ------------------------- */
$('.menu-desk-js').on('click', function () {
  $('.menu-sidebar').toggleClass('open')
})

/* -------------------------
   ----- Navbar link active  -----
   ------------------------- */
$('a.nav-link').hover(function () {
  activeOne.removeClass('active')
  $(this).addClass('active')
}, function () {
  console.log('hover out')
  $(this).removeClass('active')
  activeOne.addClass('active')
})


/* -------------------------
   ----- Font -----
   ------------------------- */
$(document).ready(function () {
  WebFontConfig = {
    google: {
      families: ['Teko:300,400,500,600,700,800,900', 'Aladin:300,400,700,900']
    }
  };
  (function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

});
/* -------------------------
   -----  carousel  -----
   ------------------------- */

$('.main-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000
      }
    }
  ]
});


var myVideo = document.getElementById("myVideo");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}
