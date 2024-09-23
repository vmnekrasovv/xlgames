(function($){
	$(document).ready(function(){ 
		
		$('.header-other').click(function(){
			if($('.other-menu').css('display') == 'none'){
				$('.other-menu').css({'display': 'flex'});
			} else {
				$('.other-menu').css({'display': 'none'});
			}
		});

	});

	$(window).on('load resize', function(){
			
		let windowWidth = $(window).width();
		let otherMenu = $('.other-menu');

		if(windowWidth < 769){
			otherMenu.appendTo('.header-menu-wrapper');
			$('.other-menu').css({'display': 'flex'});
		} else {
			otherMenu.appendTo('.other-menu-wrapper');
			$('.other-menu').css({'display': 'none'});
		}
	});

})(jQuery);