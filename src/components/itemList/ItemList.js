import React, { Component } from "react";
// import SwapiService from "../../services/SwapiService";
import "./ItemList.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  // swapiService = new SwapiService();
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemList) =>
      this.setState({
        itemList,
      })
    );
    // this.swapiService.getAllPeople().then((itemList) =>
    //   this.setState({
    //     itemList,
    //   })
    // );
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }
  // const items = itemList.map((people) => {
  //   return (
  //     <li key={people.id} className="list-group-item">
  //       {people.name}
  //     </li>
  //   );
  // });

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
