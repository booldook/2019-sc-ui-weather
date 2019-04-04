// 전역(Global)변수
var city = '';
var path = '../img/icon/';


// Ajax 에러
function ajaxError(xhr, status, err) {
	console.log(xhr);
	console.log(status);
	console.log(err);
}

// 도시id 가져오기
getCity();
function getCity() {
	$.ajax({
		type: "get",
		url: "../json/city.json",
		dataType: "json",
		error: ajaxError,
		success: function(res) {
			var html = '';
			var city = res.cities;
			for(var i in city) {
				html = '<option value="'+city[i].id+'">'+city[i].name+'</option>';
				$("#city").append(html);
			}
		}
	});
}

// 도시를 선택하면 현재날씨 가져오기
$("#city").change(function(){
	city = $(this).find('option:selected').text();
	console.log(city);
	$.ajax({
		type: "get",
		url: "https://api.openweathermap.org/data/2.5/weather",
		data: {
			id: $(this).val(),
			appid: "02efdd64bdc14b279bc91d9247db4722",
			units: "metric"
		},
		dataType: "json",
		error: ajaxError,
		success: getDaily
	});
});
function getDaily(res) {
	console.log(res);
	$("#city").find("option").remove();
	getCity();
	$(".launch").css({"display": "none"});
	$(".weekly").css({"display": "none"});
	$(".daily").css({"display": "flex"});
	$(".daily").find(".city").find("span").eq(0).html(city);
	$(".daily").find(".city").find("span").eq(1).html('('+res.name+')');
	$(".daily").find(".icon").find("img").attr("src", path+res.weather[0].icon+'.png');
	$(".daily").find(".temp").find("span").eq(0).html(res.main.temp);
	$(".daily").find(".temp").find("span").eq(1).html(res.main.temp_min);
	$(".daily").find(".temp").find("span").eq(2).html(res.main.temp_max);
	$(".daily").find(".main").html(res.weather[0].main);
	$(".daily").find(".desc").html(res.weather[0].description);
}

// 다른도시보기
$("#bt_city").click(function(){
	$(".daily").css({"display": "none"});
	$(".weekly").css({"display": "none"});
	$(".launch").css({"display": "flex"});
});