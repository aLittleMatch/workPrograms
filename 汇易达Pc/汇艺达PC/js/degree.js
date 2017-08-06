	$(function(){
				$(".listNavRight_topicTit li").hover(
					function(){
						$(this).addClass("active").siblings().removeClass("active");
					}
				);
				$(".slideDown").find("li").hover(
					function(){
						$(this).addClass("active").siblings().removeClass("active");
					}
				);
				$("#xiala").click(
					function(){
						$(".slideDown").css("display","block");
					}
				);
				$(".slideDown li").click(
					function(){
						$(".slideDown").css("display","none");
					}
				);
				$(".listNavRight_topicTit li:eq(0)").hover(
					function(){
						$("#tab dd").css("display","none");
						$("#tab dd").eq(0).css("display","block");
					}
				);
				$(".listNavRight_topicTit li:eq(1)").hover(
					function(){
						$("#tab dd").css("display","none");
						$("#tab dd").eq(1).css("display","block");
					}
				);
				$(".listNavRight_topicTit li:eq(2)").hover(
					function(){
						$("#tab dd").css("display","none");
						$("#gongshi").css("display","block");
					}
				);
				
				$("#degree").click(
					function(){
						$("#degreeNav").css("display","block");
						$("#degreeNav dd").css("display","block");
					}
				);
				$("#degreeNav dd").hover(
					function(){						
						$("#degreeNav dd").removeClass("active")
						$(this).addClass("active");					
					}
				);
				$("#degreeNav dd").click(
					function(){
						event.stopPropagation();
						$(".degreeBOx").text($(this).text());
						$("#degreeNav").css("display","none");
					}
				);
			})
