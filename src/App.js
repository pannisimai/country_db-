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
        <Search />
        <div className="country-components-container">
          <List />
          <CountryDisplay />
        </div>
      </AppProvider>
    );
  }
}
