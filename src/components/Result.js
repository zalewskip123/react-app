import React from "react";

import "./Result.css";

const Result = (props) => {
    const {date, city, sunrise, sunset, temp, pressure, wind, err} = props.weather;
    
    let content = null;

    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        const windKmH = wind / (1000/3600);

        content = (
            <div>
                <h3>Wyniki wyszukiwania dla: <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temp} &#176;C</h4>
                <h4>Wschód słońca dzisiaj o: {sunriseTime}</h4>
                <h4>Zachód słońca dzisiaj o: {sunsetTime}</h4>
                <h4>Aktualna prędkość wiatru: {windKmH.toFixed(2)} km/h</h4>
                <h4>Aktualne ciśnienie: {pressure} hPa</h4>
            </div>
        )
    }
    
    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    )
}

export default Result;