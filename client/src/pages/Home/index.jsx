import React from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import HomeHero from "../../components/hero";

const Home = () => {
  return (
    <>
      <HomeHero />
      <div className="bg-light">
        <div className="container">
          <div className="row d-flex justify-content-center py-5 ">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              <Card />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              <Card />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-3">
              <Card />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4 pb-5">
            <Link to="/blocks">
              <Button title="All Disasters" className="mx-2" />
            </Link>
            <Link to="/createBlock">
              <Button title="Create Fundraiser" type="outline" className="mx-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className="custom-blue-bg py-section">
        <h1 className="text-white text-center px-4">Causes you can raise funds for</h1>
        <p className="text-white font-18 font-regular px-4 text-center mb-4">
          Be it for a personal need, social cause or a creative idea - you can count on us for the
          project that you want to raise funds for.
        </p>
        <div className="container px-4">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
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
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/cancer.png" alt="cancer" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Cancer
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/animals.png" alt="animals" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Animals
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/heart.png" alt="heart" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Heart Diseases
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/child-health.png" alt="child-health" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Child Health
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/accident.png" alt="accident" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Accident
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/brain-injury.png" alt="brain-injury" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Brain Injury
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/tsunami.png" alt="tsunami" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Tsunami
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/wildlife-fire.png" alt="wildlife-fire" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Wildlife Fire
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/covid.png" alt="covid" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Covid
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="/images/draught.png" alt="draught" className="img-fluid" />
                </div>
                <div className="card-content">
                  <div className="text-white font-demi h-100 flex-column font-22 d-flex justify-content-center align-items-center">
                    Draught
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mt-4">
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
          </div>
        </div>
      </div>
      <div className="bg-light py-section">
        <div className="container">
          <h1 className="text-primaryColor text-center mb-4">Future Enchancements</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center text-white mt-3">
              <div className="bg-primaryColor py-5 h-100">
                <h3>Personal Fundraising</h3>
                <p className="font-medium font-18">Anyone will be able to raise funds.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center text-white mt-3">
              <div className="bg-secondaryColor py-5 h-100">
                <h3>Startup Funding</h3>
                <p className="font-medium font-18">Startups can also create their Funding Blocks.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center text-white mt-3">
              <div className="bg-tertiaryColor py-5 h-100">
                <h3>Refugee Relief</h3>
                <p className="font-medium font-18">The total relief funds will be distributed to each wallet separately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
