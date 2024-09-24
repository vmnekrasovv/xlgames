(function($){
	$(document).ready(function(){ 
		
		$('.header-other').click(function(){
			if($('.other-menu').css('display') == 'none'){
				$('.other-menu').css({'display': 'flex'});
			} else {
				$('.other-menu').css({'display': 'none'});
			}
		});

	}); // document.ready
	

	$(window).on('load resize', function(){
			
		let window_width = $(window).width();
	
	
	//	otherMenu

		let otherMenu = $('.other-menu');

		if(window_width < 769){
			otherMenu.appendTo('.header-menu-wrapper');
			$('.other-menu').css({'display': 'flex'});
		} else {
			otherMenu.appendTo('.other-menu-wrapper');
			$('.other-menu').css({'display': 'none'});
		}

	// serversItem

		let serversItem = $('.servers-item');
		let serversItem_width = serversItem.width();

		serversItem.height(serversItem_width);


	});

})(jQuery);