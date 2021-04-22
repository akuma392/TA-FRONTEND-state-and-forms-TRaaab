import React from 'react';
import data from '../data.json';
import Card from './Card';

class Font extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intialValue: 'hello React',
    };
  }

  handleChange = (event) => {
    this.setState({
      intialValue: event.target.value,
    });
  };
  render() {
    return (
      <>
        <h1>Font check</h1>
        <div className="block">
          <input
            id="inp"
            value={this.state.intialValue}
            type="text"
            placeholder="type text"
            onChange={this.handleChange}
          ></input>
          <label for="vol">Pixel (between 0 and 80):</label>
          <input type="range" id="vol" name="vol" min="0" max="80" />
        </div>
        <Card data={data} state={this.state.intialValue} />
      </>
    );
  }
}

export default Font;
