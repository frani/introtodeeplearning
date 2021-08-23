import React from "react";
import ReactTextRotator from "react-text-rotator";
import YouTube from "react-youtube";

import videoFrameImage from "../assets/images/video-frame.jpg";

export default function Header() {
  const content = [
    {
      text: "art",
      animation: "fade",
      className: "d-inline text-primary",
    },
    {
      text: "game play",
      animation: "fade",
      className: "d-inline text-primary",
    },
    {
      text: "robotic",
      animation: "fade",
      className: "d-inline text-primary",
    },
    {
      text: "computer vision",
      animation: "fade",
      className: "d-inline text-primary",
    },
    {
      text: "medicine",
      animation: "fade",
      className: "d-inline text-primary",
    },
    {
      text: "language",
      animation: "fade",
      className: "d-inline text-primary",
    },
  ];

  return (
    <header id="header" className="header py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-7 order-lg-2 my-auto">
            <div className="image-container">
              <div className="video-wrapper">
                <YouTube
                  videoId="_f-W98_WHHc"
                  opts={{
                    playerVars: {
                      controls: 0,
                      disablekb: 0,
                      modestbranding: 1,
                    },
                  }}
                  containerClassName={"youtubeContainer"}
                />
                <img
                  className="img-fluid"
                  src={videoFrameImage}
                  alt="alternative"
                />
                <span className="video-play-button">
                  <span></span>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 order-lg-0">
            <div className="text-container">
              <h1 className="h1-large text-primary">MIT 6.S191</h1>
              <h1 className="h1-large">Introduction to Deep Learning</h1>
              <p className="p-large">
                MIT's introductory course on deep learning methods with
                applications in{" "}
                {
                  <ReactTextRotator
                    className="d-inline"
                    transitionTime={100}
                    content={content}
                    time={1200}
                  />
                }
                , and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
