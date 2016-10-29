$(document).ready(function() {
    var lat;
    var long;
    
    //Location by the coordinates
  
    $.getJSON('http://ip-api.com/json', function(data2) {
        lat = data2.lat;
        long = data2.lon;
        
         var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=93423cd537d8b5132f4cff5001224210';
        
$.getJSON(api, function(data) {
    
    var fTemp;
    var cTemp;
    var kTemp;
    
    var tempSwap = true;
    var windSwamp = true;
    //JSON call for Open Weather API
             var weatherType = data.weather[0].description;
             kTemp = data.main.temp;
             var windSpeed1 = data.wind.speed;
             var city1 = data.name;
             
             //Temperature in Fahrenheit
             fTemp = (kTemp *(9/5)-459.67).toFixed(1);
             //Temperature in Celsius
             cTemp = (kTemp-273).toFixed(1);
             
             $("#city").html(city1);
             $("#weatherType").html(weatherType);
             $("#cTemp").html(cTemp + " &#8451");
             
             //Toggle between temp. measurements
             $("#cTemp").click(function() {
                 if (tempSwap === false) {
                     $("#cTemp").html(cTemp + " &#8451");
                     tempSwap = true;
                 }
                 else {
                     $("#cTemp").html(fTemp + " &#8457;")
                     tempSwap = false;
                 }
             })
             var mwindSpeed = (2.237 * windSpeed1).toFixed(2);
             $("#windSpeed").html(windSpeed1 + " meter/sec");
             
             //Toggle between wind measurements
             $("#windSpeed").click(function () {
                 if(windSwamp === false) {
                     $("#windSpeed").html(windSpeed1 + " meter/sec");
                     windSwamp = true;
                 }
                 else {
                     $("#windSpeed").html(mwindSpeed + " mph")
                     windSwamp = false;
                 }
             })
            })

})
    
    
})
