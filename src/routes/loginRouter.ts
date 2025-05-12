import { Router } from "express";
import loginController from "../controllers/loginController";

const control = new loginController();

const loginRouter = Router();

loginRouter.post("/login", control.postLogin.bind(control));

export default loginRouter;
