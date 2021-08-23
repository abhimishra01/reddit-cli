#! /usr/local/bin/node

import axios from "axios";
import open from "open";

const API = "https://reddit.com/.json";
const argv = process.argv;

const res = await axios.get(API);
const children = res.data.data.children;

const randomPost = children[Math.floor(Math.random() * children.length)].data;
const link = "https://reddit.com" + randomPost.permalink;

if (argv[2] === "print") {
  console.log(`
    title: ${randomPost.title}
    link: ${link}
    `);
} else {
  open(link);
}
