import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const image1 = "./img/background/1.webp";

const Section = () => {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-12">
          <Parallax className="p-0" bgImage={image1} strength={300}>
            <div className="padding60 sm-padding40 sm-p-2 position-relative">
              <div className="row z-1">
                <div className="col-lg-6">
                  <div className="subtitle mb-3">Start your game</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Unlock Your Gaming Full Potential
                  </h2>
                  <p className="wow fadeInUp">
                    Experience unparalleled performance with our premium
                    servers, designed to deliver the fastest and most reliable
                    gameplay. Elevate your gaming adventure with top-tier
                    hardware and robust security features.
                  </p>
                  <div className="spacer-10"></div>
                  <Link className="btn-main mb10" to="/pricing">
                    Order Your Game Server Now
                  </Link>
                </div>
              </div>
            </div>
          </Parallax>
          <img
            src="./img/misc/avatar.webp"
            className="sm-hide position-absolute avatar px-2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
