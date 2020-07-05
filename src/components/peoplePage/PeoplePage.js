import React, { Component } from "react";
import "./PeoplePage.css";
import PersonDetails from "../personDetails";
import ItemList from "../itemList";
import ErrorIndicator from "../errorIndicator";
import SwapiService from "../../services/SwapiService";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { Row } from "../row/Row";

// class ErrorBoundary extends Component {
//   state = {
//     hasError: false,
//   };
//   componentDidCatch() {
//     this.setState({ hasError: true });
//   }
//   render() {
//     if (this.state.hasError) {
//       return <ErrorIndicator />;
//     }
//     return this.props.children;
//   }
// }

// const Row = ({ leftSide, rightSide }) => {
//   return (
//     <div className="row mb2">
//       <div className="col-md-6">{leftSide}</div>
//       <div className="col-md-6">{rightSide}</div>
//     </div>
//   );
// };

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
  //   componentDidCatch(error, info) {
  //     this.setState({ hasError: true });
  //   }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ErrorBoundary>
        <ItemList
          onItemSelected={this.onItemSelected}
          getData={this.swapiService.getAllPeople}
          renderItem={(item) => `${item.name} (${item.gender})`}
        />
      </ErrorBoundary>
    );
    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );
    return (
      <div>
        <ErrorBoundary>
          <Row leftSide={itemList} rightSide={personDetails} />
        </ErrorBoundary>
        {/* <Row leftSide={<p>Hello</p>} rightSide={<span>World</span>} /> */}
      </div>
      //   <div className="row mb2">
      //     <div className="col-md-6">
      //       {/* {itemList} */}
      //       <ItemList
      //         onItemSelected={this.onItemSelected}
      //         getData={this.swapiService.getAllPeople}
      //         renderItem={(item) => `${item.name} (${item.gender})`}
      //       >
      //         {/* {(item) => `${item.name} (${item.gender})`} */}
      //       </ItemList>
      //     </div>
      //     <div className="col-md-6">
      //       {/* <PersonDetails personId={this.state.selectedPerson} /> */}
      //       {personDetails}
      //     </div>
      //   </div>
    );
  }
}
