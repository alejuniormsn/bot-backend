import { Router } from "express";
import { verifyToken } from "../jwt/jwt";
import escalaController from "../controllers/escalaController";

const control = new escalaController();

const escalaRouter = Router();

escalaRouter.get(
  "/consultaescala/:chapa",
  verifyToken,
  control.getEscala.bind(control)
);

export default escalaRouter;
