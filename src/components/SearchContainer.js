import { useRef, useState } from "react";

const SearchContainer = ({ fetchData }) => {
  const searchRef = useRef(null);
  const [error, setError] = useState(false);
  const getData = () => {
    const value = searchRef.current.value;
    if (value.trim()) {
      setError(false);
      searchRef.current.value = "";
      fetchData(value);
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex justify-center bg-gray-300  py-8">
      <div className="flex">
        <div>
          <input
            type="text"
            ref={searchRef}
            placeholder="Search City"
            className="px-4 py-1 w-64 focus:outline-none rounded-l-lg "></input>
          {error && (
            <p className="text-red-500 text-sm">Please enter city to search</p>
          )}
        </div>
        <div>
          <button
            type="button"
            className="px-4 py-1 bg-black text-white rounded-r-lg "
            onClick={() => getData()}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
