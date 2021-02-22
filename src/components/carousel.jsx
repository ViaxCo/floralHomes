import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Carousel = () => {
  AOS.init();
  return (
    <>
      <div
        data-aos="fade-up"
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner text-light"  data-aos="fade-up">
          <div className="carousel-item active">
            <p className="text-center h5">we are</p>
            <p className="text-center h1 font-weight-bold">FloraHomes GC,</p>
            <p className="text-center">
              Foremost Online property verification & Real estate investment
              company
            </p>
            <button
              className="btn d-block mx-auto text-light"
              style={{ backgroundColor: "orangered" }}
            >
              Our services
            </button>
          </div>
          <div className="carousel-item">
            <p className="text-center h5">welcome to the world of</p>
            <p className="text-center h1 font-weight-bold">
              SECURE, STERLING & SEAMLESS
            </p>
            <p className="text-center">
              services in real estate & Property development
            </p>
            <button className="btn btn-default d-block mx-auto text-light">
              About US
            </button>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
