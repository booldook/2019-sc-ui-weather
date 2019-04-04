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
		//alert("현재 서울 기온은 : " + res.main.temp + "도 입니다.");
	}
});