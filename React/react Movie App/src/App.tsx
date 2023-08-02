import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { Details } from "./screens/Details";
import { Container } from "@mui/material";

function App() {
  // useEffect(() => {
  //   console.log(query);
  //   if (!query) {
  //     return setMovies(data.Search);
  //   }
  //   const filteredMovies = movies.filter((movie) =>
  //     movie.Title.includes(query)
  //   );
  //   setMovies(filteredMovies);
  // }, [query]);

  // if (!movies) return null;

  return (
    <>
      <nav>
        <NavLink to="/">Movie app</NavLink>
      </nav>

      <Container className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
