import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    status: "200",
<<<<<<< HEAD
    message: "Hello World  How are You i woprking on docker   f",
=======
    message: "Hello World  How are You i woprking on docker cx",
>>>>>>> 7c99a7ac714ef81f6937df72eebddcbeca7fadb2
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
