import { convertTimestampToDate } from "../utils/Constant";

const ForecastInfo = ({ forecastInfo }) => {
  return forecastInfo ? (
    <div className="mx-48 my-8 bg-gray-100 rounded-lg p-8">
      <div className="text-2xl font-bold text-gray-800">
        3-hour Forecast 5 days
      </div>
      <div>
        {forecastInfo &&
          forecastInfo.list.map((data, index) => {
            return (
              <div className="flex justify-between mt-4" key={index}>
                <div> {convertTimestampToDate(data?.dt)} </div>
                <div>
                  {data?.main?.temp_min} / {data?.main?.temp_max}&deg;C
                </div>
                <div className="capitalize">
                  {data?.weather[0]?.description}
                </div>
                <div>{data?.wind?.speed} m/sec</div>
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-64">
      <p className="text-gray-500 text-lg font-semibold">
        Please search city to get data
      </p>
    </div>
  );
};

export default ForecastInfo;
