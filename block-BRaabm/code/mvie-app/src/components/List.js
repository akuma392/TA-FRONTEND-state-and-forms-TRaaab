function List(props) {
  return (
    <ul className="rootElm">
      {props.data.map((elm) => {
        return (
          <li className="card">
            <h2>{elm.Title}</h2>
            <div className="image-block">
              <img src={elm.Images[0]} alt="" />
            </div>
            <h4>{elm.Actors}</h4>
            <p>{elm.Released}</p>
            <h6>{elm.Type}</h6>

            <div className="more">
              <button onClick={() => props.handleMovie(elm)} className="btn">
                More info
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
