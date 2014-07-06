function toScrollFixedTop(selector, offset){
var mainNav = $(selector);
var areaY = mainNav.offset().top; 
var isFixed = true;
		$(window).resize(function(){
			mainNav.offset().top; 
		});

		$(window).scroll( function() {	
		var doFix = $(window).scrollTop() > areaY;	
		
		if (doFix && !isFixed) {
		mainNav.addClass('yellow-navtop-fixedtop');
		isFixed = true;
		}
		if (!doFix && isFixed){
		mainNav.removeClass('yellow-navtop-fixedtop');
		isFixed = false;
		}

		});
}
