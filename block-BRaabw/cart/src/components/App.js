import React from 'react';

import data from '../data.json';
import Product from './Product';
import Size from './Size';

let size = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex app">
        <Size size={size} />
        <Product data={data} />
      </div>
    );
  }
}

export default App;
