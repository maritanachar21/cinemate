import { MovieList } from "./MovieList";

const SectionHeader = ({ title }) => (
  <div className="text-center mb-8">
    <div className="inline-block px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white relative group">
        {title}
        <span className="block h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-red-500 mx-auto mt-1 rounded"></span>
      </h2>
    </div>
  </div>
);

const Explore = () => {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        🎬 Explore Movies
      </h1>

      <section className="mb-20">
        <SectionHeader title="Top Rated" />
        <MovieList api="movie/top_rated" />
      </section>

      <section className="mb-20">
        <SectionHeader title="Upcoming" />
        <MovieList api="movie/upcoming" />
      </section>

      <section>
        <SectionHeader title="Popular" />
        <MovieList api="movie/popular" />
      </section>
    </div>
  );
};

export default Explore;
