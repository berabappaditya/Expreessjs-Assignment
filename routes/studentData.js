const express = require("express");
const router = express.Router();
const fs = require("fs");
const dataFilePath = `${__dirname}/data`;

router.post("/addData", (req, res) => {
  const clientData = req.body;
  fs.writeFile(
    `${dataFilePath}/studentsData.json`,
    JSON.stringify(clientData),
    (err) => {
      if (err) {
        console.log("studentdata post error is:", err);
      } else {
        console.log("Data File created successfully");
        res.send({ result: "Data Created Successfully" });
      }
    }
  );
});
router.get("/getData", (req, res) => {
  fs.readFile(`${dataFilePath}/studentsData.json`, (err, data) => {
    const readDataJson = JSON.parse(data);
    err
      ? console.log("you Got the error mission failed", err)
      : res.send(readDataJson);
  });
});
module.exports = router;
