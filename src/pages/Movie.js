import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchMovieById = async () => {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data);
      };
      fetchMovieById();
    } catch (error) {
      setError(error.message);
    }
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres?.map((genre, idx) => (
          <span key={`genre-${idx}`}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
