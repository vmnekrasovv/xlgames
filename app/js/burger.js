(function($){

	let header = $('.header');
	let headerMenuWrapper = $('.header-menu-wrapper');
	let burger = $('.burger');

	$(document).ready(function(){

		burger.on('click', function(e){
			burger.toggleClass('active');
			header.toggleClass('active');
			headerMenuWrapper.toggleClass('active');
			$('body').toggleClass('lock');
		});
	});

	$(window).on('load resize', function(){

		wW = window.innerWidth;

		if(wW > 768){
			burger.removeClass('active');
			header.removeClass('active');
			headerMenuWrapper.removeClass('active');
			$('body').removeClass('lock');
		}
	});

})(jQuery);