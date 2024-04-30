export default function Cards() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://source.unsplash.com/random/200x200/?burger"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Burger</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <div className="justify-content-center d-flex gap-4">
            <select name="food-item" id="" style={{width: "100px"}}>
              {Array.from(Array(6), (i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select name="quantity" id="">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
