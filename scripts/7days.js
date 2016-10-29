$(document).ready(function() {
$('#cityInput').keypress(function (e) {
if(e.which == 13) {
	getWeatherByCity('en', dataReceived, showError, $('#cityInput').val());
	function dataReceived(data) {
    	 var offset = (new Date()).getTimezoneOffset()*60*1000;
    	 var city = data.city.name;
    $.each(data.list, function() {
        var localTime = new Date(this.dt*1000 - offset);
        addWeather(
            this.weather[0].icon,
            moment(localTime).calendar(), // Use moment.js for date format
            Math.round(this.temp.day) + '&deg;C',
            this.speed + ' m/s',
            this.humidity
            );
         });
	}
	function addWeather(icon, day, temp, speed, humidity, count) {
        $('.days').html(day);
        $('.icons').html('<img src="images/'+ icon +'.png"/>');
        $('.temps').html(temp);
        $('.wind').html(speed);
        $('.moist').html(humidity);
    }
    
    function showError(msg){
        $('#error').html('An error occured: ' + msg);
    }
}
})
}
)