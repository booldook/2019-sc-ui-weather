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
}