import { useSearchParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { useSearch } from "../../hooks/useSearch";
import { useTitle } from "../../hooks/useTitle";

export const Search = () => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const { data: movies } = useSearch(queryTerm);

  useTitle(`Search Result For ${queryTerm}`);

  return (
    <main>
      <div className="max-w-screen-xl m-auto">
        <p className="text-gray-800 dark:text-white text-3xl mb-10">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Search result for '${queryTerm}'` }</p>

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