import AppContext from "./AppContext";

import React, { Component } from "react";

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectCountry: {},
      selectCountryFunc: e => {
        const clickedCountry = e.target.innerText;
        const filter = this.state.data.filter(
          country => country.name === clickedCountry
        );
        this.setState({ selectCountry: filter[0] });
      },
      searchTerm: "",
      filterFunc: inputValue => {
        this.setState({ searchTerm: inputValue });
      }
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          data
        })
      );
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
