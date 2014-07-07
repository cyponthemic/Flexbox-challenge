/* ========   Scroll */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/* ========   Trailer */

$( ".description a" ).on( "click", function( event ) {
   $( event.target ).parent( "div" ).toggleClass( "hidden" );
   $( ".hidden" ).next("div").removeClass('notrailer');
});

$( ".trailer a" ).on( "click", function( event ) {
   $( event.target ).parent( "div" ).toggleClass( "notrailer" );
   $( ".notrailer" ).prev("div").removeClass('hidden');
});



/* ========   TOOL TIP */


$(document).ready(function() {
            
            $( "i" ).addClass( "tooltip" );

            /* $( "i" ).after( '</br><span>'+$( "i" ).attr( "title" )+'</span>' ); */
            
            $('.tooltip').tooltipster({
						animation: 'fade',
						position: 'right',
						offsetX: 10,
						delay: 200,
						theme: 'tooltipster-default',
						touchDevices: false,
						trigger: 'hover'
						});
            if (window.matchMedia("(min-width: 600px)").matches) {
				$( "i" ).tooltipster('enable');
				} else {
					$( "i" ).tooltipster('disable');
					}

			});
			
$(window).resize(function(){

if (window.matchMedia("(min-width: 600px)").matches) {
		$( "i" ).tooltipster('enable');
} else {
		$( "i" ).tooltipster('disable');
		}

});
