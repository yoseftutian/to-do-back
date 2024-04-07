import express from "express";
import Todos from "./todos.mjs";
import { expressjwt as jwt } from "express-jwt";

const app = express();
const port = 3005;

app.use(json());
app.use(cors());
app.use(
  jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/users/login", "/users/register"] })
);
app.use("/todos", Todos);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
