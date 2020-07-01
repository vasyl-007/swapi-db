import React, { Component } from "react";

import Spinner from "../spinner";
import SwapiService from "../../services/SwapiService";

import "./RandomPlanet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };
  constructor() {
    super();
    this.updatePlanet();
  }
  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  updatePlanet() {
    const id = 12;
    this.swapiService.getPlanet(id).then((planet) => {
      console.log("Planet0", planet);
      this.setState({
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      });
    });
  }

  render() {
    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = () => {
  // const { id, name, population, rotationPeriod, diameter } = planet;
  const { name, population, rotationPeriod, diameter } = this.state;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src="https://starwars-visualguide.com/assets/img/planets/12.jpg"
        // src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="random-planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
