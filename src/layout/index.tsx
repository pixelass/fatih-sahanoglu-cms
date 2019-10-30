import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default ({children}) => (
  <React.Fragment>
    <Navbar />
	  {children}
    <Footer />
  </React.Fragment>
);
