import React, { Component } from "react";
import AppContext from "./AppContext";
import "./CountryDisplay.css";

export default class CountryDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="country-display-container">
          <AppContext.Consumer>
            {context => (
              <>
                <div className="country-disp-text">
                  <h3>{context.selectCountry.name}</h3>
                  <p>{context.selectCountry.region}</p>
                  <p>{context.selectCountry.subregion}</p>
                </div>
                <div className="country-disp-img">
                  <div className="flag-container">
                    <img src={context.selectCountry.flag} />
                  </div>
                </div>
              </>
            )}
          </AppContext.Consumer>
        </div>
      </React.Fragment>
    );
  }
}
