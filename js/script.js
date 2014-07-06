
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
            
			});
			
$(window).resize(function(){

if (window.matchMedia("(min-width: 600px)").matches) {
		$( "i" ).tooltipster('enable');
} else {
		$( "i" ).tooltipster('disable');
		}

});
