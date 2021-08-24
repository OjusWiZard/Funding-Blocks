import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Blocks from "./pages/Blocks";
import BlockDetails from "./pages/BlocksDetails";
import Default from "./pages/Default";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blocks" component={Blocks} />
          <Route exact path="/blockDetails/:id" component={BlockDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/editProfile" component={EditProfile} />
          <Route path="*" component={Default} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
