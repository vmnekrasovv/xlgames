(function($){

	const headerMenuWrapper = $('.header-menu-wrapper');
	const headerMenu = $('.header-menu');

	const headerOther = $('.header-other');
	const otherMenuWrapper = $('.other-menu-wrapper');
	const otherMenu = $('.other-menu');
	
	const footerSecondLine = $('.footer__second-line');

	const termsPrivacy = $('.terms-privacy');
	
	const serversItem = $('.servers-item');


	$(document).ready(function(){ 

		headerOther.click(function(){
			if(otherMenu.css('display') == 'none'){
				otherMenu.css({'display': 'flex'});
			} else {
				otherMenu.hide();
			}
		});

		$('.section-tubs__tub').on('click', function(){

			$(this).addClass('active');
			$(this).siblings().removeClass('active');

			if($(this).hasClass('popular')) {
				serversItem.hide();
				$('.servers-item.pop').show();
			} else {
				serversItem.show();
			}
			
		});

		$('.search').on('focus', function(){
			$(this).addClass('active');
		}).on('blur', function(){
			$(this).removeClass('active');
		});


		$('.burger').on('click', function(){

			if(headerMenuWrapper.hasClass('active')) {
				termsPrivacy.appendTo(headerMenuWrapper);
			} else {
				termsPrivacy.appendTo(footerSecondLine);
			}
		});

	}); // document.ready

	$(window).on('load resize', function(){
	
		let window_width = window.innerWidth;


	// mergeMenu

		if(window_width < 769){
			
			headerMenu.after(otherMenu);
			otherMenu.css({'display': 'flex'});

			if(headerMenuWrapper.hasClass('active')){
				termsPrivacy.appendTo(headerMenuWrapper);
			}
		
		} 
		else {
			otherMenu.appendTo(otherMenuWrapper);
			otherMenu.css({'display': 'none'});
			termsPrivacy.appendTo(footerSecondLine);
		}


	}); // window load/resize


})(jQuery);