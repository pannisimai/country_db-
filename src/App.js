import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./App.css";
import CountryDisplay from "./components/CountryDisplay";
import AppProvider from "./components/AppProvider";

export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <Search />
              <List />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <CountryDisplay />
            </div>
          </div>
        </div>
      </AppProvider>
    );
  }
}
