function Card(props) {
  // function handleStyle() {
  //   console.log(`font-size:` + props.state.intialFont + 'px');

  //   // return `font-size:` + props.state.intialFont + 'px';
  // }
  return (
    <ul className="rootElm">
      {props.data.map((elm) => {
        return (
          <li key={elm}>
            <div>
              <p>{elm.name}</p>
              <span>{elm.styles} styles</span>
            </div>

            <h2
              className={elm.name}
              style={{ fontSize: props.state.intialFont }}
            >
              {props.state.intialValue}
            </h2>
          </li>
        );
      })}
    </ul>
  );
}

export default Card;
