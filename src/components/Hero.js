import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?cinema')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Cinemate</h1>
          <p className="text-lg md:text-2xl mb-6">
            Discover top-rated movies and your next favorite show.
          </p>
          <Link to="/explore">
  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold text-lg transition">
    Explore Now
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
