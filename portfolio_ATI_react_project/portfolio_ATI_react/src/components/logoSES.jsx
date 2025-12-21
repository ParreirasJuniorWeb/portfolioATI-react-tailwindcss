import React from "react";
import { Link } from "react-router-dom";
const logoSES = () => {
  return (
    <>
      {/* <!-- Logo SES  --> */}
      <div className="row">
        <div className="col-md-6" data-aos="fade-up">
          <a
            href="https://www.saude.mg.gov.br/"
            className="text-decoration-none"
          >
            <div className="link-content mt-3">
              <img src="src/img/logo-ses.png" alt="image" className="mt-5" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default logoSES;
