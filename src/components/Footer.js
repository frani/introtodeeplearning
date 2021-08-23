import React from "react";

let config = {
  twitter: "",
  facebook: "",
  youtube: "",
};

export default function Footer() {
  return (
    <>
      <div className="footer bg-gray">
        <img
          className="decoration-circles"
          src="images/decoration-circles.png"
          alt="alternative"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>
                If you want to find out which are the right influencers for your
                product marketing campaigns then follow us
              </h4>
              <div className="social-container">
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-pinterest-p fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#your-link">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-youtube fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-unstyled li-space-lg p-small">
                <li>
                  <a href="article.html">Article Details</a>
                </li>
                <li>
                  <a href="terms.html">Terms & Conditions</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <p className="p-small statement">
                <a href="https://inovatik.com" target="_blank" rel="noreferrer">
                  Template @inovatik{" "}
                </a>
                \t Develep by
                <a
                  href="https://github.com/frani"
                  target="_blank"
                  rel="noreferrer"
                >
                  @inovatik{" "}
                </a>
                \t Copyright © MIT 6.S191
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
