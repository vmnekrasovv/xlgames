(function($){

	const headerMenuWrapper = $('.header-menu-wrapper');
	const footerSecondLine = $('.footer__second-line');

	const headerMenu = $('.header-menu');
	const otherMenu = $('.other-menu');
	const termsPrivacy = $('.terms-privacy')
	const otherMenuWrapper = $('.other-menu-wrapper');


	$(document).ready(function(){ 

		function setImgHeight(){
			$('.servers-item').each(function(i, el){
				let elImg = el.querySelector('img');
				elImg.height = elImg.width;
			});
		}

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

			setImgHeight();
			
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

			console.log('window_width < 769', otherMenu);

			if(headerMenuWrapper.hasClass('active')){
				termsPrivacy.appendTo(headerMenuWrapper);
			}
		
		} 
		else {
			otherMenu.appendTo(otherMenuWrapper);
			otherMenu.css({'display': 'none'});
			termsPrivacy.appendTo(footerSecondLine);
		}

		// serversItem setHeight

		setImgHeight();


	}); // window load/resize


})(jQuery);