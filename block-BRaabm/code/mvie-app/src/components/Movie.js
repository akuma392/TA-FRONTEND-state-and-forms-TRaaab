import React from 'react';
import data from './data.json';
import List from './List';
import Modal from './Modal';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
    };
  }

  render() {
    return (
      <>
        {/* <List data={data} /> */}
        <Modal />
      </>
    );
  }
}

export default Movie;

// "Title": "Gotham",
// "Year": "2014–",
// "Rated": "TV-14",
// "Released": "01 Aug 2014",
// "Runtime": "42 min",
// "Genre": "Action, Crime, Drama",
// "Director": "N/A",
// "Writer": "Bruno Heller",
// "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
// "Plot": "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
// "Language": "English",
// "Country": "USA",
// "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
// "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
// "Metascore": "N/A",
// "imdbRating": "8.0",
// "imdbVotes": "133,375",
// "imdbID": "tt3749900",
// "Type": "series",
// "totalSeasons": "3",
// "Response": "True",
