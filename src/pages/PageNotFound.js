import pnf from "../Assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4" >
                    <p className="text-2xl dark:text-white font-bold my-8">404, Oops!</p>
                    <div className=" max-w-lg">
                    <img className="rounded" src={pnf} alt="404 Page Not Found"></img>
                    </div>
                </div>
                <div className="flex justify-center my-4">
                    <Link to ="/">
                    <button className="w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg
                    py-2.5 mr-2 mb-2">Back to Cinemate</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}