import React, { Component } from "react";
import Item from "./Item";
import AppContext from "./AppContext";

export default class List extends Component {
  render() {
    return (
      <div className="list">
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
