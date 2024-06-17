import { useState, useEffect } from "react";

function useWeatherSearch(query) {
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    async function fetchSearchResults() {
      setLoading(true);
      let responseBody = {};
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=dad52c624e003636c5acec74f611ae27&units=imperial`,
          { signal: controller.signal }
        );
        if (response.status !== 200) {
          setError(true);
        } else {
          setError(false);
          responseBody = await response.json();
        }
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request cancelled");
        } else {
          setError(true);
          console.error("Error:", e);
          throw e;
        }
      }

      if (!ignore) {
        setForecasts(responseBody.list || []);
        setLoading(false);
      }
    }
    if (query) {
      fetchSearchResults();
    }
    return () => {
      ignore = true;
      controller.abort();
    };
  }, [query]);
  return [forecasts, loading, error];
}

export default useWeatherSearch;
