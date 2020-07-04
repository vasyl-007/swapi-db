import React, { Component } from "react";
import "./PersonDetails.css";
import SwapiService from "../../services/SwapiService";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person: null,
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }
  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService
      .getPerson(personId)
      .then((person) => this.setState({ person }));
  }

  render() {
    if (!this.state.person) {
      return <span>Please, select a person from the list</span>;
    }
    // console.log("this.state.person", this.state.person);
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="card-details"
        />

        <div key={id} className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender ? gender : <span>n/a</span>}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear ? birthYear : <span>n/a</span>}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor ? eyeColor : <span>n/a</span>}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
