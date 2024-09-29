(function($){

	$(window).on('load', function(){
		
		let wW = window.innerWidth;

		$('.burger').append("<span class='burger__element'></span>");

		let btn = $('.burger, .header-menu-wrapper');

		btn.click(function(){
			if(wW < 769){
				btn.toggleClass('active');
				$('.header').toggleClass('active');
				$('body').toggleClass('lock');
			}
		});
	});

	$(window).on('resize', function(){
		if(window.innerWidth > 768){
			$('.burger').removeClass('active');
			$('.header').removeClass('active');
			$('.header-menu-wrapper').removeClass('active');
			$('body').removeClass('lock');
		}
	});
})(jQuery);