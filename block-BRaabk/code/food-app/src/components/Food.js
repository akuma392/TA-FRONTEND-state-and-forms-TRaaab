function Food(props) {
  return (
    <center>
      <ul className="food">
        {props.alldata.map((elm) => {
          return (
            <li className="food-item">
              <div className="image-block">
                <img src={elm.img} alt="" />
              </div>
              <div className="food-details">
                <div className="food-title">
                  <h4>{elm.title}</h4>
                  <span>{elm.price}</span>
                </div>
                <p>{elm.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </center>
  );
}

export default Food;
