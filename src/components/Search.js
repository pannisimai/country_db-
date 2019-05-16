import React, { Component } from "react";
import AppContext from "./AppContext";
export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContext.Consumer>
          {context => {
            return (
              <input
                type="text"
                className="country-search-input"
                placeholder="Search"
                onChange={e => context.filterFunc(e.target.value)}
              />
            );
          }}
        </AppContext.Consumer>
      </React.Fragment>
    );
  }
}
