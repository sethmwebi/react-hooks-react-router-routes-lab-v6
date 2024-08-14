import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    try {
      const fetchAllDirectors = async () => {
        const response = await fetch("http://localhost:4000/directors");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDirectors(data);
      };
      fetchAllDirectors();
    } catch (error) {
      console.log("something went wrong");
    }
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors &&
          directors.length &&
          directors.map((director) => (
            <div key={director.id}>
              <h1>Directors Page</h1>

              <article>
                <h2>{director.name}</h2>
                <ul>
                  {director.movies.map((movie, idx) => (
                    <li key={`director-movie-${idx}`}>{movie}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
      </main>
    </>
  );
}

export default Directors;
