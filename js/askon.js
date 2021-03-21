$(document).ready(function(){
	
	
	
	$(".navbar-nav li").mouseover(function(){
		$(this).children('.dropdown-menu').show();
	})
	.mouseout(function(){
		$(this).children('.dropdown-menu').hide();
	})

});