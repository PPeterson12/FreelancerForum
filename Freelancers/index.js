const spanFree = document.querySelector("#spanFree");

const spanAverageCost = document.querySelector("#spanAverageCost");

const ul = document.querySelector("ul");

let freeLancer = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
];

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",
];

const occupations = ["gardener", "programmer", "teacher", "gardner"];

function render() {
  spanFree.innerHTML = freeLancer.length;

  let sum = 0;
  freeLancer.forEach((freeLancer) => {
    sum = sum + freeLancer.price;
  });

  const average = sum / freeLancer.length;
  spanAverageCost.innerHTML = average.toFixed(2);

  const html = freeLancer
    .map((freeLancer) => {
      return `
      <li>
        ${freeLancer.name} is ${freeLancer.occupation} and cost $${freeLancer.price}
      </li>
    `;
    })
    .join("");

  ul.innerHTML = html;
}

render();

const interval = setInterval(() => {
  const nameIndex = Math.floor(Math.random() * names.length);
  const name = names[nameIndex];
  const occupationIndex = Math.floor(Math.random() * occupations.length);
  const jobs = occupations[occupationIndex];

  const cost = Math.ceil(Math.random() * 10);
  const randomProduct = {
    name: name,
    occupations: occupations,
    cost: cost,
  };
  freeLancer.push(randomProduct);
  render();
  if (freeLancer.length === 15) {
    clearInterval(interval);
  }
}, 1000);
