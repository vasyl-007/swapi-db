import React, { Component } from "react";
import "./PeoplePage.css";
import PersonDetails from "../personDetails";
import ItemList from "../itemList";
import ErrorIndicator from "../errorIndicator";
import SwapiService from "../../services/SwapiService";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 5,
    hasError: false,
  };
  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={(item) => `${item.name} (${item.gender})`}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
