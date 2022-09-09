import React, { Component } from "react";
import "../assets/css/style.css";
import { Link, useSearchParams } from "react-router-dom";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      input: "None",
    };
  }
  getData(e) {
    this.setState({ input: e.target.value });
  }
  search(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.input);
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">
              NewsApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/"
                  >
                    ALL
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/plolitics">
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item text-dark " to="/sports">
                      Sports
                    </Link>
                    <Link className="dropdown-item text-dark " to="/crime">
                      Crime
                    </Link>
                    <Link className="dropdown-item text-dark " to="/education">
                      Education
                    </Link>
                    <Link className="dropdown-item text-dark " to="/technology">
                      Technology
                    </Link>
                    <Link className="dropdown-item text-dark " to="/jokes">
                      Jokes
                    </Link>
                    <Link
                      className="dropdown-item text-dark"
                      to="/entertainment"
                    >
                      Entertainment
                    </Link>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <button
                      className="dropdown-item text-dark"
                      onClick={() => this.props.changeLanguage("hi")}
                    >
                      {" "}
                      Hindi
                    </button>
                    <button
                      className="dropdown-item text-dark"
                      onClick={() => this.props.changeLanguage("en")}
                    >
                      English
                    </button>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Article-Size
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <button
                      className="dropdown-item text-dark"
                      onClick={() => this.props.changePageSize("8")}
                    >
                      8
                    </button>
                    <button
                      className="dropdown-item text-dark"
                      onClick={() => this.props.changePageSize("12")}
                    >
                      12
                    </button>
                    <button
                      className="dropdown-item text-dark"
                      onClick={() => this.props.changePageSize("16")}
                    >
                      16
                    </button>
                    <button
                      className="dropdown-item text-dark"
                      onClick={() => this.props.changePageSize("20")}
                    >
                      20
                    </button>
                    <button
                      className="dropdown-item text-dark"
                      onClick={() => this.props.changePageSize("24")}
                    >
                      24
                    </button>
                  </ul>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                onSubmit={(e) => this.search(e)}
              >
                <input
                  className="form-control me-2"
                  onChange={(e) => this.getData(e)}
                  name="input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success text-light"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
