import React from "react";

//components
import Navigation from "./Navigation";
import PersonInfo from "./PersonInfo";
import About from "./About";
import Repos from "./Repos";
import Form from "./Form";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <PersonInfo />
      <Repos />
      <About />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
