// 시간을 보내면 오전/오후를 연산해서 리턴하는 함수
function getAmPm(hour) {
	if(hour < 10) return "오전 0" + hour;
	//else if(hour >= 10 && hour < 12) return "오전 " + hour;
	else if(hour == 10 || hour == 11) return "오전 " + hour;
	else if(hour == 12) return "오후 " + hour;
	else if(hour >= 13 && hour < 22) return "오후 0" + (hour - 12);
	else return "오후 " + (hour - 12);
}

// 10 이하를 보내면 0을 붙여서 리턴하는 함수
function zeroPlus(n) {
	if(n < 10) return "0" + n;
	else return n;
}

// 이미지 호버 교체
$(".img_hover").mouseover(function(){
	$(this).attr("src", $(this).data("hover"));
});
$(".img_hover").mouseleave(function(){
	$(this).attr("src", $(this).data("src"));
});


// jQuery UI init
$(document).ready(function(){
	//spinner init
	//$(".spinner").spinner({ min: 1 });
});
