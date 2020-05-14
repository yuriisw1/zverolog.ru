

var myLazyLoad = new LazyLoad({
   elements_selector: ".lazy",
   cancel_on_exit: true
});


var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
   if (isScrolling == false) {
      window.requestAnimationFrame(function () {
         dealWithScrolling(e);
         isScrolling = false;
      });
   }
   isScrolling = true;
}

function dealWithScrolling(e) {
   // do epic stuff    
}


jQuery(document).ready(function () {


   jQuery(window).scroll(function () {
      if ($(window).scrollTop() > 400) {
         jQuery('.header-fixed').addClass('active');
      } else {
         jQuery('.header-fixed').removeClass('active');
      }
   });


   //-To top button--//
   function backToTop() {
      let button = jQuery('.back-to-top');

      jQuery(window).on('scroll', () => {
         if (jQuery(this).scrollTop() >= 500) {
            button.fadeIn();
         } else {
            button.fadeOut();
         }
      });


      button.on('click', (e) => {
         e.preventDefault();
         jQuery('html').animate({ scrollTop: 0 }, 1000);
      });
   }
   backToTop();
   //--//




   //===============================BURGER MENU============//
   jQuery('.burger-menu').click(function (event) {
      jQuery('.burger-menu, .header-main__nav, .header-main__logo').toggleClass('active');
      jQuery('body').toggleClass('lock');
   });



   //===============================BURGER MENU FIXED PLANK============//
   jQuery('.header__burger').click(function (event) {
      jQuery('.header__burger, .header-fixed__nav, .header-fixed__logo').toggleClass('active');
      jQuery('body').toggleClass('lock');
   });



   //===============================Showimg-search-block-on click============//
   jQuery('.search-btn').click(function (event) {
      jQuery('.search-text').toggleClass('active');
   });


   //accordion
   jQuery('.info-about-species__enumeration-title').click(function (event) {
      jQuery(this).toggleClass('active').next().slideToggle(300);
   });

   //--SLICK-SLIDER-OPTIONS--//		
   jQuery(".slider").slick({
      dots: false,
   });


   //================================Showimg-search-block-on key press on main screen============//
   $('.js-input').keyup(function () {
      if ($(this).val() != '') {
         $('.hidden-input').slideDown();
      } else if ($(this).val() == '') {
         $('.hidden-input').slideUp();
      }
      return false;
   });

});


//IBG
jQuery(document)[0].querySelectorAll(".ibg").forEach(el => {
   if (el.querySelector('img')) {
      el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
      el.querySelector('img').style.display = 'none';
   }
});








