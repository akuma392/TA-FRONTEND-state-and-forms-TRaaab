import React from 'react';
import data from './data.json';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
    };
  }

  handleMovie = (film) => {
    this.setState({
      movie: film.Title,
    });
  };
  handleClear = () => {
    this.setState({
      movie: '',
    });
  };

  handleView = (condition) => {
    if (!condition) {
      return (
        <ul className="rootElm">
          {data.map((elm) => {
            return (
              <li className="card">
                <h2>{elm.Title}</h2>
                <div className="image-block">
                  <img src={elm.Images[0]} alt="" />
                </div>
                <h4>{elm.Actors}</h4>
                <p>{elm.Released}</p>
                <h6>{elm.Type}</h6>

                <div className="more">
                  <button onClick={() => this.handleMovie(elm)} className="btn">
                    More info
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      let movie = data.filter((elm) => elm.Title === this.state.movie)[0];
      console.log(movie, 'movieeeeeeeeeeeeeeeeeeeeeeeeeeee');
      return (
        <div className="modal">
          <h3 className="title">{movie.Title}</h3>
          <button onClick={this.handleClear} className="btm">
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
  };

  render() {
    return <>{this.handleView(this.state.movie)}</>;
  }
}

export default Movie;
