#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const axios = require("axios");


const options = yargs
    .usage("Usage: -n <name>")
    .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
    .argv;

const greeting = `Hello, ${options.name}!`;

const title = chalk.white.bold("Joke of the day!");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};
const msgBox = boxen( title, boxenOptions );

console.log(msgBox);
console.log(greeting);


const url = "https://icanhazdadjoke.com/";

// does not work behind proxy!

axios.get(url, { headers: { Accept: "application/json" } })
    .then(res => {
        console.log(res.data.joke);
    })
    .catch(err => console.log("There was an error. Probably you are using this behind a corporate proxy. This is not supported."));
