import React from 'react';
import Food from './Food';

import data from '../data.json';

console.log(data);
class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: 'All',
    };
  }

  handleClick = (ele) => {
    this.setState({
      activeMenu: ele,
    });
  };
  render() {
    let menu = ['All', 'Breakfast', 'Lunch', 'Shakes'];

    let alldata;

    if (this.state.activeMenu === 'All') {
      alldata = data;
    } else {
      alldata = data.filter(
        (elm) => elm.category === this.state.activeMenu.toLowerCase()
      );
    }
    console.log(alldata);
    return (
      <center>
        <ul className="menu">
          {menu.map((ele) => (
            <li
              key={ele}
              id={this.state.activeMenu === ele ? 'activeBtn' : ''}
              onClick={() => this.handleClick(ele)}
            >
              {ele}
            </li>
          ))}
        </ul>

        <Food alldata={alldata} />
      </center>
    );
  }
}

export default Menu;
