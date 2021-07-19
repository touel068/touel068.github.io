import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./images/logo.png"


function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link  class="navbar-brand" to="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
           Cretaceous Park
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/">
                 Park
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/Dinosaurs" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/Dinosaurs">
                  Dinosaurs
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/Activities" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/Activities">
                  Activities
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/Tickets" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/Tickets">
                  Tickets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);