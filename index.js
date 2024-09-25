import express from "express";

const app = express();

// Route to handle the default GET request
app.get("/", (req, res) => {
  res.redirect(
    "https://static.tnn.in/thumb/msid-99167833,thumbsize-81038,width-1280,height-720,resizemode-75/99167833.jpg?quality=100"
  );
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
