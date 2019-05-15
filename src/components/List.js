import React, { Component } from "react";
import Item from "./Item";
import AppContext from "./AppContext";
import "./List.css";

export default class List extends Component {
  render() {
    return (
      <div className="country-list-container">
        <ul>
          <AppContext.Consumer>
            {context =>
              context.data.map((country, index) => {
                return <Item data={country} key={index} />;
              })
            }
          </AppContext.Consumer>
        </ul>
      </div>
    );
  }
}
