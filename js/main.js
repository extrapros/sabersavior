

// ____________________________________________________________ //

// Start Custom Here

// On Document Ready
$( document ).ready(function() {
	 $("#main-wrapper").hide();
	 $(".menu").hide();

	 var $container = $('#page');
		// initialize
		$container.imagesLoaded( function() {
			$container.masonry({
			  columnWidth: ".sizer",
			  itemSelector: '.item',
			  isFitWidth: true

			});
		});
			
	var msnry = $container.data('masonry');

	// // Create a clone of the menu, right next to original.
	// $('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

	// scrollIntervalID = setInterval(stickIt, 10);


	// function stickIt() {

	//   var orgElementPos = $('.original').offset();
	//   orgElementTop = orgElementPos.top;               

	//   if ($(window).scrollTop() >= (orgElementTop)) {
	//     // scrolled past the original position; now only show the cloned, sticky element.

	//     // Cloned element should always have same left position and width as original element.     
	//     orgElement = $('.original');
	//     coordsOrgElement = orgElement.offset();
	//     leftOrgElement = coordsOrgElement.left;  
	//     widthOrgElement = orgElement.css('width');
	//     $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
	//     $('.original').css('visibility','hidden');
	//   } else {
	//     // not scrolled past the menu; only show the original menu.
	//     $('.cloned').hide();
	//     $('.original').css('visibility','visible');
	//   }
	// }


	});

// On Window Load
$( window ).load(function() { 

	   $("#main-wrapper").fadeIn(1000);

	   $(document).scroll(function() {
	   		$(".menu").fadeIn('slow');
	   });
});