function Billing(props) {
  let { address, pin, city, country } = props.data;
  console.log(props.data);
  return (
    <form>
      <h2>Billing address</h2>
      <label htmlFor="text">Address</label>
      <input
        type="text"
        placeholder="add your address"
        value={address}
        onChange={props.handleInput}
        name="address"
      />
      <label htmlFor="number">ZIP/Postal Code</label>
      <input
        type="number"
        placeholder="add your pincode"
        value={pin}
        onChange={props.handleInput}
        name="pin"
      />
      <label htmlFor="text">City</label>
      <input
        type="text"
        placeholder="add your city"
        value={props.data.city}
        onChange={props.handleInput}
        name="city"
      />
      <label htmlFor="text">Country</label>
      <input
        type="text"
        placeholder="add your country"
        value={country}
        onChange={props.handleInput}
        name="country"
      />
    </form>
  );
}

export default Billing;
