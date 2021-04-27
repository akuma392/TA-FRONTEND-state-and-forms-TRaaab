function Shipping() {
  return (
    <form>
      <h2>Shipping address</h2>
      <label htmlFor="text">Address</label>
      <input type="text" />
      <label htmlFor="number">ZIP/Postal Code</label>
      <input type="number" />
      <label htmlFor="text">City</label>
      <input type="text" />
      <label htmlFor="text">Country</label>
      <input type="text" />
    </form>
  );
}

export default Shipping;
