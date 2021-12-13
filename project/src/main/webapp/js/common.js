//메뉴 내려오고 올라오게하는 코드************
$(function() {
	$(".depth1>li").mouseover(function() {
		$(this).find(".depth2").stop().slideDown();
	}).mouseleave(function() {
		$(this).find(".depth2").stop().slideUp();
	});
	//퀵메뉴
	var quick_left = $(".menu>ul:first-child").position().left + 1200;
	var quick_top = $(".menu>ul:first-child").position().top + 40;
	//console.log(quick_left);
	$(".quickMenu").css({
		top: quick_top,
		left: quick_left
	});
	//scroll이벤트로 좌표 변경
	$(window).scroll(function() {
		var newTop = $(window).scrollTop() + quick_top + "px";
		// $(".quickMenu").css("top", newTop);
		$(".quickMenu").stop().animate({
			"top": newTop
		}, 500);
	});
	// goTop클릭하면 맨위로 이동
	$(".goTop").click(function() {
		$("html").animate({ scrollTop: 0 }, 100);
	});


});