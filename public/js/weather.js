// 전역(Global)변수
var city = '';
var cityId = '';
var api = 'https://api.openweathermap.org/data/2.5/';
var path = '../img/icon/';


// Ajax 에러
function ajaxError(xhr, status, err) {
	console.log(xhr);
	console.log(status);
	console.log(err);
}

// 도시id 가져오기 - 최초 실행
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
			$("#city").append('<option value="">== 도시선택 ==</option>');
			for(var i in city) {
				html = '<option value="'+city[i].id+'">'+city[i].name+'</option>';
				$("#city").append(html);
			}
		}
	});
}


// openweathermap api연동
function weatherApi(file, callback) {
	$.ajax({
		type: "get",
		url: api+file,
		data: {
			id: cityId,
			appid: "02efdd64bdc14b279bc91d9247db4722",
			units: "metric"
		},
		dataType: "json",
		error: ajaxError,
		success: callback
	});
}


// 도시를 선택하면 현재날씨 가져오기
$("#city").change(function(){
	city = $(this).find('option:selected').text();
	cityId = $(this).val();
	weatherApi("weather", getDaily);
});
function getDaily(res) {
	console.log(res);
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
$(".bt_city").click(function(){
	$(".daily").css({"display": "none"});
	$(".weekly").css({"display": "none"});
	$(".launch").css({"display": "flex"});
	//$("#city").find("option").remove();
	$("#city").empty();
	getCity();
});

// 5일간 날씨보기
$("#bt_weekly").click(function(){
	weatherApi("forecast", getWeekly);
});
function getWeekly(res) {
	var v = '';
	var w = '';
	var m = '';
	console.log(res);
	$(".daily").css({"display": "none"});
	$(".weekly").css({"display": "flex"});
	$(".launch").css({"display": "none"});
	$(".weekly > .forecast").empty();
	$(".weekly > .city").find("span").eq(0).html(city);
	$(".weekly > .city").find("span").eq(1).html('('+res.city.name+')');
	for(var i in res.list) {
		v = res.list[i];
		w = res.list[i].weather[0];
		m = res.list[i].main;
		html  = '<ul>';
		html += '<li><img src="'+path+w.icon+'.png'+'" class="img"></li>';
		html += '<li>';
		html += '<div class="date">'+v.dt_txt+'</div>';
		html += '<div class="temp">'+m.temp+'℃ (최저 '+m.temp_min+'℃ | 최고 '+m.temp_max+'℃)</div>';
		html += '<div class="main">'+w.main+' ('+w.description+')</div>';
		html += '</li>';
		html += '</ul>';
		$(".weekly > .forecast").append(html);
	}
}

$("#bt_daily").click(function(){
	weatherApi("weather", getDaily);
});
