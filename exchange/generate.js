import Cryptr from "cryptr";
import dotenv from "dotenv";
import fs from "fs";
import { nanoid } from "nanoid";

dotenv.config();

let names;
try {
  names = process.env.NAMES.split(",");
} catch (err) {
  throw new Error("No 'NAMES' field in .env!");
}

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

const linkMap = {};
const exchangeMap = {};

names.forEach((name, index) => {
  const id = nanoid(10);
  const c = new Cryptr(id);

  linkMap[id] = name;

  const recipient = index == names.length - 1 ? names[0] : names[index + 1];

  exchangeMap[id] = {
    gifter: c.encrypt(name),
    recipient: c.encrypt(recipient),
  };
});
const json = JSON.stringify(exchangeMap);

fs.writeFileSync("./exchange/exchange.json", json, (err) => {
  err && console.error(err);
});

const msg = "Successfully generated the exchange!";
console.log(msg);
console.log("=".repeat(msg.length));
console.log("Send the following links to their corresponding participant:");
console.log("\n");
Object.entries(linkMap).forEach(([key, value]) => {
  console.log(`${value} => /${key}`);
});
