$(document).ready(function(){

    $('#general').on('click', function(){
        $('#general-box').slideDown()
        elementHide('#temp-box', '#weather-box', '#wind-box')
    });

    $('#temperature').on('click', function(){
        $('#temp-box').slideDown()
        elementHide('#general-box', '#weather-box', '#wind-box')
    });

    $('#weather').on('click', function(){
        $('#weather-box').slideDown()
        elementHide('#general-box', '#temp-box', '#wind-box')
    });

    $('#wind').on('click', function(){
        $('#wind-box').slideDown()
        elementHide('#general-box', '#temp-box', '#weather-box')
    });

    function elementHide(e0, e1, e2){
        if($(e0).is(':visible') || $(e1).is(':visible') || $(e2).is(':visible')){
            $(e0).slideUp()
            $(e1).slideUp()
            $(e2).slideUp()
        }
    }

    function unixTimeStamp(data){
        let unix_timestamp = data
        var date = new Date(unix_timestamp * 1000)
        var hours = date.toLocaleString("en-US", {hour: "numeric"}); 
        var minutes = date.toLocaleString("en-US", {minute: "numeric"}); 
        var formattedTime = hours + ':' + minutes

        return formattedTime
    }

    function elemetnArahAngin(e, dj){
        return $('#val-degree').text('Arah Angin : ' + dj + ' | ' + e)
    }

    $('#city').on('keyup', function(){
        $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().slice(1))
    });

    $('#submit').on('click', function(){
        var valueInput = $('#city').val()

        $('#result-box').slideDown()

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + valueInput + '&appid=YOUR_KEY_API')
            .then(response => response.json())
            .then(data => {
                switch(data.cod){
                    case 200:
                        var country = new Intl.DisplayNames(['id'], { type: 'region' })

                        var tempStart = data.main.temp
                        var tempFeel = data.main.feels_like
                        var temMax = data.main.temp_max
                        var tempMinus = 273.15
                        var tempTotalMain = tempStart - tempMinus
                        var tempTotalFeel = tempFeel - tempMinus
                        var tempTotalMax = temMax - tempMinus

                        var weatherStr = data.weather[0].description
                        var weatherTotal = weatherStr.charAt(0).toUpperCase() + weatherStr.slice(1);

                        var windSpeed = data.wind.speed

                        // General
                        $('#val-country').text('Country : ' + country.of(data.sys.country))
                        $('#val-city').text('City : ' + valueInput)
                        $('#val-sunrise').text('Sunrise : ' + unixTimeStamp(data.sys.sunrise))
                        $('#val-sunset').text('Sunset : ' + unixTimeStamp(data.sys.sunset))

                        // Temperature
                        $('#val-temperature').text('Temperature : ' + tempTotalMain.toFixed(1) + '° C')
                        $('#val-feels').text('Feels Like : ' + tempTotalFeel.toFixed(1) + '° C')
                        $('#val-max-temp').text('Max Temperature : ' + tempTotalMax.toFixed(1) + '° C')
                        $('#val-humidity').text('Humidity : ' + data.main.humidity + '%')

                        // Weather
                        $('#val-main-weather').text('Weather : ' + data.weather[0].main)
                        $('#val-description').text('Description : ' + weatherTotal)

                        // Wind
                        $('#val-wind-speed').text('Wind Speed : ' + windSpeed + ' m/s')

                        var deg = ['North-Northeast (Utara-Timur Laut)', 'Northeast (Timur Laut)', 'East-Northeast (Timur-Timur Laut)', 'East (Timur)', 'East-Southeast (Timur-Tenggara)', 'Southeast (Tenggara)', 'South-Southeast (Selatan Tenggara)', 'South (Selatan)', 'South-Southwest (Selatan-Barat Daya)', 'Southwest (Barat Daya)', 'West-Southwest (Barat-Barat Daya)', 'West (Barat)', 'West-Northwest (Barat-Barat Laut)', 'Northwest (Barat Laut)', 'North-Northwest (Utara-Barat Laut)', 'North (Utara)']

                        switch(true){
                            case (data.wind.deg <= 33.75 && data.wind.deg >= 11.25):
                                elemetnArahAngin(deg[0], data.wind.deg)
                            break;
                            case (data.wind.deg <= 56.25 && data.wind.deg >= 33.75):
                                elemetnArahAngin(deg[1], data.wind.deg)
                            break;
                            case (data.wind.deg <= 78.75 && data.wind.deg >= 56.25):
                                elemetnArahAngin(deg[2], data.wind.deg)
                            break;
                            case (data.wind.deg <= 101.25 && data.wind.deg >= 78.75):
                                elemetnArahAngin(deg[3], data.wind.deg)
                            break;
                            case (data.wind.deg <= 123.75 && data.wind.deg >= 101.25):
                                elemetnArahAngin(deg[4], data.wind.deg)
                            break;
                            case (data.wind.deg <= 146.25 && data.wind.deg >= 123.75):
                                elemetnArahAngin(deg[5], data.wind.deg)
                            break;
                            case (data.wind.deg <= 168.75 && data.wind.deg >= 146.25):
                                elemetnArahAngin(deg[6], data.wind.deg)
                            break;
                            case (data.wind.deg <= 191.25 && data.wind.deg >= 168.75):
                                elemetnArahAngin(deg[7], data.wind.deg)
                            break;
                            case (data.wind.deg <= 213.75 && data.wind.deg >= 191.25):
                                elemetnArahAngin(deg[8], data.wind.deg)
                            break;
                            case (data.wind.deg <= 236.25 && data.wind.deg >= 213.75):
                                elemetnArahAngin(deg[9], data.wind.deg)
                            break;
                            case (data.wind.deg <= 258.75 && data.wind.deg >= 236.25):
                                elemetnArahAngin(deg[10], data.wind.deg)
                            break;
                            case (data.wind.deg <= 281.25 && data.wind.deg >= 258.75):
                                elemetnArahAngin(deg[11], data.wind.deg)
                            break;
                            case (data.wind.deg <= 303.75 && data.wind.deg >= 258.75):
                                elemetnArahAngin(deg[12], data.wind.deg)
                            break;
                            case (data.wind.deg <= 326.25 && data.wind.deg >= 303.75):
                                elemetnArahAngin(deg[13], data.wind.deg)
                            break;
                            case (data.wind.deg <= 348.75 && data.wind.deg >= 326.25):
                                elemetnArahAngin(deg[14], data.wind.deg)
                            break;
                            case (data.wind.deg <= 11.25 && data.wind.deg >= 348.75):
                                elemetnArahAngin(deg[15], data.wind.deg)
                            break;
                                
                        }

                    break;
                }
            })
            .catch(err => console.log(err))
    });
});