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
	
		let window_width = window.innerWidth;


	// mergeMenu

		let headerMenu = $('.header-menu');
		let otherMenu = $('.other-menu');
		let termsPrivacy = $('.terms-privacy');

		let headerMenuWrapper = $('.header-menu-wrapper');
		let otherMenuWrapper = $('.other-menu-wrapper');
		let footerSecondLine = $('.footer__second-line');


		if(window_width < 769){
			headerMenu.after(otherMenu);
			otherMenu.css({'display': 'flex'});

			$('.burger').on('click', function(){
				if($(this).hasClass('active')) {
					termsPrivacy.appendTo(headerMenuWrapper);
				} else {
					termsPrivacy.appendTo(footerSecondLine);
				}
			});

		} else {
			otherMenu.appendTo(otherMenuWrapper);
			otherMenu.css({'display': 'none'});
			termsPrivacy.appendTo(footerSecondLine);
		}

	// serversItem setHeight

		let serversItem = $('.servers-item');
		let serversItem_width = serversItem.width();

		serversItem.height(serversItem_width);


	});

})(jQuery);