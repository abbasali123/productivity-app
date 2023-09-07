import { useState, useEffect } from "react";
import { useTime } from "../Context/time-context.js";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [userLocation, setUserLocation] = useState(
    JSON.parse(localStorage.getItem("user_location"))
  );
  const [imgAlt, setImgAlt] = useState("weather icon");
  const { phaseOfDay } = useTime();

  function getLocation() {
    if (userLocation === null) {
      if ("geolocation" in navigator) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              localStorage.setItem(
                "user_location",
                JSON.stringify({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                })
              );
              setUserLocation(
                JSON.parse(localStorage.getItem("user_location"))
              );
            },
            () => {
              console.log("Permission denied!");
            }
          );
        });
      } else {
        console.error("Geolocation API not available :(");
      }
    }
    return userLocation;
  }

  useEffect(() => {
    (async () => {
      const newLocation = await getLocation();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${newLocation.latitude}&lon=${newLocation.longitude}&appid=${process.env.REACT_APP_API_KEY}`
      );
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setWeatherIcon(
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
      setImgAlt(data.weather[0].description);
      setTemperature(Math.round(data.main.temp - 273) + "°C");
      setCity(data.name);
    })();
  }, [phaseOfDay, userLocation]);

  return (
    <div className="weather">
      {weatherIcon !== "" ? (
        <img className="weather__icon" src={weatherIcon} alt={imgAlt} />
      ) : null}

      <div className="weather__temp-city">
        <h1 className="weather__temp">{temperature}</h1>
        <p className="weather__city">{city}</p>
      </div>
    </div>
  );
}

export { Weather };
