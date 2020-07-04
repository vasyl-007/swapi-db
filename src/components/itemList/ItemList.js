import React, { Component } from "react";
import SwapiService from "../../services/SwapiService";
import "./ItemList.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) =>
      this.setState({
        peopleList,
      })
    );
  }

  renderItems(arr) {
    return arr.map((people) => {
      return (
        <li
          key={people.id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(people.id)}
        >
          {people.name}
        </li>
      );
    });
  }
  // const items = peopleList.map((people) => {
  //   return (
  //     <li key={people.id} className="list-group-item">
  //       {people.name}
  //     </li>
  //   );
  // });

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }
    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
