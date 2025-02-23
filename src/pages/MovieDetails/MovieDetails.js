import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useTitle } from "../../hooks/useTitle";

import "./MovieDetails.css";

export const MovieDetails = () => {
  const params = useParams();
  const [movies, setMovies] = useState({});

  useTitle(`${movies.Title}`);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=43c5dedc`)
      const data = await response.json();
      setMovies(data);
      console.log(data);
    }
    fetchMovie();
  }, [params.id])  

  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-20">
          <div>
            <img src={movies.Poster} alt={movies.Title} className="w-full" />
          </div>

          <div className="col-span-2">
            <h1 className="text-4xl text-black dark:text-white mb-4">{movies.Title}</h1>

            <p className="text-lg text-black dark:text-white mb-6">{movies.Plot}</p>

            <p className="sdfdvrttrett text-lg text-black dark:text-white mb-4">{movies.Genre}</p>

            <p className="sdfdvrttrett text-lg text-black dark:text-white mb-4">
              <div class="flex items-center">
                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>

                <p class="ms-2 text-md font-bold text-gray-900 dark:text-white">{movies.imdbRating}</p>
                
                <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                
                <a href="#" class="text-md font-medium text-gray-900 underline hover:no-underline dark:text-white">{movies.imdbVotes} reviews</a>
              </div>
            </p>

            <p className="sdfdvrttrett text-lg text-black dark:text-white mb-4"><b>Language:</b> {movies.Language}</p>

            <p className="sdfdvrttrett text-lg text-black dark:text-white mb-4"><b>Runtime: </b>{movies.Runtime}</p>

            <p className="sdfdvrttrett text-lg text-black dark:text-white mb-4"><b>Revenue: </b>{movies.BoxOffice}</p>

            <p className="sdfdvrttrett text-lg text-black dark:text-white mb-4"><b>Release D</b>ate: {movies.Released}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
