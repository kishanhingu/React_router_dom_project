import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../components/UI/MovieCard";

export const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  return (
    <ul className="container grid grid-four--cols">
      {movieData.Search.map((curMovie) => {
        return <MovieCard key={curMovie.imdbID} curMovie={curMovie} />;
      })}
    </ul>
  );
};
