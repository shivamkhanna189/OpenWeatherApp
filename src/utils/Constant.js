export const APP_ID = "1906697c6282723f4dd18380a9f7f931";

export const API_URL = "https://api.openweathermap.org/data/2.5";
export const convertTimestampToDate = timestamp => {
  if (!timestamp) return "";
  // Convert the timestamp to milliseconds if it's in seconds
  const date = new Date(timestamp * 1000);

  // Format the date
  const formattedDate = date.toLocaleString(); // e.g., "11/25/2024, 3:42:00 PM"

  return formattedDate;
};
