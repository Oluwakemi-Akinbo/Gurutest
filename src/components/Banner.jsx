import tote1 from "../assets/tote1.jpeg";
import tote2 from "../assets/tote2.jpeg";
import tote4 from "../assets/tote4.jpeg";
const Banner = () => {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={tote1} alt="Los Angeles" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={tote2} alt="Chicago" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={tote4} alt="New York" className="d-block w-100" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Banner;