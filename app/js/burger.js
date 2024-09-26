(function($){
	$(document).ready(function(){

		$('.burger').append("<span class='burger__element'></span>");

		let btn = $('.burger, .header-menu-wrapper');

		btn.click(function(){
			btn.toggleClass('active');
			$('body').toggleClass('lock');
		});

	});

	$(window).on('resize', function(){
		if(window.innerWidth > 768){
			$('.burger').removeClass('active');
			$('body').removeClass('lock');
		}
	});
})(jQuery);