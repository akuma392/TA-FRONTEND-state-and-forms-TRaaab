import React from 'react';

import data from '../data.json';
import Product from './Product';
import Size from './Size';

let size = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
    };
  }
  handleSize = (elm) => {
    this.setState({
      size: elm,
    });
  };
  sortSize = () => {
    if (!this.state.size) {
      console.log('test1');
      return data.products;
    } else {
      console.log('test2');
      return data.products.filter((ele) => {
        return ele.availableSizes.includes(this.state.size);
      });
    }
  };
  render() {
    return (
      <div className="flex app">
        <Size size={size} handleSize={this.handleSize} />
        <Product data={this.sortSize()} />
      </div>
    );
  }
}

export default App;
