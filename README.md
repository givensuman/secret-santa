# secret-santa

<img src="./assets/screenshot.png" alt="screenshot" />

<br />

My family runs a secret santa exchange every year, and I decided to step it up a notch this year.
The `generate` script for this project takes the list of participants (in `/exchange/generate.js`), randomly provides them a recipient, and stores it as an encrypted JSON.

The result is decrypted through a unique link generated for each person, which I will manually send out. Top it off with some particle effects in JavaScript and there you have it!

This could, of course, be done more securely with a database and proper encryption methods. Currently all you need is the unique ID (which is stored plainly as the keys to `/exchange/exchange.json`) to discover any given partnership, but that's a little overkill for what's already probably overkill.
