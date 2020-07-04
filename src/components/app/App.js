import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../randomPlanet";
import ItemList from "../itemList";
import PersonDetails from "../personDetails";

import "./App.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 5,
  };
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !this.showRandomPlanet,
      };
    });
  };
  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
