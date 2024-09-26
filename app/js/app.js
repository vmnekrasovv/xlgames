(function($){


	$(document).ready(function(){ 

		$('.header-other').click(function(){
			if($('.other-menu').css('display') == 'none'){
				$('.other-menu').css({'display': 'flex'});
			} else {
				$('.other-menu').css({'display': 'none'});
			}
		});

		$('.section-tubs__tub').on('click', function(){
			
			$(this).addClass('active');
			$(this).siblings().removeClass('active');

			if($(this).hasClass('popular')) {
				$('.servers-item').hide();
				$('.servers-item.pop').show();
			} else {
				$('.servers-item').show();
			}
			
		});

		$('.search').on('focus', function(){
			$(this).addClass('active');
		}).on('blur', function(){
			$(this).removeClass('active');
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

		let headerMenuWrapperActive = $('.header-menu-wrapper').hasClass('active');


		if(window_width < 769){
			headerMenu.after(otherMenu);
			otherMenu.css({'display': 'flex'});
		} 

		if(window_width < 769 && headerMenuWrapperActive) {
			termsPrivacy.appendTo(headerMenuWrapper);
		}

		else if (window_width >= 769) {
			otherMenu.appendTo(otherMenuWrapper);
			otherMenu.css({'display': 'none'});
			termsPrivacy.appendTo(footerSecondLine);
			headerMenuWrapper.removeClass('active');
		}

		$('.burger').on('click', function(){
			if($(this).hasClass('active')) {
				termsPrivacy.appendTo(headerMenuWrapper);
			} else {
				headerMenuWrapper.removeClass('active');
				termsPrivacy.appendTo(footerSecondLine);
			}
		});

	// serversItem setHeight

		let serversItem = $('.servers-item');
		let serversItem_width = serversItem.width();

		serversItem.each(function(i, el){
			let elImg = el.querySelector('img');
			let	elImgWidth = elImg.width;

			el.height = elImgWidth;
			elImg.height = elImgWidth;
		});


	});

})(jQuery);