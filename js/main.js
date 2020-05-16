

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


   $('.mainscreen__arrow-down-link').on('click', function (e) {
      $('html,body').stop().animate({ scrollTop: $('#top-news-big').offset().top }, 500);
      e.preventDefault();
   });


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
      jQuery('.search-text').addClass('active');
   });




   $(document).mouseup(function (e) { // отслеживаем событие клика по веб-документу
      var block = $(".search-text"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
      if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
         && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
         block.removeClass('active'); // если условия выполняются - скрываем наш элемент
      }
   });


   //accordion
   jQuery('.info-about-species__enumeration-title').click(function (event) {
      jQuery(this).toggleClass('active').next().slideToggle(300);
   });

   //--SLICK-SLIDER-OPTIONS--//		
   jQuery(".slider").slick({
      dots: false,
   });

   jQuery(".slider-breed").slick({
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

   $(document).mouseup(function (e) {
      var container = $(".hidden-input");
      if (container.has(e.target).length === 0) {
         container.slideUp();
      }
   });



   jQuery('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
      var target = $(this).attr('href'),
         bl_top = $(target).offset().top - 150;
      jQuery('body,html').animate({ scrollTop: bl_top }, 700);
      return false;
   })

   jQuery('.tabs__content').not(":first").hide();
   jQuery('.tabs .tabs__link').click(function () {
      jQuery('.tabs .tabs__link').removeClass('active').eq($(this).index()).addClass('active');
      jQuery('.tabs__content').hide().eq($(this).index()).fadeIn()
   }).eq(0).addClass('active');





   $(document).ready(function () {
      $('.popup-gallery').magnificPopup({
         delegate: 'a',
         type: 'image',
         tLoading: 'Loading image #%curr%...',
         mainClass: 'mfp-img-mobile',
         gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
               return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
         }
      });
   });

});


//IBG
jQuery(document)[0].querySelectorAll(".ibg").forEach(el => {
   if (el.querySelector('img')) {
      el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
      el.querySelector('img').style.display = 'none';
   }
});








