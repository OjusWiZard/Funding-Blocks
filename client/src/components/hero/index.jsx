import React from "react";
import CountUp from "react-countup";
import Button from "../button";

const HomeHero = () => {
  return (
    <div>
      <div className="bg-image">
        <div className="home-text text-center py-section">
          <div className="d-flex justify-content-center align-items-center h-100 flex-column">
            <h1 className="display-2 text-secondaryColor">
              <CountUp end={10000000} duration={5} className="text-center" />
            </h1>
            <h1 className="text-white">An easy way to raise funds</h1>
            <div className="text-white display-4 font-demi">
              What if donations becomes transparent?
            </div>
            {/* <Button title="Know More" className="mt-4" /> */}
          </div>
        </div>
      </div>
      <div className="features container mb-3">
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 bg-primaryColor text-white text-center center">
            <p className="font-demi font-22">The Primary capibilities of Funding Blocks</p>
            <p className="font-14 font-regular">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12 font-regular bg-white py-3">
            <div className="container">
              <div className="row mt-3">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center box py-2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src="/images/brain-injury.png" alt="education" className="img-fluid" />
                    </div>
                    <div className="card-content">
                      <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                        Education
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center box py-2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src="/images/brain-injury.png" alt="education" className="img-fluid" />
                    </div>
                    <div className="card-content">
                      <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                        Education
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center box py-2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src="/images/brain-injury.png" alt="education" className="img-fluid" />
                    </div>
                    <div className="card-content">
                      <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                        Education
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center box py-2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src="/images/brain-injury.png" alt="education" className="img-fluid" />
                    </div>
                    <div className="card-content">
                      <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                        Education
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center box py-2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src="/images/education.png" alt="education" className="img-fluid" />
                    </div>
                    <div className="card-content">
                      <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                        Education
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center box py-2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src="/images/child-health.png" alt="education" className="img-fluid" />
                    </div>
                    <div className="card-content">
                      <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                        Education
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center box py-2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src="/images/brain-injury.png" alt="education" className="img-fluid" />
                    </div>
                    <div className="card-content">
                      <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                        Education
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center box py-2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src="/images/brain-injury.png" alt="education" className="img-fluid" />
                    </div>
                    <div className="card-content">
                      <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                        Education
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
