import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      const fetchAllMovies = async () => {
        const response = await fetch("http://localhost:4000/movies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data);
      };
      fetchAllMovies();
    } catch (error) {
      console.log("an error occured");
    }
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies &&
          movies.length &&
          movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))}
      </main>
    </>
  );
}

export default Home;
