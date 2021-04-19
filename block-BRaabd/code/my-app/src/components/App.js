import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      basketBall: '/assets/basketball.jpg',
      cricket: '/assets/cricket.jpg',
      laptop: '/assets/laptop.jpg',
      phone: '/assets/phone.jpg',
      pubg: '/assets/pubg.jpeg',

      tiger: 'assets/tiger.jpg',
    };

    this.state = {
      image: '/assets/basketball.jpg',
    };
  }
  handleClick = (event) => {
    let val = event.target.innerText;
    this.setState({
      image: this.data[val],
    });
    console.log('hello');
    console.log(event.target.innerText);
  };
  render() {
    return (
      <center>
        {Object.keys(this.data).map((key) => (
          <button className="btn" key={key} onClick={this.handleClick}>
            {key}
          </button>
        ))}
        <div className="image">
          <img src={this.state.image} alt="" />
        </div>
      </center>
    );
  }
}

export default App;
