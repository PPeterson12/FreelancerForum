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

const occupation = ["gardener", "programmer", "teacher", "gardner"];

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
        ${freeLancer.name} is ${freeLancer.occupation} and cost $${freeLancer.price} an hour
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
  const jobIndex = Math.floor(Math.random() * occupation.length);
  const occupationName = occupation[jobIndex];

  const cost = Math.ceil(Math.random() * 100);
  const randomProduct = {
    name: name,
    occupation: occupationName,
    price: cost,
  };
  freeLancer.push(randomProduct);
  render();
  if (freeLancer.length === 15) {
    clearInterval(interval);
  }
}, 1000);
