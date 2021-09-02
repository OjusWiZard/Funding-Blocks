import React, { useState } from "react";
import { fundingBlockify } from "../../api";
import Button from "../../components/button";
import Map from "../../components/map/Map";
import { Fade } from "react-reveal";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

function CreateBlock() {
  const [coordinates, setCoordinates] = useState({ lat: 24, lng: 78 });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    target_amount: "",
    image: "",
    actions: "",
    slug: "",
    thankyou: "",
    legal_statements: "",
    latitude: "",
    longitude: "",
  });

  const handleCoordinates = (e) => {
    setCoordinates({ lat: e.lat, lng: e.lng });
    setFormData({ ...formData, latitude: String(e.lat), longitude: String(e.lng) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, slug: slugify(formData.title) });
    fundingBlockify({ ...formData, slug: slugify(formData.title) }).then((res) => {
      console.log(res);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-light">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-12 col-12 form-center">
            <div className="bg-white my-5 box py-5 px-lg-5 px-4">
              <h1 className="text-center font-demi text-primaryColor">Funding-Blockify</h1>
              <hr />
              <div className="text-muted font-demi font-14">
                Pro Tip:&nbsp;
                <span className="font-regular">
                  The more accurate and brief details you write the more donors will trust you.
                </span>
              </div>
              <Fade bottom>
                <form onSubmit={handleSubmit}>
                  <label className="font-demi text-primaryColor font-14 mt-4 fields-required">
                    Title
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What is it called?"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <label className="font-demi text-primaryColor font-14 mt-4 fields-required">
                    Block Description
                  </label>
                  <div className="input-group">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enter the Block Description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="5"
                    />
                  </div>
                  <label className="font-demi text-primaryColor font-14 mt-4 fields-required">
                    Choose the mishappening location
                  </label>
                  <div style={{ height: "50vh", width: "100%" }}>
                    <Map
                      coordinates={coordinates}
                      handleCoordinates={handleCoordinates}
                      type="create"
                    />
                  </div>
                  <label className="font-demi text-primaryColor font-14 mt-4 fields-required">
                    Target Amount
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="What is your target amount?"
                      name="target_amount"
                      value={formData.target_amount}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <label className="font-demi text-primaryColor font-14 mt-4 fields-required">
                    Image URL
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the Image URL"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <label className="font-demi text-primaryColor font-14 mt-4 fields-required">
                    Actions
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the link"
                      name="actions"
                      value={formData.actions}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <label className="font-demi text-primaryColor font-14 mt-4 fields-required">
                    Legal Statement
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the link"
                      name="legal_statements"
                      value={formData.legal_statements}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <label className="font-demi text-primaryColor font-14 mt-4 fields-required">
                    Thankyou Statement
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the link"
                      name="thankyou"
                      value={formData.thankyou}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button title="Create" className="mt-5" />
                  </div>
                </form>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlock;
