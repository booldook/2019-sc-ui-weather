var html = '';
var imgs = [];
var $big = $(".pic_b > img");
var $thumb = $(".pic_s");
var $small;
imgs[0] = {
	title: "그림 1번",
	content: "훌륭한 그림 1번입니다.",
	src: "../img/p1.jpg"
};
imgs[1] = {
	title: "그림 2번",
	content: "훌륭한 그림 2번입니다.",
	src: "../img/p2.jpg"
};
imgs[2] = {
	title: "그림 3번",
	content: "훌륭한 그림 3번입니다.",
	src: "../img/p3.jpg"
};
imgs[3] = {
	title: "그림 4번",
	content: "훌륭한 그림 4번입니다.",
	src: "../img/p4.jpg"
};
imgs[4] = {
	title: "그림 5번",
	content: "훌륭한 그림 5번입니다.",
	src: "../img/p5.jpg"
};
imgs[5] = {
	title: "그림 6번",
	content: "훌륭한 그림 6번입니다.",
	src: "../img/p6.jpg"
};
imgs[6] = {
	title: "그림 7번",
	content: "훌륭한 그림 7번입니다.",
	src: "../img/p7.jpg"
};
imgs[7] = {
	title: "그림 8번",
	content: "훌륭한 그림 8번입니다.",
	src: "../img/p8.jpg"
};
imgs[8] = {
	title: "그림 9번",
	content: "훌륭한 그림 9번입니다.",
	src: "../img/p1.jpg"
};
imgs[9] = {
	title: "그림 10번",
	content: "훌륭한 그림 10번입니다.",
	src: "../img/p2.jpg"
};

for(var i in imgs) {
	html = '<li><img src="' + imgs[i].src + '" class="img"></li>';
	$thumb.append(html);
}
$small = $thumb.find("img");
$small.click(function(){
	var src = $(this).attr("src");
	$big.attr("src", src);
});
$small.eq(0).trigger("click");







/*
for(var i=0; i<imgs.length; i++){
	console.log(imgs[i]);
}
for(var k in imgs) {
	console.log(imgs[k]);
}
imgs.forEach(function(e, i){
	console.log(imgs[i]);
});
*/
