function Modal(props) {
  let movie = props.movie;
  return (
    <div className="modal">
      <h3 className="title">{movie.Title}</h3>
      <button className="btm" onClick={props.handleClear}>
        X
      </button>
      <div className="modal-image">
        <img src={movie.Images[0]} alt="" />
      </div>
      <p className="year">year: {movie.Year}</p>
      <p className="release">{movie.Released} </p>
      <p className="runtime">{movie.Runtime}</p>
      <p className="gener">{movie.Gener}</p>
      <p className="director"> Directed by: {movie.Director}</p>
      <p className="actor">cast: {movie.Actors}</p>
      <p className="writer">written by:{movie.Writer} </p>
      <p className="plot">{movie.Plot}</p>
      <p className="country">{movie.Country}</p>
      <p className="lang">{movie.Language}</p>
      <p className="awards">{movie.Awards}</p>
      <p className="imdb">{movie.imdbRating}</p>
      <p className="votes">{movie.imdbVotes}</p>
      <div className="gallery">
        {movie.Images.map((ele) => {
          return <img src={ele} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Modal;
