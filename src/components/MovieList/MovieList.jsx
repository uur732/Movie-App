import React from "react";
import MovieLibrary from "../MovieLibrary/MovieLibrary";


function MovieList(props) {
  return (


    
      <div className="container"> 
        <div className="row">

          {props.movies.map((movie) => {
              return (
          <div className='col-md mt-4'>
            <MovieLibrary movie={movie} />
          </div>
          );
          })}

        </div>
      </div>
    



  );
}

export default MovieList;
