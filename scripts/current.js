$(document).ready(function() {
           $('#table_wrap').hide();
            //Weather by a city
           $('#cityInput').keypress(function (e) {
           $('#geoWeather').hide();
  //pressing enter
  if(e.which == 13) {
  $('#table_wrap').show();
  //getting the name of the city
  var cityName = $('#cityInput').val();
  var lang = 'en';
    //JSON data request
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=93423cd537d8b5132f4cff5001224210&units=metric' + '&lang='+ lang, function(data) {
    var temp;
    var fTemp;
    var cTemp;
    var kTemp;
    var tempSwap = true;
    var windSwamp = true;
    //JSON call for Open Weather API
             var weatherType = data.weather[0].description;
             temp = data.main.temp;
             var windSpeed = data.wind.speed;
             var city = data.name;
             var picture = data.weather[0].icon;
             var pressure = data.main.pressure;
             var humidity = data.main.humidity; 
             //Temperature in Celsius
             cTemp = temp.toFixed(1);
             
             $('#city2').html(city);
             $('#cTemp2').html(cTemp + " &#8451");
             $('#weatherType2').html("condition: " + weatherType);
             $('#windSpeed2').html("Wind speed: " + windSpeed + " m/sec");
             $('#pressure2').html("Pressure: " + pressure + " hPa");
             $('#humidity2').html("Humidity: " + humidity + " %");
             //the method which shows the weather icon
             $('#picture2').html('<img src="images/'+ picture +'.png"/>');
    });
    
  }
  })
}
)