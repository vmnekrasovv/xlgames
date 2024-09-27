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

		const headerMenuWrapper = $('.header-menu-wrapper');
		const footerSecondLine = $('.footer__second-line');

		const headerMenu = $('.header-menu');
		const otherMenu = $('.other-menu');
		const termsPrivacy = $('.terms-privacy')
		const otherMenuWrapper = $('.other-menu-wrapper');


		$('.burger').on('click', function(){

			if(headerMenuWrapper.hasClass('active')) {
				termsPrivacy.appendTo(headerMenuWrapper);
			} else {
				termsPrivacy.appendTo(footerSecondLine);
			}
		});

		$(window).on('load resize', function(){
	
			const window_width = window.innerWidth;

		// mergeMenu

			if(window_width < 769){
				headerMenu.after(otherMenu);
				otherMenu.css({'display': 'flex'});
			
			} 
			else {
				otherMenu.appendTo(otherMenuWrapper);
				otherMenu.css({'display': 'none'});
				termsPrivacy.appendTo(footerSecondLine);
			}

			// serversItem setHeight

			$('.servers-item').each(function(i, el){
				let elImg = el.querySelector('img');

				console.log(elImg.height + ' : ' + elImg.width);
				elImg.height = elImg.width;
			});

		}); // window load/resize


	}); // document.ready


})(jQuery);