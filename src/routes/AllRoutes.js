import { MovieList, PageNotFound, Search, MovieDetail } from "../pages";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} /> {/* 👈 Add this */}
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies/popular" element={<MovieList api="movie/popular" />} />
        <Route path="/movies/top" element={<MovieList api="movie/top_rated" />} />
        <Route path="/movies/upcoming" element={<MovieList api="movie/upcoming" />} />
        <Route path="/search" element={<Search api="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

