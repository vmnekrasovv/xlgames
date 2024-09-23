(function($){
	$(document).ready(function(){ 
		
		$('.header-other').click(function(){
			$('.other-menu').toggle();
		});

		$(window).on('load resize', function(){
			
			let windowWidth = $(window).width();
			let otherMenu = $('.other-menu');

			if(windowWidth < 769){
				otherMenu.appendTo('.header-menu-wrapper');
			} else {
				otherMenu.appendTo('.other-menu-wrapper');
			}
		});

	});
})(jQuery);