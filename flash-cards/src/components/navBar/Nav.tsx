import * as React from "react";

export default class Nav extends React.Component<any, any> {
  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">
                Create a Flash Card
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
