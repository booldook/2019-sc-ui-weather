/*
var hong = {
	name: "홍길동",
	age: 25,
	run: function(){
		alert(this.name + " 이 뜁니다.");
	},
	eat: function(){
		alert(this.name + " 이 먹습니다.");
	}
};
console.log(hong.name);
console.log(hong.age);
hong.run();	//Method(메서드)
hong.eat(); //Method(메서드)
*/

$.ajax({
	type: "get",
	url: "../json/img.json",
	dataType: "json",
	success: function(res) {
		console.log(res);
		var html = '';
		for(var i in res.img) {
			html = '<li><img src="'+res.img[i].src+'" class="img"></li>';
			$(".pic_s").append(html);
		}
		$(".pic_s img").click(function(){
			$(".pic_b > img").attr("src", $(this).attr("src"));
		});
		$(".pic_s img").eq(0).trigger("click");
	}
});

//02efdd64bdc14b279bc91d9247db4722
//api.openweathermap.org/data/2.5/weather?q=seoul,kr&appid=02efdd64bdc14b279bc91d9247db4722&units=metric
$.ajax({
	type: "get",
	url: "https://api.openweathermap.org/data/2.5/weather",
	data: {
		q: "seoul,kr",
		appid: "02efdd64bdc14b279bc91d9247db4722",
		units: "metric"
	},
	dataType: "json",
	success: function(res) {
		console.log(res);
		alert("현재 서울 기온은 : " + res.main.temp + "도 입니다.");
	}
});