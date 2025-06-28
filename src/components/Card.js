import { Link } from "react-router-dom";
import im from "../Assets/images/backup.png";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : im;

  return (
    <div className="w-full sm:w-[300px] m-4"> {/* <-- Added margin here */}
      <div className="h-[550px] flex flex-col justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/movie/${id}`}>
          <img className="rounded-t-lg w-full h-72 object-cover" src={image} alt="" />
        </Link>
        <div className="p-5 flex flex-col flex-grow">
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {original_title}
            </h5>
          </Link>
          <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-6">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};
