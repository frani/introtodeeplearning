import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import { routex } from "../constants/routes";

import Logo from "../assets/images/logo.svg";

const NavbarComponent = (props) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 80) setClosed(true);
    else setClosed(false);
  };

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        sticky="top"
        aria-label="Main navigation"
        className={closed ? "shadow-sm p-1" : "p-3"}
      >
        <Container>
          <Navbar.Brand>
            <Link
              to={routex.HOME.path + "#home"}
              smooth
              className="navbar-brand logo-image"
            >
              <img src={Logo} alt="alternative" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Item>
                <Link
                  smooth
                  activeClassName="active"
                  className="nav-link"
                  to={routex.HOME.path + "#home"}
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  smooth
                  activeClassName="active"
                  className="nav-link"
                  to={routex.HOME.path + "#about"}
                >
                  About
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  smooth
                  activeClassName="active"
                  className="nav-link"
                  to={routex.HOME.path + "#lectures"}
                >
                  Lectures
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  smooth
                  activeClassName="active"
                  className="nav-link"
                  to={routex.HOME.path + "#team"}
                >
                  Team
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  smooth
                  activeClassName="active"
                  className="nav-link"
                  to={routex.HOME.path + "#faq"}
                >
                  FAQ
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Button className="btn-solid-sm">Get quote</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav
        className="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
      >
        <div className="container">
          

          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#header">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#details">
                  Lectures
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Team
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  aria-expanded="false"
                >
                  Drop
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li>
                    <a className="dropdown-item" href="article.html">
                      Article Details
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="terms.html">
                      Terms Conditions
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="privacy.html">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <span className="nav-item">
              <a className="btn-solid-sm" href="#contact">
                Get quote
              </a>
            </span>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default NavbarComponent;
