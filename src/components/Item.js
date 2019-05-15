import React, { Component } from "react";
import AppContext from "./AppContext";

export default class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContext.Consumer>
          {context => (
            <li onClick={context.selectCountryFunc}>{this.props.data.name}</li>
          )}
        </AppContext.Consumer>
      </React.Fragment>
    );
  }
}
