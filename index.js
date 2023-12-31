const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./Routes/user.route");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);



app.listen(5050, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("Server is runing at 5050");
});