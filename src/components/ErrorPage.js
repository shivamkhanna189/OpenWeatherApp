const ErrorPage = ({ value }) => {
  return (
    <div className="mx-48 my-8 bg-red-400 rounded-lg p-4">
      <div className="text-xl  text-white">No results for {value}</div>
    </div>
  );
};

export default ErrorPage;
