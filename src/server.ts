import express from "express";

import cors from "cors";

import enterprisesRouter from "./Routes/enterprise";

import usersRouter from "./Routes/user";

import interferencesRoutes from "./Routes/interference";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/enterprises", enterprisesRouter);

app.use("/users", usersRouter);

app.use("/interferences", interferencesRoutes);

app.listen(5000, () => {
  console.log("Server running on port: 5000");
});
