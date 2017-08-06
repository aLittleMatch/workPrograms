$(function(){
	$(".footMenu li").click(				//商城首页 //底部导航切换图片及改变字体颜色功能实现
		function(){
			$(".footMenu li").find("p").removeClass("active");
			$(this).find("p").addClass("active");
			for(var i=0;i<$(".footMenu li").length;i++){
				$(".footMenu li").eq(i).find("img").attr("src","images/footMenu"+(i+1)+".jpg");	
			}
			$(this).find("img").attr("src","images/footMenu"+($(this).index()+1)+"_1.jpg");
	});
	$(".orderListHead li").click(          //订单列表页顶部切换
		function(){
			$(".orderListHead li").removeClass("orderListHeadActive")
			$(this).addClass("orderListHeadActive");
			$(".orderListNav li").hide();
			$(".orderListNav li").eq($(this).index()).show();
	});
	$("#perTelChange").click(              //个人中心页面设置电话是否可输入
				function(){
					if(typeof($("#perTel").attr("readonly"))=="undefined"){
						$("#perTel").attr("readonly","readonly");
					}else{
						$("#perTel").removeAttr("readonly");
					}
	});
	$(".mallHomeSearch").click(										//点击搜索框，搜索框完全展示		
		function(){
			$(this).css({"width":"80%"});
			$(this).find("img").css({"padding-left":"0.25rem"});
			$(this).find("input").css({"width":"80%","margin-left":"0.15rem"});	
		}
	);
	$(".mallHomeSearch input").blur(
		function(){
			$(".mallHomeSearch").css({"width":"0.9rem"});
			$(".mallHomeSearch").find("img").css({"padding-left":"0"});
			$(".mallHomeSearch").find("input").css({"width":"0","margin-left":"0"});	
		}
	)
	
	
	//编辑地址页
	
				
	$(".check").click(
					function(){
						if($(this).hasClass("nike")){
							$(this).removeClass("nike");
						}else{
							$(this).addClass("nike");
						}
						
					}
				)
	
		//购物车页面
	
		var calculate =	function(){                         //计算价格
			var num = new Array();
			var sum = 0;
			for(var i=0;i<$(".nike1").length;i++){
				if($(".shopCarLiList .nike1").eq(i).hasClass("nike")){
					num[i] = parseFloat($(".shopCarLiListNavRight_rightBot").eq(i).find("p span").text().replace(/[^0-9]/ig,""))*parseFloat($(".shopCarLiListNavRight_rightBot").eq(i).find("b").text().replace(/[^0-9]/ig,""));
				}else{
					num[i] = 0;
				}
				sum = parseFloat(sum + num[i]);	
			}
			$(".shopCarCalMid_right h1 span").html(sum.toFixed(2) +"希贝");
		};
		
		var cal = function(){                         //计算价格
			var num = new Array();
			var sum = 0;
			for(var i=0;i<$(".nike1").length;i++){
				if($(".shopCarLiList .nike1").eq(i).hasClass("nike")){
					num[i] = parseFloat($(".shopCarLiListNavRight_rightBot").eq(i).find("i span").text())*parseFloat($(".shopCarLiListNavRight_rightBot").eq(i).find("b").text().replace(/[^0-9]/ig,""));
				}else{
					num[i] = 0;
				}
				sum = sum + num[i];	
			}
			$(".shopCarCalMid_right p").html("¥"+sum);
		};
		
		$(".add").click(                                      //加
			function(){
				$(this).siblings("span").text(parseInt($(this).siblings("span").text())+1);
			}
		);
		$(".sub").click(                                      //减
			function(){
				if($(this).siblings("span").text()<=0){
					$(this).siblings("span").text(0);
				}else{
					$(this).siblings("span").text(parseInt($(this).siblings("span").text())-1);
				}
			}
		);	
		$(".shopCarCalLeft_left").click(                          //全选
			function(){
				if($(this).hasClass("nike")){
					$(this).removeClass("nike");
					$(".shopCarLiHeadLeft").removeClass("nike");
				}else{
					$(this).addClass("nike");
					$(".shopCarLiHeadLeft").addClass("nike");
				}
				calculate();
				cal();
			}
		);
		$(".shopCarLiHeadLeft").click(                            //单选
			function(){
				if($(this).hasClass("nike")){
					$(this).removeClass("nike");
				}else{
					$(this).addClass("nike");
				}
				calculate();
				cal();
			}
		);
		$(".shopCarLiHead .shopCarLiHeadLeft").click(           //店铺勾选
			function(){
				if($(this).hasClass("nike")){
					$(this).parents(".shopCarLi").children(".shopCarLiList").find(".shopCarLiHeadLeft").addClass("nike");
				}else{
					$(this).parents(".shopCarLi").children(".shopCarLiList").find(".shopCarLiHeadLeft").removeClass("nike");
				}
				calculate();
				cal();
			}
		);
		
		//商户订单记录
		
		$(".mcOrdRecordListLiNav_top").click(
					function(){
						if($(this).siblings(".mcOrdRecordListLiNav_Bot").css("display")=="none"){             //订单信息显示和隐藏
							$(this).siblings(".mcOrdRecordListLiNav_Bot").css("display","block");
							$(this).find(".mcOrdRecordListLiNavLi_right i").css("-webkit-transform","rotate(180deg)"); //箭头旋转
							
						}else{
							$(this).siblings(".mcOrdRecordListLiNav_Bot").css("display","none");
							$(this).find(".mcOrdRecordListLiNavLi_right i").css("-webkit-transform","rotate(0deg)");
							
						}
						
					}
				);
		var $clientHeight = document.body.offsetHeight;          //设置使商户订单的蓝线接近底部
		var $mcOrdRecordHead = $(".mcOrdRecordHead").height();
		var $mcOrdRecordSearch = $(".mcOrdRecordSearch").height();
		var $mcOrdRecordListLi = $(".mcOrdRecordListLi").height();
		var $mcOrdRecordList = $mcOrdRecordListLi*($(".mcOrdRecordListLi").length+1);
		
		var $height = $clientHeight-$mcOrdRecordHead-$mcOrdRecordSearch-$mcOrdRecordList+$mcOrdRecordListLi;
		$(".mcOrdRecordList").height($clientHeight-$mcOrdRecordHead-$mcOrdRecordSearch-45);
		
		//我的推荐页面
		$(".myRefLiBot_bot").click(
			function(){
				if($(this).siblings(".myRefLiBot_top").css("display")=="none"){
					$(this).siblings(".myRefLiBot_top").css("display","-webkit-box");
					$(this).find("img").css("transform","rotate(0deg)")
				}else{
					$(this).siblings(".myRefLiBot_top").css("display","none");
					$(this).find("img").css("transform","rotate(180deg)")
				}
				
			}
		);
		
		//订单记录详情页面
		
		$("#oRecDetShareBtn").click(               //分享弹窗弹出和隐藏
			function(){
				$(".oRecDetShareCover").show();
			}
		);
		$(".oRecDetShareCover").click(
			function(){
				$(this).hide();
			}	
		)
		
		//积分详情页面
		$(".pointsDetailHead_right").click(
			function(){
				$(".pointsDetail").addClass("signPopBlur");
				$(".signPopBox").show();
				$(".signPop").show();
				$("#jifen span").text(parseInt($("#jifen span").text())+1);
			}
		);
		$(".close").click(
			function(){
				$(".signPopBox").hide();
				$(".signPop").hide();	
				$(".pointsDetail").removeClass("signPopBlur");
			}
		);
		
		//城市分站页面
		$(".cityDiffSearch").click(                                 //点击改变搜索框样式
			function(){
				$(this).width("4.1rem");
				$(this).css({"-webkit-box-pack":"start","padding-left":"0.3rem"});
				$(this).find("input").width("3.25rem").removeAttr("readonly","readonly").attr("placeholder","输入搜索内容");
				
			}
		);
		$(".cityDiffSearch").find("input").blur(                      //失去焦点回复搜索框样式
			function(){
				$(".cityDiffSearch").width("1.6rem");
				$(".cityDiffSearch").css({"-webkit-box-pack":"center","padding-left":"0"});
				$(this).width("0.5rem").attr("readonly","readonly").attr("placeholder","搜索");	
			}
		);
		
		$(".cityDiffMenuLi").click(
			function(){
				if($(this).hasClass("change")){
					$(this).removeClass("change");
					$(".cityDiffMenuNavTxt").slideUp();
					$(this).find("img").css("-webkit-transform","rotate(0deg)");	
				}else{
					$(".cityDiffMenuLi").removeClass("change");
					$(this).addClass("change");
					$(".cityDiffMenuNavTxt").hide();
					$(".cityDiffMenuNavTxt").eq($(this).index()).show();
					$(this).find("img").css("-webkit-transform","rotate(180deg)");	
				}
				
			}
		);
		
		$(".cityDiffMenuNavTxt li").click(
			function(){
				$(".cityDiffMenuNavTxt li").css("color","#313131");
				$(this).css("color","#0e78b6");
				var $txt = $(this).text();
				$(this).parents(".cityDiffMenu").children(".cityDiffMenuLi").eq($(this).parent().index()).find("p").text($txt);
				$(".cityDiffMenuNavTxt").slideUp();
				$(".cityDiffMenuLi").removeClass("change");
				$(".cityDiffMenuLi").find("img").css("-webkit-transform","rotate(0deg)");
			}
		);
		
		
		//希客推荐提交页
		$(".recTypeLi").click(
			function(){
				$(".recTypeLiCir").removeClass("nike");
				$(".recTypeLiCir").siblings("p").css("color","#929292");
				$(this).find(".recTypeLiCir").addClass("nike");
				$(this).find("p").css("color","#313131");
			}
		)
			
})