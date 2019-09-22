
(function( $ ){
	$.fn.grtmobile = function () {
		if ($(window).width() < 768) {
			$('.grt-mobile-button').on('click', function(){
				$(this).toggleClass("grt-mobile-button-open");
				$("ul.grt-menu").toggleClass("open-grt-menu ");
                $("html, body").toggleClass("body-overflow");
                $(".grt-menu").removeClass("hidden");

			});
			$('li.grt-dropdown').on('click', function(e){
				$(this).toggleClass("active-dropdown");
			});
		}
	}
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();

// On resize window check for mobile

var resizeTimeout;
$(window).resize(function(){
  if(!!resizeTimeout){ clearTimeout(resizeTimeout); }
  resizeTimeout = setTimeout(function(){
    $.fn.grtmobile();
  },200);
});

// Add shadow on scroll after 60px
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
       $("header").removeClass("hed");
       $(".grt-menu").removeClass("hidden");
       $(".grt-mobile-button").removeClass("hiddeni");
 
   } else {
       $('header').removeClass('scrolled');
       $("header").addClass("hed");
       $(".grt-menu").addClass("hidden");
       $(".grt-mobile-button").addClass("hiddeni");
   }
});

// Prevent a href clicks on dropdown category
$('li.grt-dropdown > a').on('click', function(e){
	e.preventDefault();
});

setTimeout(()=>{
  $("header").removeClass("hid");
  },2000)
