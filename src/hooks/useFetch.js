import { useState,useEffect } from "react";
export const useFetch=(api,queryTerm="")=>{
    const [data,setData]=useState([]);
    const url =`https://api.themoviedb.org/3/${api}?api_key=36d6b959602cce967d139a346db5afef&query=${queryTerm}`
    useEffect(()=>{
            async function fetchMovies(){
                const response= await fetch(url);
                const json =await response.json();
                setData(json.results);
            }
            fetchMovies();
        },[url])
    return (
       {data}
    )
}