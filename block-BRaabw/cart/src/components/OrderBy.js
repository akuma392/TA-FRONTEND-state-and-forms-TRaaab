function Orderby(props) {
  return (
    <div>
      Order by
      <select>
        <option value="">Select</option>
        <option value="lowest">lowest to highest</option>
        <option value="highest">highest to lowest</option>
      </select>
    </div>
  );
}

export default Orderby;
