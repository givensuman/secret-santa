import Cryptr from "cryptr";
import fs from "fs";
import { nanoid } from "nanoid";

const names = ["Corky", "Mama Jewels", "Celia", "Michel", "Emma", "Given"];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffle(names);

const exchangeMap = {};

names.forEach((name, index) => {
  const id = nanoid(10);
  const c = new Cryptr(id);

  const recipient = index == names.length - 1 ? names[0] : names[index + 1];

  exchangeMap[id] = {
    gifter: name,
    recipient: c.encrypt(recipient),
  };
});
const json = JSON.stringify(exchangeMap);

fs.writeFileSync("./exchange/exchange.json", json, (err) => {
  err && console.error(err);
});

const msg = "Successfully generated the exchange!";
console.log(msg);
console.log("=".repeat(msg.length) + "\n");
console.log("Text the following links to their corresponding person!");
Object.keys(exchangeMap).forEach((key) => {
  console.log(`${exchangeMap[key].gifter} => /${key}`);
});
