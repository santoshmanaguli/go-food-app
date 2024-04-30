import Cards from "../Cards/Cards.jsx";
import Navbar from "../Navbar/Navbar.jsx";
// import Carousel from "../Carousel/Carousel.jsx";
import Search from "../Search/Search.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <div className="d-block">
        <Navbar></Navbar>
        {/* <Carousel></Carousel> */}
        <Search></Search>
        <div className="container mt-5">
          <div className="row ">
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
            <div className="col mb-5">
              <Cards></Cards>
            </div>
          </div>
        </div>
        <hr />
        <Footer></Footer>
      </div>
    </>
  );
}
