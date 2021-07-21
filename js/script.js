
$(window).scroll(function(){
  if($(window).scrollTop() > 200){
    $(".menu").addClass("fixed_menu")
  }else{
    $(".menu").removeClass("fixed_menu")
  }
if($(window).scrollTop() > 1000){
  $(".backtotop").fadeIn()
}else{
  $(".backtotop").fadeOut()
}
});

// 

$(window).scroll(function(){
  if($(window).scrollTop() > 200){
    $(".menu").addClass("fixed_menu")
  }else{
    $(".menu").removeClass("fixed_menu")
  }
});

//

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 100, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },1000)
});


// bannner slider start

$('.banner-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-arrow-circle-left prev"></i>',
  nextArrow:'<i class="fas fa-arrow-circle-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, 
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// bannner slider end


// portfolio slider start

$('.porfolio-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3, 
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//portfolio venobox

$(document).ready(function(){
  $('.venobox').venobox(); 
});

$('.venobox').venobox({
  framewidth : '400px',                            // default: ''
  frameheight: '300px',                            // default: ''
  border     : '10px',                           // default: '0'
  bgcolor    : '#eeeeee',                          // default: '#fff'
  titleattr  : 'data-title',                       // default: 'title'
  numeratio  : true,                               // default: false
  infinigall : true,                               // default: false
  //share      : ['facebook', 'twitter', 'download'] // default: []
});


// portfolio slider end


//servie-slider start

$('.service-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '<i class="fas fa-angle-up up-arrow"></i>',
  nextArrow: '<i class="fas fa-angle-down down-arrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1, 
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: true,
        dots: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//servie-slider end


//testimonial-slider start

$('.testimonial-img-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  asNavFor: ".testimonial-text-slider",
  prevArrow:'<i class="fas fa-angle-up up"></i>',
  nextArrow:'<i class="fas fa-angle-down down"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        vertical: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        centerMode: true,
        centerPadding: "0",
      }
    },
    {
      breakpoint: 576,
      settings: {
      dots: false,
      infinite: true,
      speed: 300,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



//testimonial-slider start

$('.testimonial-text-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
  // centerPadding: "0",
  asNavFor: ".testimonial-img-slider",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: true,
        dots: false,
        fade: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      }
    }
  ]
});

//testimonial-slider end


//counter-up start

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

//counter-up end



//team-slider start

$('.team-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  vertical: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//team venobox

$(document).ready(function(){
  $('.venobox').venobox(); 
});

$('.venobox').venobox({
  framewidth : '400px',                            // default: ''
  frameheight: '300px',                            // default: ''
  border     : '10px',                             // default: '0'
  bgcolor    : '#5dff5e',                          // default: '#fff'
  titleattr  : 'data-title',                       // default: 'title'
  numeratio  : true,                               // default: false
  infinigall : true,                               // default: false
  share      : ['facebook', 'twitter', 'download'] // default: []
});

//team-slider end


//web-slider start

$('.web-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: false,
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//web-slider end




