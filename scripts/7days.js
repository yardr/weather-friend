$(document).ready(function() {
$('#cityInput').keypress(function (e) {
if(e.which == 13) {
	getWeatherByCity('en', dataReceived, showError, $('#cityInput').val());
	function dataReceived(data) {
    	 var offset = (new Date()).getTimezoneOffset()*60*1000;
    	 var city = data.city.name;
    	 var i = 1;
    $.each(data.list, function() {
        var localTime = new Date(this.dt*1000 - offset);
        addWeather(
            this.weather[0].icon,
            moment(localTime).calendar(), // Use moment.js for date format
            Math.round(this.temp.day) + '&deg;C',
            this.speed + ' m/s',
            this.humidity + ' %',
            i
            );
            i++;
         });
	}
	function addWeather(icon, day, temp, speed, humidity, count) {
        $('#day' + count).html(day);
        $('#icon' + count).html('<img src="images/'+ icon +'.png"/>');
        $('#temp' + count).html(temp);
        $('#wind' + count).html(speed);
        $('#moist' + count).html(humidity);
    }
    
    function showError(msg){
        $('#error').html('An error occured: ' + msg);
    }
}
})
}
)