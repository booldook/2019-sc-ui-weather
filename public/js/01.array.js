var v = 100;
var v2 = "홍길동";
var arr = [];	//배열(Array)변수 선언
var obj = {};	//객체(Object)변수 선언

/***** 배열 복습 *****/
var pics = [];
var html = '';
pics[0] = "../img/p1.jpg";
pics[1] = "../img/p2.jpg";
pics[2] = "../img/p3.jpg";
pics[3] = "../img/p4.jpg";
pics[4] = "../img/p5.jpg";
pics[5] = "../img/p6.jpg";
pics[6] = "../img/p7.jpg";
pics[7] = "../img/p8.jpg";
for(var i=0; i<pics.length; i++) {
	html = '<li><img src="'+pics[i]+'"></li>';
	$(".pic_s").append(html);
}
$(".pic_s img").click(function(){
	var src = $(this).attr("src");
	$(".pic_b > img").attr("src", src);
	$(".pic_s img").css({"border": "none"});
	$(this).css({"border": "2px solid #f00"});
});
$(".pic_s img").eq(0).trigger("click");