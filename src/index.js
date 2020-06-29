console.log("Hello SWAPI");
// https://swapi.dev/

const getResource = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
  }
  const body = await res.json();
  return body;
};

getResource("https://swapi.dev/api/people/145645005vf40")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Could not fetch", err);
  });

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });
