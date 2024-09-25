import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    status: "200",
    message: "Hello World  How are You",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
