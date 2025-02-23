import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList apiPath="avenger" title="Home" />} />

        <Route path="movies/:id" element={<MovieDetails />} />

        <Route path="movies/superhero" element={<MovieList apiPath="avenger" title="Superhero" />} />

        <Route path="movies/horror" element={<MovieList apiPath="horror" title="Horror" />} />

        <Route path="movies/comedy" element={<MovieList apiPath="comedy" title="Comedy" />} />

        <Route path="search" element={<Search />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
