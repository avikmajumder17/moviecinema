import { useEffect, useState } from "react";

export const useSearch = (queryTerm) => {
  const [data, setData] = useState([]);
  const url = `https://www.omdbapi.com/?s=${queryTerm}&apikey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchMovie = async() => {
      const response = await fetch(url)
      const result = await response.json()
      console.log(result.Search)
      setData(result.Search)
    }

    fetchMovie();
  }, [url])

  return { data }
}