import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Lectures from "../components/Lectures";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <section id="home">
      <Navbar />
      <Header />
      <About />
      <Lectures />
      <FAQ />
      <Team />
      <Sponsors />
      <Footer />
    </section>
  );
}
