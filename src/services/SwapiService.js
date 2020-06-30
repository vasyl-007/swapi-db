console.log("Hello SWAPI");
// https://swapi.dev/

export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }
  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }
  async getPlanet(id) {
    return await this.getResource(`/planets/${id}`);
  }
  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }
  async getStarship(id) {
    return await this.getResource(`/starships/${id}`);
  }
}

const swapi = new SwapiService();
// swapi.getAllPeople().then((people) => {
//   people.forEach((p) => {
//     console.log(p.name);
//   });
// });
swapi.getPerson(5).then((person) => {
  console.log(person.name);
});

// getResource("https://swapi.dev/api/people/145645005vf40")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("Could not fetch", err);
//   });

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });
