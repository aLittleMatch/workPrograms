$(document).ready(function (){
	
	//点击小图切换大图
	$("#thumbnail li a").click(function(){
		$(".zoompic img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
		$("#thumbnail li.current").removeClass("current");
		$(this).parents("li").addClass("current");
		return false;
	});
	$(".zoompic>img").load(function(){
		$(".zoompic>img:hidden").show();
	});
	
	//下面为图片滚动界面js
		//小图片左右滚动
	var $slider1 = $('.slider1 ul');
	var $slider1_child_l = $('.slider1 ul li').length;
	var $slider1_width = $('.slider1 ul li').width();
	$slider1.width($slider1_child_l * $slider1_width+200);
	
	var slider1_count = 0;
	
	if ($slider1_child_l < 5) {
		$('#btn-right').css({cursor: 'auto'});
		$('#btn-right').removeClass("dasabled");
	}
	
	$('#btn-right').click(function() {
		if ($slider1_child_l < 5 || slider1_count >= $slider1_child_l - 5) {
			return false;
		}
		
		slider1_count++;
		$slider1.animate({left: '-=' + ($slider1_width+35) + 'px'}, 'fast');
		slider1_pic();
	});
	
	$('#btn-left').click(function() {
		if (slider1_count <= 0) {
			return false;
		}
		slider1_count--;
		$slider1.animate({left: '+=' + ($slider1_width+35)  + 'px'}, 'fast');
		slider1_pic();
	});
	
	function slider1_pic() {
		if (slider1_count >= $slider1_child_l - 5) {
			$('#btn-right').css({cursor: 'auto'});
			$('#btn-right').addClass("dasabled");
		}
		else if (slider1_count > 0 && slider1_count <= $slider1_child_l - 5) {
			$('#btn-left').css({cursor: 'pointer'});
			$('#btn-left').removeClass("dasabled");
			$('#btn-right').css({cursor: 'pointer'});
			$('#btn-right').removeClass("dasabled");
		}
		else if (slider1_count <= 0) {
			$('#btn-left').css({cursor: 'auto'});
			$('#btn-left').addClass("dasabled");
		}
	}
	
	//下面为视频滚动界面js
	var $slider2 = $('.slider2 ul');
	var $slider2_child_l = $('.slider2 ul li').length;
	var $slider2_width = $('.slider2 ul li').width();
	$slider2.width($slider2_child_l * $slider2_width+200);
	
	var slider2_count = 0;
	
	if ($slider2_child_l < 5) {
		$('#btn-right').css({cursor: 'auto'});
		$('#btn-right').removeClass("dasabled");
	}
	
	$('#btn-right').click(function() {
		if ($slider2_child_l < 5 || slider2_count >= $slider2_child_l - 5) {
			return false;
		}
		
		slider2_count++;
		$slider2.animate({left: '-=' + ($slider2_width+35) + 'px'}, 'fast');
		slider2_pic();
	});
	
	$('#btn-left').click(function() {
		if (slider2_count <= 0) {
			return false;
		}
		slider2_count--;
		$slider2.animate({left: '+=' + ($slider2_width+35)  + 'px'}, 'fast');
		slider2_pic();
	});
	
	function slider2_pic() {
		if (slider2_count >= $slider2_child_l - 5) {
			$('#btn-right').css({cursor: 'auto'});
			$('#btn-right').addClass("dasabled");
		}
		else if (slider2_count > 0 && slider2_count <= $slider2_child_l - 5) {
			$('#btn-left').css({cursor: 'pointer'});
			$('#btn-left').removeClass("dasabled");
			$('#btn-right').css({cursor: 'pointer'});
			$('#btn-right').removeClass("dasabled");
		}
		else if (slider2_count <= 0) {
			$('#btn-left').css({cursor: 'auto'});
			$('#btn-left').addClass("dasabled");
		}
	}
	
});