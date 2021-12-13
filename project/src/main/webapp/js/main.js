//메뉴 내려오고 올라오게하는 코드************
$(function() {
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		autoplay: {
			delay: 3000
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	/*
	var box = $(".container>.size>.section");
	box.mouseover(function(){
		box.css("border","none");
		$(this).css("border", "3px solid #999");
	});
	*/
	//이미지 테두리 설정
	$(".section>img").mouseover(function() {
		$(this).css("margin", "-3px");
		$(this).css("border", "3px solid #999");
	}).mouseleave(function() {
		$(this).css("margin", "0px");
		$(this).css("border", "");
	});

	$(".divPop").css({
		"top": ($(window).height() - $(".divPop").outerHeight()) / 2 + $(window).scrollTop() + "px",
		"left": ($(window).width() - $(".divPop").outerWidth()) / 2 + $(window).scrollLeft() + "px"
	});
	$(".divPop").draggable();
	var swiper2 = new Swiper(".partner_slide", {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 20,
		autoplay: {
			delay: 2000
		}
	});

	$(".board_title").click(function() {
		$(".board_title").removeClass("on"); //board_title클래스 선택자에 on클래스 제거
		$(this).addClass("on"); //클릭한 선택자에 on클래스 추가
		//console.log($(this).text());
		if ($(this).text() == '공지사항') {
			$("#board_data").hide();
			$("#board_notice").show();
		} else {
			$("#board_data").show();
			$("#board_notice").hide();
		}
	});
});