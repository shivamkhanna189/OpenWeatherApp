import { useState } from "react";
import SearchContainer from "./SearchContainer";
import WeatherInfo from "./WeatherInfo";
import ForecastInfo from "./ForecastInfo";
import { API_URL, APP_ID } from "../utils/Constant";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userValue, setUserValue] = useState("");
  const fetchData = value => {
    setLoading(true);
    const api1 = `${API_URL}/weather?q=${value}&appid=${APP_ID}&units=metric`;
    const api2 = `${API_URL}/forecast?q=${value}&appid=${APP_ID}&units=metric`;
    function getData(url) {
      return fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      });
    }

    Promise.all([getData(api1), getData(api2)])
      .then(([data1, data2]) => {
        setWeatherInfo(data1);
        setForecastInfo(data2);
        setError(null);
      })
      .catch(error => {
        setWeatherInfo(null);
        setForecastInfo(null);
        setError(error.message);
      })
      .finally(() => {
        setUserValue(value);
        setLoading(false);
      });
  };

  return (
    <div>
      <SearchContainer fetchData={fetchData}></SearchContainer>
      {error ? (
        <ErrorPage value={userValue} />
      ) : (
        <>
          <WeatherInfo weatherInfo={weatherInfo}></WeatherInfo>
          <ForecastInfo forecastInfo={forecastInfo}></ForecastInfo>
        </>
      )}
      <Loader loading={loading}></Loader>
    </div>
  );
};

export default Body;
