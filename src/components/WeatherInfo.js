import { convertTimestampToDate } from "../utils/Constant";

const WeatherInfo = ({ weatherInfo }) => {
  return (
    weatherInfo && (
      <div className="mx-48 my-8 bg-gray-100 rounded-lg p-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Current Weather In{" "}
            <span className="text-green-500">
              {weatherInfo?.name} ,{weatherInfo?.sys?.country}
            </span>
          </h1>
          <span className="text-red-500">
            {convertTimestampToDate(weatherInfo?.dt)}
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-2xl font-bold text-gray-800">
            {weatherInfo?.main?.temp}&deg;C
          </div>
          <div className="capitalize">
            {weatherInfo?.weather[0]?.description}
          </div>
          <div>{weatherInfo?.wind.speed} m/sec</div>
        </div>
      </div>
    )
  );
};

export default WeatherInfo;
