import axios from "axios";
import { useEffect, useState } from "react";

function useGetMovies(url, length) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const getMovies = async () => {
    try {
      const data = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      });

      const limitedData = data.data.results.slice(0, length);
      setData(limitedData);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { data, error };
}

export { useGetMovies };
