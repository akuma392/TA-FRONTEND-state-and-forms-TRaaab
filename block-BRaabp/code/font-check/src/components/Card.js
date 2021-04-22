function Card(props) {
  function handleStyle(elm) {
    console.log(elm);

    // return `${elm.name}`;
  }
  return (
    <ul className="rootElm">
      {props.data.map((elm) => {
        return (
          <li>
            <div>
              <p>{elm.name}</p>
              <span>{elm.styles}</span>
            </div>

            <h2 style={handleStyle(elm)}>{props.state}</h2>
          </li>
        );
      })}
    </ul>
  );
}

export default Card;
