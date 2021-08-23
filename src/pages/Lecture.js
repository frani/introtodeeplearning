import React from "react";
import Navbar from "../components/Navbar";
import LectureComponent from "../components/Lecture";
import Footer from "../components/Footer";

const Lecture = (props) => {
  return (
    <>
      <Navbar />

      <LectureComponent />

      <Footer />
    </>
  );
};

export default Lecture;
