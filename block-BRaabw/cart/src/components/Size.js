function Size(props) {
  return (
    <div className="size">
      <h4 className="ml-8 mt-12 ">Sizes:</h4>
      <div className="flex ml-8 flex-wrap pr-6">
        {props.size.map((elm) => {
          return (
            <div className="pr-5 ">
              <a
                className="bg-gray-200 text-xs p-1"
                href=""
                onClick={() => props.handleSize(elm)}
              >
                {elm}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Size;
