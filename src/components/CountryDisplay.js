import React, { Component } from "react";
import AppContext from "./AppContext";

export default class CountryDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="country-display-container">
          <AppContext.Consumer>
            {context => (
              <>
                <h3>{context.selectCountry.name}</h3>
                <p>{context.selectCountry.region}</p>
                <p>{context.selectCountry.subregion}</p>
                <img src={context.selectCountry.flag} />
              </>
            )}
          </AppContext.Consumer>
        </div>
      </React.Fragment>
    );
  }
}
