export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carouselWidthHeight"
      data-bs-ride="carousel"
    >
      <div
        className="carousel-inner carouselWidthHeight"
      >
        <div
          className="carousel-item active carouselWidthHeight"
        >
          <img
            src="https://source.unsplash.com/random/1080x1080/?burger"
            className="d-block carouselWidthHeight carouselImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/1080x1080/?pizza"
            className="d-block carouselWidthHeight carouselImg"
          />
        </div>
        <div className="carousel-item">
          <img  
            src="https://source.unsplash.com/random/1080x1080/?food"
            className="d-block carouselWidthHeight carouselImg"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
