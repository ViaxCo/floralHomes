import React from "react";
import '../../src/App.css';
import ReactPLayer from "react-player";

const VideoSec = () => {
  return (
    <div
      className="container-fluid grad"
      style={{
        paddingTop: "2%",
        paddingBottom: "4%",
      }}
    >
      <div className="row">
        <div
          className="col-12"
          style={{ paddingTop: "2%", paddingBottom: "4%" }}
        >
          <p className="h2 text-center font-weight-bold text-light">
            WHAT WE STAND FOR
          </p>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "10px" }}>
        <div className="container">
          <div className="col-7 mx-auto d-block mx-auto">
            {/* <ReactPLayer url="https://www.florahomesgc.com/assets/movies/home_video.mp4" /> */}

            <div class="embed-responsive embed-responsive-1by1">
              <iframe
                class="embed-responsive-item"
                src="https://www.florahomesgc.com/assets/movies/home_video.mp4"
                style={{width: '100%'}}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSec;
