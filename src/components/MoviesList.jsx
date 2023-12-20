import "./MoviesList.css";
import movies from "../data/movies";

function MoviesList() {
  return (
    <div>
      {movies.map((item, index) => {
        return (
          <>
            <div className="movie-list-card">
              <img key={index} src={item.image} alt="Assassin's Creed" />
              <div className="movie-info" key={index}>
                <p key={index}>Title: {item.title}</p>
                <p key={index}>Year: {item.year}</p>
                <p key={index}>Runtime: {item.runtime}</p>
                <p key={index}>
                  Genres:{" "}
                  {item.genres.map((genre, genreIndex) => {
                    return (
                      <span key={genreIndex} className="movie-genre-bubble">
                        {genre}
                      </span>
                    );
                  })}
                </p>

                <p key={index}>IMDB Ratings: {item.imdbRating}</p>
                <p key={index}>IMDB Votes: {item.imdbVotes}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default MoviesList;
