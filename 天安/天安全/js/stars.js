$(function(){
	$(".evaluation li").hover(
		function(){
			$(this).css({"background":"url(images/star2.png) no-repeat","background-size":"100% 100%"});
			$(this).prevAll().css({"background":"url(images/star2.png) no-repeat","background-size":"100% 100%"});
            $(this).nextAll().css({"background":"url(images/star.png) no-repeat","background-size":"100% 100%"});
		}
	)
});

$(function(){
	$(".city_search_list").hide();	
	$(".city_search").click(
		function(){
			$(".city_search_list").show();
		}
	);
	$(".city_search_list li").click(
		function(){
			$(".city_search_nav").text($(this).children().text());
			$(".city_search_list").slideToggle(500);
			
		}
	)
})
