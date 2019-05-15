import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <input
            type="search"
            className="country-search-input"
            placeholder="Search"
          />
          <div className="dropdown">
            <button className="dropbtn">Language: EN</button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
