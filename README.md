# secret-santa

<img src="./assets/screenshot.png" alt="screenshot" />

<br />

### What is this?

My family runs a secret santa exchange every year, and I decided to step it up a notch this year.
The `generate` script for this project takes the list of participants (in `/exchange/generate.js`), randomly provides them a recipient, and stores it as an encrypted JSON.

The result is decrypted through a unique link generated for each person, which I will manually send out. Top it off with some particle effects in JavaScript and there you have it!

This could, of course, be done more securely with a database and proper encryption methods. Currently all you need is the unique ID (which is stored plainly as the keys to `/exchange/exchange.json`) to discover any given partnership, but making this a proper app seems a little overkill for what's already probably overkill.

### Can I use this for my gift exchange?

Yes! Follow these steps:

Clone the repository:

```bash
git clone https://github.com/givensuman/secret-santa
```

And install dependencies:

```bash
cd secret-santa && pnpm install
```

Create a .env file with the names of the participants as a comma-seperated entry:

```bash
echo "NAMES=John,Alice,Bob" > .env
```

And generate the exchange!

```bash
pnpm generate
```

Then you can run the server locally with:

```bash
pnpm dev
```

until you're ready to host it somewhere. Good luck and happy holidays!
