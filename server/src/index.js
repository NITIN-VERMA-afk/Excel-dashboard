import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import xlsx from "xlsx";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/updateCell", (req, res) => {
  const { newValue } = req.body;
  // console.log(newValue)
  if (!newValue) {
    return res.status(400).send("No new value provided.");
  }

  try {
    const workbook = xlsx.readFile("personalFinnace.xlsx");
    const worksheet = workbook.Sheets["Sheet1"];

    if (!worksheet) {
      console.error("Worksheet not found.");
      return res.status(404).send("Worksheet not found");
    }

    const cellRef = "B7";
    if (!worksheet[cellRef]) {
      worksheet[cellRef] = {};
    }
    worksheet[cellRef].v = newValue;

    xlsx.writeFile(workbook, "Updated_PersonalFinnace.xlsx");
    res.download("Updated_personalFinnace.xlsx", "personalFinnace.xlsx");

    res.status(200).send("Cell updated successfully");
  } catch (error) {
    console.error("Failed to update cell:", error);
    res.status(500).send("Failed to update the cell");
  }
});

app.get("/workbookToJson", (req, res) => {
  try {
    const workbook = xlsx.readFile("Updated_PersonalFinnace.xlsx");

    const sheetNames = workbook.SheetNames;

    const jsonData = {};

    sheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];

      const sheetData = xlsx.utils.sheet_to_json(worksheet);

      jsonData[sheetName] = sheetData;
    });

    res.send(jsonData);
  } catch (error) {
    console.error("Failed to convert workbook to JSON:", error);
    res.status(500).send("Failed to convert workbook to JSON");
  }
});


app.post("/updateMarketingCell", (req, res) => {
  const { newValue } = req.body;
  // console.log(newValue)
  if (!newValue) {
    return res.status(400).send("No new value provided.");
  }

  try {
    const workbook = xlsx.readFile("Marketing.xlsx");
    const worksheet = workbook.Sheets["DASHBOARD"];

    if (!worksheet) {
      console.error("Worksheet not found.");
      return res.status(404).send("Worksheet not found");
    }

    const cellRef = "P15";
    if (!worksheet[cellRef]) {
      worksheet[cellRef] = {};
    }
    worksheet[cellRef].v = newValue;

    xlsx.writeFile(workbook, "Updated_Marketing.xlsx");
    res.download("Updated_Marketing.xlsx", "Marketing.xlsx");

    res.status(200).send("Cell updated successfully");
  } catch (error) {
    console.error("Failed to update cell:", error);
    res.status(500).send("Failed to update the cell");
  }
});
app.get("/MarketingworkbookToJson", (req, res) => {
  try {
    const workbook = xlsx.readFile("Updated_Marketing.xlsx");

    const sheetNames = workbook.SheetNames;

    const jsonData = {};

    sheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];

      const sheetData = xlsx.utils.sheet_to_json(worksheet);

      jsonData[sheetName] = sheetData;
    });

    res.send(jsonData);
  } catch (error) {
    console.error("Failed to convert workbook to JSON:", error);
    res.status(500).send("Failed to convert workbook to JSON");
  }
});

app.post("/updateSalesData", (req, res) => {
  const { newValue } = req.body;
  // console.log(newValue)
  if (!newValue) {
    return res.status(400).send("No new value provided.");
  }

  try {
    const workbook = xlsx.readFile("Sales.xlsx");
    const worksheet = workbook.Sheets["DASHBOARD"];

    if (!worksheet) {
      console.error("Worksheet not found.");
      return res.status(404).send("Worksheet not found");
    }

    const cellRef = "R12";
    if (!worksheet[cellRef]) {
      worksheet[cellRef] = {};
    }
    worksheet[cellRef].v = newValue;

    xlsx.writeFile(workbook, "Updated_Sales.xlsx");
    res.download("Updated_Sales.xlsx", "Sales.xlsx");

    res.status(200).send("Cell updated successfully");
  } catch (error) {
    console.error("Failed to update cell:", error);
    res.status(500).send("Failed to update the cell");
  }
});

app.get("/SalesworkbookToJson", (req, res) => {
  try {
    const workbook = xlsx.readFile("Updated_Sales.xlsx");

    const sheetNames = workbook.SheetNames;

    const jsonData = {};

    sheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];

      const sheetData = xlsx.utils.sheet_to_json(worksheet);

      jsonData[sheetName] = sheetData;
    });

    res.send(jsonData);
  } catch (error) {
    console.error("Failed to convert workbook to JSON:", error);
    res.status(500).send("Failed to convert workbook to JSON");
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
