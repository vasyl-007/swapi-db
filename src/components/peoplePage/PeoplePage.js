import React, { Component } from "react";
import "./PeoplePage.css";
import PersonDetails from "../personDetails";
import ItemList from "../itemList";
import ErrorIndicator from "../errorIndicator";

export default class PeoplePage extends Component {
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
      <>
        <p>People Page</p>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </>
    );
  }
}
