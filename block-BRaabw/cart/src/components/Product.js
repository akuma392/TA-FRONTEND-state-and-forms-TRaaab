function Product(props) {
  // function handlePrice(price){
  //   let pri = String(price);

  // }
  return (
    <div className="grid grid-cols-4 gap-4 my-16" id="prod">
      {props.data.products.map((elm) => {
        return (
          <li key={elm.id} className="list-none text-center">
            <p className={elm.isFreeShipping ? 'shipp-element' : ''}>
              {elm.isFreeShipping ? 'free shipping' : ''}
            </p>
            <img src={`products/${elm.sku}_1.jpg`} />
            <h4 className="mt-8 text-center">{elm.title}</h4>
            <div className="mb-12">
              <h5>
                {elm.currencyFormat}
                {elm.price}
              </h5>
              <p className="text-lg text-gray-400">
                {elm.installments ? (
                  `or ${elm.installments} x ${elm.currencyFormat}${(
                    elm.price / elm.installments
                  ).toFixed(2)}`
                ) : (
                  <div className="p-3"></div>
                )}
              </p>
            </div>

            <button className="close-button">Add to cart</button>
          </li>
        );
      })}
    </div>
  );
}

export default Product;
