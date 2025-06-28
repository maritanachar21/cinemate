import Hero from "../components/Hero";
import {MovieList} from "./MovieList.js";

const Home = () => {
  return (
    <div>
      <Hero />
      <MovieList api="movie/now_playing" />
    </div>
  );
};

export default Home;
