function hover(dot, line, feature) {
	$(dot).toggleClass('hover');
	$(dot).children().toggleClass('hover');
	$(line).toggleClass('hover');
	$(feature).toggleClass('show');
}


$(document).ready(function(){

	$(".downArrow").on("click", function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$("body, html").animate({scrollTop: top}, 300);
	});

	$(".pagination-bullet").on("click", function(){
		var pag = $(this).attr("id");
		$(".current").removeClass("current");
		$(this).addClass("current");
		$(".testimonial.shown").removeClass("shown");
		$(".testimonial." + pag).addClass('shown');
	})

});