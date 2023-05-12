import express from "express";

import { HealthController } from "./health-controller";

const healthRouter = express.Router();

const healthController = new HealthController();

healthRouter.get("/", (req, res) => {
  healthController.run.bind(healthController);
  res.send("OK");
});

export { healthRouter };
