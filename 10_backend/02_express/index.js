require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

let userData = [];
let userId = 1;

//getting data
app.post("/users", (req, res) => {
  const { name, rollno } = req.body;
  const newUser = { id: userId++, name, rollno };
  userData.push(newUser);
  res.status(200).send(newUser);
});

//printing data
app.get("/users", (req, res) => {
  res.status(200).send(userData);
});

//getting specific data through id
app.get("/users/:id", (req, res) => {
  const user = userData.find((t) => t.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.status(200).send(user);
});

//To Update
app.put("/users/:id", (req, res) => {
  const user = userData.find((t) => t.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  const { name, rollno } = req.body;
  (user.name = name), (user.rollno = rollno);
  res.status(200).send(user);
});

//Delete Method
app.delete("/users/:id", (req, res) => {
  const index = userData.findIndex((t) => t.id === parseInt(req.params.id));
  console.log(index);
  if (index === -1) {
    return res.status(404).send("invalid input");
  }
  userData.splice(index, 1);
  res.status(200).send("Deleted Succesfully");
});

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
