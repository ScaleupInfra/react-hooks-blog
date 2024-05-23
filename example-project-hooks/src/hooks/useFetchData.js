import { useEffect, useState } from "react";

export default function useFetchData(fetchFunction, pageNumber, callback) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchedData = await fetchFunction(pageNumber, 10);
        if (fetchedData.length > 0) {
          setData(fetchedData);
          callback();
        } else {
          throw new Error("Something went wrong while fetching data");
        }
      } catch (e) {
        console.log(e);
        setIsError(true);
        setErrorMessage(e.message);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [pageNumber, callback, fetchFunction]);

  return { data, isLoading, isError, errorMessage };
}
