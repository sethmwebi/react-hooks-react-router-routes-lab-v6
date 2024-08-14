import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    try {
      const fetchAllActors = async () => {
        const response = await fetch("http://localhost:4000/actors");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setActors(data);
      };
      fetchAllActors();
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
        <h1>Actors Page</h1>
        {actors &&
          actors.length &&
          actors.map((actor, index) => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={`actor-movies-${index}`}>{movie}</li>
                ))}
              </ul>
            </article>
          ))}
      </main>
    </>
  );
}

export default Actors;
