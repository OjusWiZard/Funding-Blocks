import React, { useEffect, useState } from "react";
import { Navbar as NavCustom, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { getAccount, logIn, getUser } from "../../api/index";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    () =>
      getAccount().then((res) => {
        getUser(res.address).then((user) => {
          if (user) setIsLoggedIn(res.result);
        });
      }),
    []
  );

  return (
    <>
      <NavCustom
        variant="dark"
        expand="xl"
        className="bg-primaryColor py-0"
        collapseOnSelect={true}
      >
        <div className="px-5 w-100 d-flex">
          <NavCustom.Brand as={Link} to="/">
            <img src={Logo} alt="Funding Blocks" className="img-fluid my-2" width="35%" />
          </NavCustom.Brand>
          <NavCustom.Toggle aria-controls="responsive-navbar-nav" />
          <div>
          <NavCustom.Collapse id="responsive-navbar-nav" className="text-white text-center">
            <Nav style={{ marginLeft: "auto" }}>
              <Nav.Link as={Link} to="/" className="text-white font-demi px-4">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white font-demi px-4">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/createBlock" className="text-white font-demi px-4">
                Create Block
              </Nav.Link>
              <Nav.Link as={Link} to="/blocks" className="text-white font-demi px-4">
                All Blocks
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://docs.google.com/presentation/d/1gfT7ly5WP2uYMpUgfPnc9wF2VfY-Yz1DNhWUIAQM4Og/edit#slide=id.gcb9a0b074_1_0"
                className="text-white font-demi px-4"
              >
                Presentation
              </Nav.Link>
              {!isLoggedIn ? (
                <span className="mr-2">
                  <Button onClick={() => logIn().then(() => (window.location.href = "/signup"))}>
                    Sign In
                  </Button>
                </span>
              ) : (
                <Nav.Link as={Link} to="/editProfile" className="text-white font-demi px-4">
                  My Profile
                </Nav.Link>
              )}
              <div id="google_translate_element"></div>
            </Nav>
          </NavCustom.Collapse>

          </div>
           </div>
        {/* <div className="sidebar" id="sidebar">
          <div className="sidebar-content">
            <Link to="/profile" className="px-5 d-flex mb-4 mt-3" style={{ cursor: "pointer" }}>
              <div className="ml-3">
                <div
                  style={{ cursor: "pointer", fontSize: "22px" }}
                  className="font-vcr mt-1 font-blue"
                >
                  ABC
                </div>
                <span style={{ cursor: "pointer" }} className="font-robot mt-2 font-blue">
                  ABC
                </span>
              </div>
            </Link>
            <Link to="/">
              <div
                className={`mt-2 font-vcr px-5 sidebar-item text-uppercase py-2 ${
                  location.pathname === "/" && "sidebar-item-active"
                }`}
              >
                Home
              </div>
            </Link>
            <Link to="/events">
              <div
                className={`mt-2 font-vcr px-5 sidebar-item text-uppercase py-2 ${
                  location.pathname === "/events" && "sidebar-item-active"
                }`}
              >
                Events
              </div>
            </Link>
          </div>
        </div> */}
      </NavCustom>
    </>
  );
};

export default Navbar;
