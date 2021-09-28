import express from "express";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../src/components/app";

import { loadBlockchainData } from "./contract";
import { generateStaticPath } from "./utils";

const PORT = 8000;

const app = express();

app.use(express.static(generateStaticPath("")));

app.get("^/$", (req, res) => {
  fs.readFile(generateStaticPath("/index.html"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.get("/count", async (req, res) => {
  const { first, second, operation } = req.query;
  try {
    const value = await loadBlockchainData(first, second, operation);
    return res.send({ value });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`App launched on <http://localhost:${PORT}>`);
});
