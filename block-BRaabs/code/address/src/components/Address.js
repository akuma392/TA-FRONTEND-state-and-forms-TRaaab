import React from 'react';
import Billing from './Billing';
import Shipping from './Shipping';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      pin: '',
      city: '',
      country: '',
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;

    console.log(name, value);

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="address">
        <Billing data={this.state} handleInput={this.handleInput} />
        <Shipping data={this.state} handleInput={this.handleInput} />
      </div>
    );
  }
}
export default Address;
