import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import { useParams } from "react-router-dom";
import Map from "../../components/map/Map";
import "../../styles/blockDetails.css";
import Modalcentered from "../../components/modals/Modalcentered";

import { getBlock } from "../../api/";
const BlockDetails = () => {
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [block, setBlock] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Use Effect");
    getBlock(params.id).then((data) => {
      setBlock(data);
      setLoading(false);
    });

    return () => setBlock({});
  }, []);
  console.log(modal);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Modalcentered show={modal} onHide={() => setModal(false)} />
      <div className="bg-light py-5">
        <div className="container py-4">
          <h3 className="text-center my-2 text-primaryColor">{block && block?.value?.title}</h3>
          <div className="row d-flex justify-content-center align-items-start">
            <div className="col-md-6 col-lg-6 col-12 py-3">
              <Card type="blockDetails" block={block} setModal={setModal} />
            </div>
            <div className="col-md-4 col-lg-4 col-12 py-3">
              <Card type="fundDetails" block={block} />
              <div>
                <div className={`box mt-4`}>
                  <div style={{ height: "50vh", width: "100%" }}>
                    <Map
                      coordinates={{
                        lat: parseFloat(block?.value?.location?.latitude),
                        lng: parseFloat(block?.value?.location?.longitude),
                      }}
                      type="view"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockDetails;
