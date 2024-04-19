import React, { useState, useEffect } from "react";

export default function ShowsAPI() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://movies-api14.p.rapidapi.com/shows";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d6717545b9msh66502d5f6a55b5fp187aa6jsn4059fae7f5b3",
        "X-RapidAPI-Host": "movies-api14.p.rapidapi.com"
      }
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-black">
      {data.movies &&
        data.movies.map((movie, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg p-4 bg-black text-white"
          >
            <h2 className="font-bold text-xl text-center mb-2">
              {movie.title}
            </h2>
            <img
              className="w-80 h-60 object-cover mx-auto"
              src={movie.poster_path}
              alt={movie.title}
            />
            <p className=" text-white text-sm">{movie.overview}</p>
          </div>
        ))}
    </div>
  );
}
