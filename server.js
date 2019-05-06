const accessLogger = require("./lib/log/accessLogger"); // ADD
const logger = require("./lib/log/logger").application;
const systemLogger = require("./lib/log/systemLogger");
const express = require("express");
const app = express();
app.use(systemLogger());
// ADD
app.use(accessLogger());

app.get('/', (req, res) => {
  logger.debug('デバッグログが出力されます');
  res.send('log test');
});

// ADD
app.get("/access1", (req, res) => {
  res.status(200).send("access test 200");
});
// ADD
app.get("/access2", (req, res) => {
  res.status(304).send("access test 304");
});
// ADD
app.get("/access3", (req, res) => {
  res.status(404).send("access test 404");
});
// ADD
app.get("/access4", (req, res) => {
  res.status(500).send("access test 500");
});

app.get("/error", (req, res) => {
  throw new Error("システムログの出力テスト Errorです");
});

app.listen(3000);