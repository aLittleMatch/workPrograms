$(function(){
	$(".mynews_top ul li").click(
		function(){
			$(this).attr("id","active").siblings().attr("id","");	
		}	
	);
	$(".mynews_top ul li:eq(0)").click(
		function(){
			$("#mynews_nav1").css("display","block").$("#mynews_nav2").css("display","none").$("#mynews_nav3").css("display","none");
		}
	);
	$(".mynews_top ul li:eq(1)").click(
		function(){
			$("#mynews_nav1").css("display","none").$("#mynews_nav2").css("display","block").$("#mynews_nav3").css("display","none");
		}
	);
	$(".mynews_top ul li:eq(2)").click(
		function(){
			$("#mynews_nav1").css("display","none").$("#mynews_nav2").css("display","none").$("#mynews_nav3").css("display","block");
		}
	)
				
})
