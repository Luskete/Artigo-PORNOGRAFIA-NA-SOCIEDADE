import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };
  
    render() {
    return (

    <div className="App" id="head">

      <h1 id="titulo">
        PORNOGRAFIA E MALEFICIOS
      </h1>

      <nav className="nav" id="navbar">
        <div className="nav-content">
            
          <ul className="nav-items">

            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SOCIAL
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                MENTAL
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HORMONAL
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                INDUSTRIA
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                REFERÊNCIAS
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SOBRE
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
 }
}