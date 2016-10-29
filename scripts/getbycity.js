function getWeatherByCity(lang, fnOK, fnError, cityName) {
    $.getJSON(
    'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&appid=93423cd537d8b5132f4cff5001224210&cnt=7&units=metric' + '&lang=' + lang + '&callback=?',
        function (data) {
            fnOK.call(this, data);
        }
    );
}