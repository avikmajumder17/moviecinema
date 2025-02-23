import { useFetch } from "../../hooks/useFetch";
import { useTitle } from "../../hooks/useTitle";
import { Card } from "../../components/Card/Card";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath); 
  
  useTitle(`${title}`);

  return (
    <main>
      <div className="max-w-screen-xl m-auto">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center gap-12">
          {/*card start*/}

          {movies.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}              

          {/*card end*/}
        </div>
      </div>
    </main>
  )
}
